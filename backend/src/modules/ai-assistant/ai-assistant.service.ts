/**
 * ALPH PAY · AI Contextual Financial Assistant Module
 * Provides explainability, budget summaries, and transaction insights
 * Guardrail: AI explains decisions but DOES NOT authorize money movements independently.
 */

export interface TransactionExplanationRequest {
  childName: string;
  merchantName: string;
  category: string;
  amount: number;
  policyReasonCode: string;
  dailyLimit: number;
  spentToday: number;
}

export class AIAssistantService {
  /**
   * Generates clear, humanized financial explanations for the Parent & Child
   */
  public static explainTransactionDecision(req: TransactionExplanationRequest): {
    parentSummary: string;
    childSummary: string;
    actionableTip: string;
  } {
    const { childName, merchantName, amount, policyReasonCode, dailyLimit, spentToday } = req;

    switch (policyReasonCode) {
      case 'DAILY_LIMIT_EXCEEDED':
        return {
          parentSummary: `${childName} has spent SAR ${spentToday.toFixed(2)} today. This SAR ${amount.toFixed(2)} purchase at ${merchantName} exceeds the daily limit (SAR ${dailyLimit.toFixed(2)}) by SAR ${(spentToday + amount - dailyLimit).toFixed(2)}.`,
          childSummary: `This purchase is SAR ${(spentToday + amount - dailyLimit).toFixed(2)} above your daily limit. We asked Dad for approval!`,
          actionableTip: `Tip: You can temporarily approve this single purchase without permanently increasing ${childName}'s daily limit.`,
        };

      case 'CATEGORY_RESTRICTED':
        return {
          parentSummary: `${childName} attempted to pay at ${merchantName}, which falls under restricted category '${req.category}'. The transaction was automatically blocked as per your safety rules.`,
          childSummary: `Purchases in '${req.category}' are turned off by your Dad to keep your spending focused.`,
          actionableTip: `To allow this merchant, navigate to 05.5 Merchant Controls and whitelist ${merchantName}.`,
        };

      case 'INSUFFICIENT_FUNDS':
        return {
          parentSummary: `${childName}'s wallet does not have enough funds for this purchase. Next scheduled allowance is approaching.`,
          childSummary: `You need SAR ${amount.toFixed(2)}, but your wallet is low right now. You can request extra money from Dad!`,
          actionableTip: `Consider setting up an instant one-off transfer via Quick Actions (08.1).`,
        };

      default:
        return {
          parentSummary: `${childName} made a normal purchase of SAR ${amount.toFixed(2)} at ${merchantName}.`,
          childSummary: `Payment of SAR ${amount.toFixed(2)} went through smoothly!`,
          actionableTip: `Great spending pacing this week.`,
        };
    }
  }

  /**
   * Generates a monthly financial wellness summary for the Parent Dashboard
   */
  public static generateFamilySpendingInsights(childrenData: Array<{ name: string; spent: number; allowance: number }>): string {
    const totalSpent = childrenData.reduce((acc, c) => acc + c.spent, 0);
    const totalAllowance = childrenData.reduce((acc, c) => acc + c.allowance, 0);
    const savingsRate = Math.round(((totalAllowance - totalSpent) / totalAllowance) * 100);

    return `Your family is saving ${savingsRate}% of allocated funds this period. Sara is pacing well with school supplies, while Omar has stayed 100% within daily gaming boundaries.`;
  }
}
