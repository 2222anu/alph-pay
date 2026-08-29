/**
 * ALPH PAY · Payments & Transfers REST API Controller
 * Endpoints for Parent funding, QR validation, Child checkout, and SAMA receipts
 */

import { SpendingPolicyEngine, EvaluationOutcome } from '../spending-policy/spending-policy.engine';
import { AIAssistantService } from '../ai-assistant/ai-assistant.service';

export interface InitiatePaymentDto {
  childId: string;
  merchantName: string;
  merchantMcc?: string;
  category: string;
  amount: number;
  currency: string;
  note?: string;
}

export class PaymentsController {
  /**
   * POST /api/v1/payments/evaluate-and-process
   * Main entry point when Child scans a merchant QR code
   */
  public async processChildPayment(dto: InitiatePaymentDto) {
    // In production, context is fetched from PostgreSQL via Wallet & SpendingPolicy repositories
    const mockContext = {
      childId: dto.childId,
      parentId: 'parent-ahmed-01',
      childName: 'Sara Al-Farsi',
      isChildActive: true,
      walletBalance: 185.00,
      spentToday: 5.00,
      spentThisMonth: 115.00,
      policy: {
        spendingMode: 'LIMITS_AUTO_APPROVE' as const,
        dailyLimit: 50.00,
        monthlyLimit: 400.00,
        perTransactionLimit: 50.00,
        blockedCategories: ['Gaming', 'Gambling', 'Adult Content'],
        blockedMerchants: ['Roblox Corp', 'Steam Games'],
      },
      incomingPayment: {
        merchantName: dto.merchantName,
        category: dto.category,
        amount: dto.amount,
        currency: dto.currency || 'SAR',
      },
    };

    // 1. Run deterministic policy engine
    const evaluation = SpendingPolicyEngine.evaluate(mockContext);

    // 2. Generate contextual AI explanation
    const explanation = AIAssistantService.explainTransactionDecision({
      childName: mockContext.childName,
      merchantName: dto.merchantName,
      category: dto.category,
      amount: dto.amount,
      policyReasonCode: evaluation.reasonCode,
      dailyLimit: mockContext.policy.dailyLimit,
      spentToday: mockContext.spentToday,
    });

    if (evaluation.outcome === EvaluationOutcome.APPROVED) {
      return {
        success: true,
        status: 'COMPLETED',
        authReference: `SAMA-AUTH-${Date.now()}`,
        message: evaluation.humanMessage,
        explanation: explanation.childSummary,
        receipt: {
          merchant: dto.merchantName,
          amount: dto.amount,
          currency: 'SAR',
          timestamp: new Date().toISOString(),
        },
      };
    } else if (evaluation.outcome === EvaluationOutcome.APPROVAL_REQUIRED) {
      return {
        success: false,
        status: 'APPROVAL_REQUIRED',
        requestId: `req-${Date.now()}`,
        message: evaluation.humanMessage,
        explanation: explanation.childSummary,
        parentSummary: explanation.parentSummary,
        promptParent: true,
      };
    } else {
      return {
        success: false,
        status: 'BLOCKED',
        reasonCode: evaluation.reasonCode,
        message: evaluation.humanMessage,
        explanation: explanation.childSummary,
      };
    }
  }
}
