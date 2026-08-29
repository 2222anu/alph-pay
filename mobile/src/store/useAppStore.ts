/**
 * ALPH PAY · Zustand Global Mobile Store
 * Reactive state management for Parent & Child roles
 */

export interface ChildState {
  id: string;
  name: string;
  age: number;
  balance: number;
  dailyLimit: number;
  spentToday: number;
  spendingMode: 'LIMITS_AUTO_APPROVE' | 'APPROVE_EVERY_PAYMENT';
  blockedCategories: string[];
}

export interface AppStoreState {
  currentRole: 'PARENT' | 'CHILD';
  parentBalance: number;
  children: ChildState[];
  pendingApprovalCount: number;
  setRole: (role: 'PARENT' | 'CHILD') => void;
  updateChildDailyLimit: (childId: string, newLimit: number) => void;
  approvePaymentRequest: (requestId: string) => void;
}

// In production: create<AppStoreState>((set) => ({ ... }))
