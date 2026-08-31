import { SpendingPolicyEngine, EvaluationContext, EvaluationOutcome } from './src/services/SpendingPolicyEngine';

const baseContext: EvaluationContext = {
  childId: 'sara',
  parentId: 'ahmed',
  childName: 'Sara Al-Farsi',
  isChildActive: true,
  walletBalance: 2000.00, // Large wallet balance to avoid insufficient funds
  spentToday: 10.00,
  spentThisMonth: 100.00,
  txCompletedToday: 1,
  policy: {
    spendingMode: 'LIMITS_AUTO_APPROVE',
    dailyLimit: 50.00,
    dailyTxCountLimit: 3,
    monthlyLimit: 400.00,
    perTransactionLimit: 30.00,
    blockedCategories: ['Gaming', 'Gambling'],
    blockedMerchants: ['Steam Games', 'Roblox Corp']
  },
  incomingPayment: {
    merchantName: 'Al Jarir Bookstore',
    category: 'Education & Books',
    amount: 15.00,
    currency: 'SAR'
  }
};

function runTest(name: string, modifier: (ctx: EvaluationContext) => void, expectedOutcome: EvaluationOutcome, expectedReason?: string) {
  const ctx = JSON.parse(JSON.stringify(baseContext)) as EvaluationContext;
  modifier(ctx);
  const result = SpendingPolicyEngine.evaluate(ctx);
  const success = result.outcome === expectedOutcome && (!expectedReason || result.reasonCode === expectedReason);
  
  console.log(`TEST: ${name}`);
  console.log(`  Outcome: ${result.outcome} (Expected: ${expectedOutcome})`);
  console.log(`  Reason: ${result.reasonCode} (Expected: ${expectedReason || 'Any'})`);
  console.log(`  Message: ${result.humanMessage}`);
  console.log(`  Status: ${success ? 'PASSED ✅' : 'FAILED ❌'}`);
  if (!success) {
    process.exit(1);
  }
}

console.log('--- STARTING SPENDING POLICY TESTS ---');

// TEST 1: Transaction below all limits -> APPROVED
runTest('Transaction below all limits', (ctx) => {}, EvaluationOutcome.APPROVED, 'POLICY_PASSED_AUTO_APPROVED');

// TEST 2: Daily limit exceeded
runTest('Daily limit exceeded', (ctx) => {
  ctx.policy.perTransactionLimit = 100.00; // Raise per-tx limit
  ctx.incomingPayment.amount = 45.00; // 10.00 + 45.00 = 55.00 > 50.00 daily limit
}, EvaluationOutcome.APPROVAL_REQUIRED, 'DAILY_LIMIT_EXCEEDED');

// TEST 3: Monthly limit exceeded
runTest('Monthly limit exceeded', (ctx) => {
  ctx.policy.perTransactionLimit = 500.00; // Raise per-tx limit
  ctx.policy.dailyLimit = 1000.00; // Raise daily limit
  ctx.incomingPayment.amount = 301.00; // 100.00 + 301.00 = 401.00 > 400.00 monthly limit
}, EvaluationOutcome.APPROVAL_REQUIRED, 'MONTHLY_LIMIT_EXCEEDED');

// TEST 4: Per-transaction limit exceeded
runTest('Per-transaction limit exceeded', (ctx) => {
  ctx.incomingPayment.amount = 35.00; // > 30.00 per-transaction limit
}, EvaluationOutcome.APPROVAL_REQUIRED, 'PER_TRANSACTION_LIMIT_EXCEEDED');

// TEST 5: Transaction count exceeded
runTest('Transaction count exceeded', (ctx) => {
  ctx.txCompletedToday = 3; // = 3 dailyTxCountLimit
}, EvaluationOutcome.APPROVAL_REQUIRED, 'DAILY_TRANSACTION_COUNT_LIMIT_REACHED');

// TEST 6: Allowed category
runTest('Allowed category', (ctx) => {
  ctx.incomingPayment.category = 'Food & Drinks';
}, EvaluationOutcome.APPROVED, 'POLICY_PASSED_AUTO_APPROVED');

// TEST 7: Blocked category
runTest('Blocked category', (ctx) => {
  ctx.incomingPayment.category = 'Gaming';
}, EvaluationOutcome.BLOCKED, 'CATEGORY_RESTRICTED');

// TEST 8: Allowed merchant
runTest('Allowed merchant', (ctx) => {
  ctx.incomingPayment.merchantName = 'Noon Express';
}, EvaluationOutcome.APPROVED, 'POLICY_PASSED_AUTO_APPROVED');

// TEST 9: Blocked merchant
runTest('Blocked merchant', (ctx) => {
  ctx.incomingPayment.merchantName = 'Steam Games';
}, EvaluationOutcome.BLOCKED, 'MERCHANT_BLOCKED');

// TEST 10: Multiple rules violated simultaneously
runTest('Multiple rules violated simultaneously', (ctx) => {
  ctx.incomingPayment.category = 'Gaming'; // Blocked Category (Outcome: BLOCKED)
  ctx.incomingPayment.amount = 100.00; // Exceeds Per-Transaction Limit and Daily Limit (Outcome: APPROVAL_REQUIRED)
}, EvaluationOutcome.BLOCKED, 'CATEGORY_RESTRICTED');

console.log('--- ALL SPENDING POLICY TESTS PASSED SUCCESSFULLY! ---');
