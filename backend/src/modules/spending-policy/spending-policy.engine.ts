/**
 * ALPH PAY · Deterministic Spending & Policy Engine
 * Core Backend Component: Executes granular governance rules for child transactions
 */

export interface EvaluationContext {
  childId: string;
  parentId: string;
  childName: string;
  isChildActive: boolean;
  walletBalance: number;
  spentToday: number;
  spentThisMonth: number;
  txCompletedToday: number;
  policy: {
    spendingMode: 'LIMITS_AUTO_APPROVE' | 'APPROVE_EVERY_PAYMENT';
    dailyLimit: number;
    dailyTxCountLimit: number;
    monthlyLimit: number;
    perTransactionLimit: number;
    blockedCategories: string[];
    blockedMerchants: string[];
  };
  incomingPayment: {
    merchantName: string;
    merchantMcc?: string;
    category: string;
    amount: number;
    currency: string;
  };
}

export enum EvaluationOutcome {
  APPROVED = 'APPROVED',
  BLOCKED = 'BLOCKED',
  APPROVAL_REQUIRED = 'APPROVAL_REQUIRED',
}

export interface PolicyEvaluationResult {
  outcome: EvaluationOutcome;
  canProceedAutomatically: boolean;
  reasonCode: string;
  humanMessage: string;
  context: {
    childId: string;
    amount: number;
    exceededBy?: number;
    blockedCategory?: string;
    blockedMerchant?: string;
  };
}

export class SpendingPolicyEngine {
  /**
   * Deterministically evaluates whether a child's payment can proceed, is blocked,
   * or requires immediate real-time parent biometric approval.
   */
  public static evaluate(ctx: EvaluationContext): PolicyEvaluationResult {
    const { isChildActive, walletBalance, spentToday, spentThisMonth, policy, incomingPayment } = ctx;
    const amount = incomingPayment.amount;

    // Rule 1: Child Account Status Verification
    if (!isChildActive) {
      return {
        outcome: EvaluationOutcome.BLOCKED,
        canProceedAutomatically: false,
        reasonCode: 'ACCOUNT_INACTIVE_OR_SUSPENDED',
        humanMessage: 'Child account is currently suspended or inactive.',
        context: { childId: ctx.childId, amount },
      };
    }

    // Rule 2: Sufficient Balance Check
    if (walletBalance < amount) {
      return {
        outcome: EvaluationOutcome.BLOCKED,
        canProceedAutomatically: false,
        reasonCode: 'INSUFFICIENT_FUNDS',
        humanMessage: `Insufficient balance. Available SAR ${walletBalance.toFixed(2)}, required SAR ${amount.toFixed(2)}.`,
        context: { childId: ctx.childId, amount },
      };
    }

    // Rule 3: Blocked Merchant Category Check (e.g. Gaming, Gambling)
    const isCategoryBlocked = policy.blockedCategories.some(
      (cat) => cat.toLowerCase() === incomingPayment.category.toLowerCase()
    );
    if (isCategoryBlocked) {
      return {
        outcome: EvaluationOutcome.BLOCKED,
        canProceedAutomatically: false,
        reasonCode: 'CATEGORY_RESTRICTED',
        humanMessage: `Merchant category '${incomingPayment.category}' is restricted by parent policy.`,
        context: { childId: ctx.childId, amount, blockedCategory: incomingPayment.category },
      };
    }

    // Rule 4: Specific Blocked Merchant Name Check
    const isMerchantBlocked = policy.blockedMerchants.some(
      (m) => m.toLowerCase() === incomingPayment.merchantName.toLowerCase()
    );
    if (isMerchantBlocked) {
      return {
        outcome: EvaluationOutcome.BLOCKED,
        canProceedAutomatically: false,
        reasonCode: 'MERCHANT_BLOCKED',
        humanMessage: `Merchant '${incomingPayment.merchantName}' is specifically blocked by parent.`,
        context: { childId: ctx.childId, amount, blockedMerchant: incomingPayment.merchantName },
      };
    }

    // Rule 5: Strict Mode ("Approve Every Payment") Check
    if (policy.spendingMode === 'APPROVE_EVERY_PAYMENT') {
      return {
        outcome: EvaluationOutcome.APPROVAL_REQUIRED,
        canProceedAutomatically: false,
        reasonCode: 'PARENT_STRICT_APPROVAL_MODE',
        humanMessage: 'Parent policy requires confirmation for every payment transaction.',
        context: { childId: ctx.childId, amount },
      };
    }

    // Rule 6: Per-Transaction Limit Check
    if (amount > policy.perTransactionLimit) {
      return {
        outcome: EvaluationOutcome.APPROVAL_REQUIRED,
        canProceedAutomatically: false,
        reasonCode: 'PER_TRANSACTION_LIMIT_EXCEEDED',
        humanMessage: `Amount SAR ${amount.toFixed(2)} exceeds per-transaction limit of SAR ${policy.perTransactionLimit.toFixed(2)}.`,
        context: { childId: ctx.childId, amount, exceededBy: amount - policy.perTransactionLimit },
      };
    }

    // Rule 7: Daily Transaction Count Limit Check (Max transactions allowed per day)
    if (ctx.txCompletedToday >= policy.dailyTxCountLimit) {
      return {
        outcome: EvaluationOutcome.APPROVAL_REQUIRED,
        canProceedAutomatically: false,
        reasonCode: 'DAILY_TRANSACTION_COUNT_LIMIT_REACHED',
        humanMessage: `Daily transaction limit reached (${ctx.txCompletedToday}/${policy.dailyTxCountLimit} tx completed today). Parent Approval Required.`,
        context: { childId: ctx.childId, amount, exceededBy: (ctx.txCompletedToday + 1) - policy.dailyTxCountLimit },
      };
    }

    // Rule 8: Daily Cumulative Amount Limit Check
    const projectedDailySpend = spentToday + amount;
    if (projectedDailySpend > policy.dailyLimit) {
      return {
        outcome: EvaluationOutcome.APPROVAL_REQUIRED,
        canProceedAutomatically: false,
        reasonCode: 'DAILY_LIMIT_EXCEEDED',
        humanMessage: `Payment exceeds daily limit. Today's spend: SAR ${spentToday.toFixed(2)}, Limit: SAR ${policy.dailyLimit.toFixed(2)}.`,
        context: { childId: ctx.childId, amount, exceededBy: projectedDailySpend - policy.dailyLimit },
      };
    }

    // Rule 9: Monthly Cumulative Limit Check
    const projectedMonthlySpend = spentThisMonth + amount;
    if (projectedMonthlySpend > policy.monthlyLimit) {
      return {
        outcome: EvaluationOutcome.APPROVAL_REQUIRED,
        canProceedAutomatically: false,
        reasonCode: 'MONTHLY_LIMIT_EXCEEDED',
        humanMessage: `Payment exceeds monthly limit of SAR ${policy.monthlyLimit.toFixed(2)}.`,
        context: { childId: ctx.childId, amount, exceededBy: projectedMonthlySpend - policy.monthlyLimit },
      };
    }

    // All Governance Rules Passed -> Auto-approve
    return {
      outcome: EvaluationOutcome.APPROVED,
      canProceedAutomatically: true,
      reasonCode: 'POLICY_PASSED_AUTO_APPROVED',
      humanMessage: 'Payment approved under configured spending limits.',
      context: { childId: ctx.childId, amount },
    };
  }
}
