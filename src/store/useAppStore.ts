import { create } from 'zustand';
import { getAppRegionConfig, formatMoney } from '../constants/Currencies';
import { SpendingPolicyEngine, EvaluationOutcome } from '../services/SpendingPolicyEngine';

export interface Child {
  id: string;
  name: string;
  shortName: string;
  age: number;
  avatar: string;
  color: string;
  status: 'Active' | 'Restricted' | 'Suspended';
  balance: number;
  dailyLimit: number;
  dailyTxCountLimit: number;
  txCompletedToday: number;
  spentToday: number;
  monthlyLimit: number;
  spentThisMonth: number;
  allowanceAmount: number;
  allowanceFreq: string;
  nextDepositDays: number;
  spendingMode: 'limits' | 'approval_all';
  blockedCategories: string[];
  allowedCategories: string[];
  blockedMerchants: string[];
  savingsGoal: {
    name: string;
    target: number;
    saved: number;
    remaining: number;
    recentMilestone: boolean;
  };
  periodData: Record<string, {
    allocated: number;
    spent: number;
    remaining: number;
    txCount: number;
    percentage: number;
  }>;
}

export interface Parent {
  name: string;
  nationalId: string;
  bankName: string;
  bankIban: string;
  availableBalance: number;
  totalAllocated: number;
  childSpendingThisMonth: number;
  upcomingAllowance: number;
  biometrics: boolean;
  currency: string;
  language: string;
}

export interface Transaction {
  id: string;
  user: string;
  childId: string | null;
  userType: 'child' | 'parent';
  merchant: string;
  amount: number;
  category: string;
  time: string;
  period: 'weekly' | 'monthly' | 'yearly';
  status: 'Completed' | 'Blocked' | 'Pending' | 'Declined';
}

export interface PendingRequest {
  id: string;
  childId: string;
  childName: string;
  amount: number;
  merchant: string;
  category: string;
  reason: string;
  time: string;
  status: 'pending' | 'approved' | 'declined';
}

export interface AppNotification {
  id: string;
  for: 'parent' | 'child';
  category: string;
  title: string;
  desc: string;
  time: string;
  unread: boolean;
}

export interface AppStateStore {
  language: string;
  currency: string;
  activeParentTab: string;
  activeParentSubScreen: string | null;
  activeChildTab: string;
  activeChildSubScreen: string | null;
  selectedChildId: string;
  viewMode: 'dual' | 'parent' | 'child' | 'ia';
  ceoStep: number;
  isCeoDemo: boolean;
  analyticsPeriod: 'weekly' | 'monthly' | 'yearly';
  selectedAnalyticsChild: string;
  txFilters: {
    period: string;
    child: string;
    status: string;
    category: string;
  };
  childAppreciation: { childId: string; message: string; reward: number; time: string } | null;
  parent: Parent;
  children: Child[];
  analytics: any;
  childCategoryAnalytics: any;
  pendingRequests: PendingRequest[];
  transactions: Transaction[];
  notifications: AppNotification[];
  toasts: { id: string; message: string; type: 'parent' | 'child' }[];

  // Actions
  setLanguage: (lang: string) => void;
  setCurrency: (curr: string) => void;
  setParentTab: (tab: string) => void;
  setParentSubScreen: (screen: string | null) => void;
  setChildTab: (tab: string) => void;
  setChildSubScreen: (screen: string | null) => void;
  setSelectedChildId: (id: string) => void;
  setViewMode: (mode: 'dual' | 'parent' | 'child' | 'ia') => void;
  setCeoStep: (step: number) => void;
  setIsCeoDemo: (isDemo: boolean) => void;
  setAnalyticsPeriod: (period: 'weekly' | 'monthly' | 'yearly') => void;
  setSelectedAnalyticsChild: (childId: string) => void;
  setTxFilters: (filters: any) => void;
  sendPraise: (childId: string, message: string, reward: number) => void;
  resetDemo: () => void;
  approveRequest: (reqId: string, pin: string) => boolean;
  declineRequest: (reqId: string) => void;
  boostSavingsGoal: (childId: string, amount: number) => boolean;
  allocateAllowance: (childId: string, amount: number, freq: string) => void;
  updateSpendingControls: (childId: string, spendingMode: 'limits' | 'approval_all', dailyLimit: number, dailyTxCountLimit: number, monthlyLimit: number, blockedCategories: string[], blockedMerchants: string[]) => void;
  simulateChildPayment: (childId: string, merchant: string, category: string, amount: number, customReason?: string) => 'APPROVED' | 'BLOCKED' | 'APPROVAL_REQUIRED';
  showToast: (message: string, type?: 'parent' | 'child') => void;
  dismissToast: (id: string) => void;
}

const initialParent: Parent = {
  name: 'Ahmed Al-Farsi',
  nationalId: '1089345210',
  bankName: 'Al Rajhi Bank',
  bankIban: 'SA44 8000 0456 1234 5678 90',
  availableBalance: 4850.00,
  totalAllocated: 1200.00,
  childSpendingThisMonth: 690.00,
  upcomingAllowance: 200.00,
  biometrics: true,
  currency: 'SAR',
  language: 'en'
};

const initialChildren: Child[] = [
  {
    id: 'sara',
    name: 'Sara Al-Farsi',
    shortName: 'Sara',
    age: 14,
    avatar: '👧',
    color: '#0D9488',
    status: 'Active',
    balance: 185.00,
    dailyLimit: 50.00,
    dailyTxCountLimit: 3,
    txCompletedToday: 1,
    spentToday: 5.00,
    monthlyLimit: 400.00,
    spentThisMonth: 115.00,
    allowanceAmount: 100.00,
    allowanceFreq: 'Weekly',
    nextDepositDays: 2,
    spendingMode: 'limits',
    blockedCategories: ['Gaming', 'Gambling', 'Adult Content'],
    allowedCategories: ['Education & Books', 'Food & Drinks', 'Shopping', 'Transport', 'Entertainment'],
    blockedMerchants: ['Roblox Corp', 'Steam Games'],
    savingsGoal: {
      name: 'New iPad Goal',
      target: 1000.00,
      saved: 650.00,
      remaining: 350.00,
      recentMilestone: true
    },
    periodData: {
      weekly: { allocated: 500.00, spent: 320.00, remaining: 180.00, txCount: 8, percentage: 46 },
      monthly: { allocated: 2000.00, spent: 1250.00, remaining: 750.00, txCount: 32, percentage: 46 },
      yearly: { allocated: 24000.00, spent: 14800.00, remaining: 9200.00, txCount: 380, percentage: 46 }
    }
  },
  {
    id: 'omar',
    name: 'Omar Al-Farsi',
    shortName: 'Omar',
    age: 16,
    avatar: '👦',
    color: '#6366F1',
    status: 'Active',
    balance: 120.00,
    dailyLimit: 30.00,
    dailyTxCountLimit: 3,
    txCompletedToday: 0,
    spentToday: 0.00,
    monthlyLimit: 250.00,
    spentThisMonth: 60.00,
    allowanceAmount: 60.00,
    allowanceFreq: 'Weekly',
    nextDepositDays: 2,
    spendingMode: 'approval_all',
    blockedCategories: ['Gaming', 'Gambling', 'Adult Content', 'Crypto'],
    allowedCategories: ['Education & Books', 'Food & Drinks', 'Shopping', 'Transport'],
    blockedMerchants: ['Epic Games'],
    savingsGoal: {
      name: 'PlayStation VR2',
      target: 1200.00,
      saved: 420.00,
      remaining: 780.00,
      recentMilestone: false
    },
    periodData: {
      weekly: { allocated: 400.00, spent: 250.00, remaining: 150.00, txCount: 6, percentage: 36 },
      monthly: { allocated: 1600.00, spent: 980.00, remaining: 620.00, txCount: 24, percentage: 36 },
      yearly: { allocated: 19200.00, spent: 11500.00, remaining: 7700.00, txCount: 290, percentage: 36 }
    }
  },
  {
    id: 'youssef',
    name: 'Youssef Al-Farsi',
    shortName: 'Youssef',
    age: 12,
    avatar: '👦',
    color: '#F59E0B',
    status: 'Active',
    balance: 85.00,
    dailyLimit: 25.00,
    dailyTxCountLimit: 2,
    txCompletedToday: 0,
    spentToday: 0.00,
    monthlyLimit: 150.00,
    spentThisMonth: 35.00,
    allowanceAmount: 40.00,
    allowanceFreq: 'Weekly',
    nextDepositDays: 4,
    spendingMode: 'limits',
    blockedCategories: ['Gaming', 'Gambling', 'Adult Content'],
    allowedCategories: ['Education & Books', 'Food & Drinks'],
    blockedMerchants: [],
    savingsGoal: {
      name: 'Lego Technic Set',
      target: 400.00,
      saved: 280.00,
      remaining: 120.00,
      recentMilestone: true
    },
    periodData: {
      weekly: { allocated: 300.00, spent: 120.00, remaining: 180.00, txCount: 4, percentage: 18 },
      monthly: { allocated: 1200.00, spent: 480.00, remaining: 720.00, txCount: 16, percentage: 18 },
      yearly: { allocated: 14400.00, spent: 5600.00, remaining: 8800.00, txCount: 185, percentage: 18 }
    }
  }
];

const initialAnalytics = {
  weekly: {
    familyTotalSpend: 690.00,
    totalAllocated: 1200.00,
    totalSpent: 690.00,
    remaining: 510.00,
    txCount: 18,
    childSpending: [
      { id: 'sara', name: 'Sara', amount: 320.00, percentage: 46, color: '#0D9488' },
      { id: 'omar', name: 'Omar', amount: 250.00, percentage: 36, color: '#6366F1' },
      { id: 'youssef', name: 'Youssef', amount: 120.00, percentage: 18, color: '#F59E0B' }
    ],
    categorySpending: [
      { name: 'Education & Books', icon: '📚', amount: 220.00, percentage: 32, color: '#4338CA' },
      { name: 'Food & Drinks', icon: '🍔', amount: 185.00, percentage: 27, color: '#0D9488' },
      { name: 'Shopping', icon: '🛍️', amount: 145.00, percentage: 21, color: '#EC4899' },
      { name: 'Transport', icon: '🚕', amount: 80.00, percentage: 12, color: '#F59E0B' },
      { name: 'Entertainment', icon: '🎬', amount: 60.00, percentage: 8, color: '#8B5CF6' }
    ]
  },
  monthly: {
    familyTotalSpend: 2710.00,
    totalAllocated: 4800.00,
    totalSpent: 2710.00,
    remaining: 2090.00,
    txCount: 72,
    childSpending: [
      { id: 'sara', name: 'Sara', amount: 1250.00, percentage: 46, color: '#0D9488' },
      { id: 'omar', name: 'Omar', amount: 980.00, percentage: 36, color: '#6366F1' },
      { id: 'youssef', name: 'Youssef', amount: 480.00, percentage: 18, color: '#F59E0B' }
    ],
    categorySpending: [
      { name: 'Education & Books', icon: '📚', amount: 850.00, percentage: 31, color: '#4338CA' },
      { name: 'Food & Drinks', icon: '🍔', amount: 740.00, percentage: 27, color: '#0D9488' },
      { name: 'Shopping', icon: '🛍️', amount: 580.00, percentage: 22, color: '#EC4899' },
      { name: 'Transport', icon: '🚕', amount: 320.00, percentage: 12, color: '#F59E0B' },
      { name: 'Entertainment', icon: '🎬', amount: 220.00, percentage: 8, color: '#8B5CF6' }
    ]
  },
  yearly: {
    familyTotalSpend: 31900.00,
    totalAllocated: 57600.00,
    totalSpent: 31900.00,
    remaining: 25700.00,
    txCount: 855,
    childSpending: [
      { id: 'sara', name: 'Sara', amount: 14800.00, percentage: 46, color: '#0D9488' },
      { id: 'omar', name: 'Omar', amount: 11500.00, percentage: 36, color: '#6366F1' },
      { id: 'youssef', name: 'Youssef', amount: 5600.00, percentage: 18, color: '#F59E0B' }
    ],
    categorySpending: [
      { name: 'Education & Books', icon: '📚', amount: 10200.00, percentage: 32, color: '#4338CA' },
      { name: 'Food & Drinks', icon: '🍔', amount: 8600.00, percentage: 27, color: '#0D9488' },
      { name: 'Shopping', icon: '🛍️', amount: 6800.00, percentage: 21, color: '#EC4899' },
      { name: 'Transport', icon: '🚕', amount: 3800.00, percentage: 12, color: '#F59E0B' },
      { name: 'Entertainment', icon: '🎬', amount: 2500.00, percentage: 8, color: '#8B5CF6' }
    ]
  }
};

const initialChildCategoryAnalytics = {
  sara: {
    weekly: {
      totalSpent: 320.00,
      totalAllocated: 500.00,
      remaining: 180.00,
      txCount: 8,
      categories: [
        { name: 'Education & Books', icon: '📚', amount: 140.00, percentage: 44, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 105.00, percentage: 33, color: '#0D9488' },
        { name: 'Shopping', icon: '🛍️', amount: 75.00, percentage: 23, color: '#EC4899' }
      ]
    },
    monthly: {
      totalSpent: 1250.00,
      totalAllocated: 2000.00,
      remaining: 750.00,
      txCount: 32,
      categories: [
        { name: 'Education & Books', icon: '📚', amount: 550.00, percentage: 44, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 420.00, percentage: 34, color: '#0D9488' },
        { name: 'Shopping', icon: '🛍️', amount: 280.00, percentage: 22, color: '#EC4899' }
      ]
    },
    yearly: {
      totalSpent: 14800.00,
      totalAllocated: 24000.00,
      remaining: 9200.00,
      txCount: 380,
      categories: [
        { name: 'Education & Books', icon: '📚', amount: 6500.00, percentage: 44, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 5100.00, percentage: 34, color: '#0D9488' },
        { name: 'Shopping', icon: '🛍️', amount: 3200.00, percentage: 22, color: '#EC4899' }
      ]
    }
  },
  omar: {
    weekly: {
      totalSpent: 250.00,
      totalAllocated: 400.00,
      remaining: 150.00,
      txCount: 6,
      categories: [
        { name: 'Gaming & Apps', icon: '🎮', amount: 110.00, percentage: 44, color: '#6366F1' },
        { name: 'Food & Drinks', icon: '🍔', amount: 80.00, percentage: 32, color: '#0D9488' },
        { name: 'Transport', icon: '🚕', amount: 60.00, percentage: 24, color: '#F59E0B' }
      ]
    },
    monthly: {
      totalSpent: 980.00,
      totalAllocated: 1600.00,
      remaining: 620.00,
      txCount: 24,
      categories: [
        { name: 'Gaming & Apps', icon: '🎮', amount: 450.00, percentage: 46, color: '#6366F1' },
        { name: 'Food & Drinks', icon: '🍔', amount: 310.00, percentage: 32, color: '#0D9488' },
        { name: 'Transport', icon: '🚕', amount: 220.00, percentage: 22, color: '#F59E0B' }
      ]
    },
    yearly: {
      totalSpent: 11500.00,
      totalAllocated: 19200.00,
      remaining: 7700.00,
      txCount: 290,
      categories: [
        { name: 'Gaming & Apps', icon: '🎮', amount: 5200.00, percentage: 45, color: '#6366F1' },
        { name: 'Food & Drinks', icon: '🍔', amount: 3800.00, percentage: 33, color: '#0D9488' },
        { name: 'Transport', icon: '🚕', amount: 2500.00, percentage: 22, color: '#F59E0B' }
      ]
    }
  },
  youssef: {
    weekly: {
      totalSpent: 120.00,
      totalAllocated: 300.00,
      remaining: 180.00,
      txCount: 4,
      categories: [
        { name: 'Education & Books', icon: '📚', amount: 70.00, percentage: 58, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 50.00, percentage: 42, color: '#0D9488' }
      ]
    },
    monthly: {
      totalSpent: 480.00,
      totalAllocated: 1200.00,
      remaining: 720.00,
      txCount: 16,
      categories: [
        { name: 'Education & Books', icon: '📚', amount: 270.00, percentage: 56, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 210.00, percentage: 44, color: '#0D9488' }
      ]
    },
    yearly: {
      totalSpent: 5600.00,
      totalAllocated: 14400.00,
      remaining: 8800.00,
      txCount: 185,
      categories: [
        { name: 'Education & Books', icon: '📚', amount: 3100.00, percentage: 55, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 2500.00, percentage: 45, color: '#0D9488' }
      ]
    }
  }
};

const initialPendingRequests: PendingRequest[] = [
  {
    id: 'req-001',
    childId: 'sara',
    childName: 'Sara',
    amount: 85.00,
    merchant: 'Al Jarir Bookstore',
    category: 'Education & Books',
    reason: 'School Art Project Materials & Notebooks',
    time: 'Just now',
    status: 'pending'
  }
];

const initialTransactions: Transaction[] = [
  { id: 'tx-101', user: 'Sara', childId: 'sara', userType: 'child', merchant: 'School Cafeteria', amount: -15.00, category: 'Food & Drinks', time: 'Today, 11:20 AM', period: 'weekly', status: 'Completed' },
  { id: 'tx-102', user: 'Ahmed', childId: null, userType: 'parent', merchant: 'Top-up from Al Rajhi', amount: 1500.00, category: 'Deposit', time: 'Yesterday', period: 'weekly', status: 'Completed' },
  { id: 'tx-103', user: 'Omar', childId: 'omar', userType: 'child', merchant: 'Gaming Credits', amount: -45.00, category: 'Gaming', time: '2 days ago', period: 'weekly', status: 'Blocked' },
  { id: 'tx-104', user: 'Sara', childId: 'sara', userType: 'child', merchant: 'Noon Express', amount: -65.00, category: 'Shopping', time: '3 days ago', period: 'weekly', status: 'Completed' },
  { id: 'tx-105', user: 'Sara', childId: 'sara', userType: 'child', merchant: 'Starbucks Cafe', amount: -22.00, category: 'Food & Drinks', time: '4 days ago', period: 'weekly', status: 'Completed' },
  { id: 'tx-106', user: 'Youssef', childId: 'youssef', userType: 'child', merchant: 'Toy Town Riyadh', amount: -35.00, category: 'Shopping', time: '5 days ago', period: 'weekly', status: 'Completed' },
  { id: 'tx-107', user: 'Omar', childId: 'omar', userType: 'child', merchant: 'Careem Ride', amount: -18.00, category: 'Transport', time: '6 days ago', period: 'weekly', status: 'Completed' }
];

const initialNotifications: AppNotification[] = [
  { id: 'n-1', for: 'parent', category: 'PAYMENT', title: 'Payment Approval Required', desc: 'Sara requested SAR 85.00 at Al Jarir Bookstore', time: 'Just now', unread: true },
  { id: 'n-2', for: 'parent', category: 'ALLOWANCE', title: 'Weekly Allowance Scheduled', desc: 'SAR 100.00 scheduled for Sara on Sunday', time: '2h ago', unread: true },
  { id: 'n-3', for: 'parent', category: 'SECURITY', title: 'Trusted Device Verified', desc: 'iPhone 15 Pro signed in with Face ID', time: 'Yesterday', unread: false },
  { id: 'n-4', for: 'parent', category: 'SPENDING_ALERT', title: 'Omar Reached 80% Daily Limit', desc: 'Omar spent SAR 24.00 of his SAR 30.00 limit', time: '3 days ago', unread: false }
];

export const useAppStore = create<AppStateStore>((set, get) => ({
  language: 'en',
  currency: 'SAR',
  activeParentTab: 'dashboard',
  activeParentSubScreen: null,
  activeChildTab: 'home',
  activeChildSubScreen: null,
  selectedChildId: 'sara',
  viewMode: 'dual',
  ceoStep: 0,
  isCeoDemo: false,
  analyticsPeriod: 'weekly',
  selectedAnalyticsChild: 'all',
  txFilters: {
    period: 'all',
    child: 'all',
    status: 'all',
    category: 'all'
  },
  childAppreciation: null,
  parent: initialParent,
  children: initialChildren,
  analytics: initialAnalytics,
  childCategoryAnalytics: initialChildCategoryAnalytics,
  pendingRequests: initialPendingRequests,
  transactions: initialTransactions,
  notifications: initialNotifications,
  toasts: [],

  // Set Language Action
  setLanguage: (lang) => {
    set((state) => {
      let currentCurrency = state.currency;
      
      // Auto currency switch triggers
      if (lang === 'te' || lang === 'hi' || lang === 'ta') {
        currentCurrency = 'INR';
      } else if (lang === 'ar') {
        currentCurrency = 'SAR';
      }

      const rc = getAppRegionConfig(currentCurrency, lang);
      
      // Update parent details
      const parent = {
        ...state.parent,
        name: rc.parentName,
        language: lang,
        currency: currentCurrency
      };

      // Update children names based on regional details
      const children = state.children.map((c) => {
        if (rc.childNames[c.id]) {
          return { ...c, name: rc.childNames[c.id] };
        }
        return c;
      });

      return {
        language: lang,
        currency: currentCurrency,
        parent,
        children
      };
    });
    
    // Toast notification
    const currentLang = get().language;
    get().showToast(currentLang === 'ar' ? 'تم تغيير اللغة إلى العربية 🇸🇦' : `Language switched to ${lang.toUpperCase()}`, 'parent');
  },

  // Set Currency Action
  setCurrency: (curr) => {
    set((state) => {
      let currentLang = state.language;

      // Reset language based on SAMA rules / regional guidelines
      if (curr === 'INR' && currentLang === 'ar') {
        currentLang = 'en';
      } else if (curr === 'SAR' && (currentLang === 'te' || currentLang === 'hi' || currentLang === 'ta')) {
        currentLang = 'en';
      }

      const rc = getAppRegionConfig(curr, currentLang);

      const parent = {
        ...state.parent,
        name: rc.parentName,
        currency: curr,
        language: currentLang
      };

      const children = state.children.map((c) => {
        if (rc.childNames[c.id]) {
          return { ...c, name: rc.childNames[c.id] };
        }
        return c;
      });

      return {
        currency: curr,
        language: currentLang,
        parent,
        children
      };
    });

    const region = getAppRegionConfig(curr, get().language);
    get().showToast(`Currency switched to ${region.flag} ${curr} (${region.currencySymbol})`, 'parent');
    get().showToast(`Wallet currency updated to ${region.flag} ${curr}`, 'child');
  },

  setParentTab: (tab) => set({ activeParentTab: tab, activeParentSubScreen: null }),
  setParentSubScreen: (screen) => set({ activeParentSubScreen: screen }),
  setChildTab: (tab) => set({ activeChildTab: tab, activeChildSubScreen: null }),
  setChildSubScreen: (screen) => set({ activeChildSubScreen: screen }),
  setSelectedChildId: (id) => set({ selectedChildId: id }),
  setViewMode: (mode) => set({ viewMode: mode }),
  setCeoStep: (step) => set({ ceoStep: step }),
  setIsCeoDemo: (isDemo) => set({ isCeoDemo: isDemo }),
  setAnalyticsPeriod: (period) => set({ analyticsPeriod: period }),
  setSelectedAnalyticsChild: (childId) => set({ selectedAnalyticsChild: childId }),
  setTxFilters: (filters) => set((state) => ({ txFilters: { ...state.txFilters, ...filters } })),

  sendPraise: (childId, message, reward) => {
    const child = get().children.find(c => c.id === childId);
    if (!child) return;

    set((state) => {
      // Deduct parent balance, credit child wallet
      const parent = { ...state.parent, availableBalance: state.parent.availableBalance - reward };
      const children = state.children.map(c => {
        if (c.id === childId) {
          return { ...c, balance: c.balance + reward };
        }
        return c;
      });

      // Add transaction ledger record
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newTx: Transaction = {
        id: `tx-praise-${Date.now()}`,
        user: child.name,
        childId,
        userType: 'child',
        merchant: 'Appreciation Reward from Dad',
        amount: -reward,
        category: 'Deposit',
        time: `Today, ${timestamp}`,
        period: 'weekly',
        status: 'Completed'
      };

      // Notification
      const childNotif: AppNotification = {
        id: `n-praise-${Date.now()}`,
        for: 'child',
        category: 'GOAL',
        title: '⭐ Dad Appreciated You!',
        desc: `"${message}" (+SAR ${reward.toFixed(2)})`,
        time: 'Just now',
        unread: true
      };

      return {
        parent,
        children,
        transactions: [newTx, ...state.transactions],
        notifications: [childNotif, ...state.notifications],
        childAppreciation: { childId, message, reward, time: 'Just now' }
      };
    });

    get().showToast(`⭐ Praise & SAR ${reward} sent to ${child.shortName}!`, 'parent');
  },

  approveRequest: (reqId, pin) => {
    const request = get().pendingRequests.find(r => r.id === reqId);
    if (!request) return false;

    // Simulate SAMA PIN verification check
    if (pin !== '1932' && pin !== '1234') {
      get().showToast('❌ Incorrect PIN. Please try again.', 'parent');
      return false;
    }

    set((state) => {
      const child = state.children.find(c => c.id === request.childId);
      if (!child) return state;

      // 1. Deduct funds from parent balance
      const parent = { 
        ...state.parent, 
        availableBalance: state.parent.availableBalance - request.amount,
        childSpendingThisMonth: state.parent.childSpendingThisMonth + request.amount
      };

      // 2. Adjust child cumulative spends (child balance doesn't deduct since the parent directly funded the payment from parent balance in real-time approval)
      const children = state.children.map(c => {
        if (c.id === request.childId) {
          const weeklyData = { ...c.periodData.weekly, spent: c.periodData.weekly.spent + request.amount, remaining: c.periodData.weekly.remaining - request.amount, txCount: c.periodData.weekly.txCount + 1 };
          const monthlyData = { ...c.periodData.monthly, spent: c.periodData.monthly.spent + request.amount, remaining: c.periodData.monthly.remaining - request.amount, txCount: c.periodData.monthly.txCount + 1 };
          return {
            ...c,
            spentToday: c.spentToday + request.amount,
            txCompletedToday: c.txCompletedToday + 1,
            spentThisMonth: c.spentThisMonth + request.amount,
            periodData: {
              ...c.periodData,
              weekly: weeklyData,
              monthly: monthlyData
            }
          };
        }
        return c;
      });

      // 3. Create completed transaction ledger entry
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const completedTx: Transaction = {
        id: `tx-approved-${Date.now()}`,
        user: child.name,
        childId: child.id,
        userType: 'child',
        merchant: request.merchant,
        amount: -request.amount,
        category: request.category,
        time: `Today, ${timestamp}`,
        period: 'weekly',
        status: 'Completed'
      };

      // 4. Remove pending request
      const pendingRequests = state.pendingRequests.filter(r => r.id !== reqId);

      // 5. Success Notifications
      const childNotif: AppNotification = {
        id: `n-appr-c-${Date.now()}`,
        for: 'child',
        category: 'PAYMENT_APPROVED',
        title: '✅ Payment Approved!',
        desc: `Dad approved your SAR ${request.amount.toFixed(2)} at ${request.merchant}`,
        time: 'Just now',
        unread: true
      };

      const parentNotif: AppNotification = {
        id: `n-appr-p-${Date.now()}`,
        for: 'parent',
        category: 'PAYMENT',
        title: 'Payment Approved',
        desc: `You approved SAR ${request.amount.toFixed(2)} for ${child.shortName} at ${request.merchant}`,
        time: 'Just now',
        unread: false
      };

      // 6. Update cumulative charts values
      const analytics = { ...state.analytics };
      const currentPeriod = state.analyticsPeriod;
      const periodStats = analytics[currentPeriod];
      if (periodStats) {
        periodStats.totalSpent += request.amount;
        periodStats.remaining -= request.amount;
        periodStats.txCount += 1;
        const childStat = periodStats.childSpending.find((cs: any) => cs.id === child.id);
        if (childStat) {
          childStat.amount += request.amount;
        }
        const catStat = periodStats.categorySpending.find((cat: any) => cat.name === request.category);
        if (catStat) {
          catStat.amount += request.amount;
        } else {
          periodStats.categorySpending.push({
            name: request.category,
            icon: '🛍️',
            amount: request.amount,
            percentage: 10,
            color: '#EC4899'
          });
        }
        
        // Recalculate percentages
        const grandTotal = periodStats.childSpending.reduce((sum: number, c: any) => sum + c.amount, 0);
        periodStats.childSpending.forEach((cs: any) => {
          cs.percentage = Math.round((cs.amount / grandTotal) * 100);
        });
      }

      return {
        parent,
        children,
        transactions: [completedTx, ...state.transactions],
        pendingRequests,
        notifications: [childNotif, parentNotif, ...state.notifications]
      };
    });

    get().showToast('✅ Payment approved and settled!', 'parent');
    get().showToast('🎉 Purchase approved! Tap card to pay.', 'child');
    return true;
  },

  declineRequest: (reqId) => {
    const request = get().pendingRequests.find(r => r.id === reqId);
    if (!request) return;

    set((state) => {
      const pendingRequests = state.pendingRequests.filter(r => r.id !== reqId);
      
      const childNotif: AppNotification = {
        id: `n-decl-c-${Date.now()}`,
        for: 'child',
        category: 'PAYMENT_DECLINED',
        title: '❌ Payment Declined',
        desc: `Dad declined your request for SAR ${request.amount.toFixed(2)} at ${request.merchant}`,
        time: 'Just now',
        unread: true
      };

      const parentNotif: AppNotification = {
        id: `n-decl-p-${Date.now()}`,
        for: 'parent',
        category: 'PAYMENT',
        title: 'Payment Declined',
        desc: `You declined SAR ${request.amount.toFixed(2)} for ${request.childName} at ${request.merchant}`,
        time: 'Just now',
        unread: false
      };

      return {
        pendingRequests,
        notifications: [childNotif, parentNotif, ...state.notifications]
      };
    });

    get().showToast('Declined child payment request.', 'parent');
    get().showToast('❌ Payment declined by parent.', 'child');
  },

  boostSavingsGoal: (childId, amount) => {
    const parentBalance = get().parent.availableBalance;
    if (parentBalance < amount) {
      get().showToast('❌ Insufficient balance in family vault to boost goal.', 'parent');
      return false;
    }

    set((state) => {
      const parent = { ...state.parent, availableBalance: state.parent.availableBalance - amount };
      
      const children = state.children.map((c) => {
        if (c.id === childId && c.savingsGoal) {
          const saved = c.savingsGoal.saved + amount;
          const target = c.savingsGoal.target;
          return {
            ...c,
            savingsGoal: {
              ...c.savingsGoal,
              saved,
              remaining: Math.max(0, target - saved),
              recentMilestone: saved >= target ? true : c.savingsGoal.recentMilestone
            }
          };
        }
        return c;
      });

      const child = state.children.find(c => c.id === childId);
      const childName = child ? child.shortName : 'Child';

      // Record transfer in ledger
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const boostTx: Transaction = {
        id: `tx-boost-${Date.now()}`,
        user: childName,
        childId,
        userType: 'child',
        merchant: `Savings Boost from Parent`,
        amount: -amount,
        category: 'Savings',
        time: `Today, ${timestamp}`,
        period: 'weekly',
        status: 'Completed'
      };

      const childNotif: AppNotification = {
        id: `n-boost-c-${Date.now()}`,
        for: 'child',
        category: 'GOAL',
        title: '🚀 Savings Boost Received!',
        desc: `Dad boosted your savings by SAR ${amount.toFixed(2)}!`,
        time: 'Just now',
        unread: true
      };

      return {
        parent,
        children,
        transactions: [boostTx, ...state.transactions],
        notifications: [childNotif, ...state.notifications]
      };
    });

    get().showToast(`🚀 Savings Boosted successfully by SAR ${amount}!`, 'parent');
    return true;
  },

  allocateAllowance: (childId, amount, freq) => {
    set((state) => {
      const children = state.children.map((c) => {
        if (c.id === childId) {
          return { ...c, allowanceAmount: amount, allowanceFreq: freq };
        }
        return c;
      });
      return { children };
    });
    get().showToast(`Updated allowance details.`, 'parent');
  },

  updateSpendingControls: (childId, spendingMode, dailyLimit, dailyTxCountLimit, monthlyLimit, blockedCategories, blockedMerchants) => {
    set((state) => {
      const children = state.children.map((c) => {
        if (c.id === childId) {
          return {
            ...c,
            spendingMode,
            dailyLimit,
            dailyTxCountLimit,
            monthlyLimit,
            blockedCategories,
            blockedMerchants
          };
        }
        return c;
      });
      return { children };
    });
    get().showToast(`✅ Spending rules and policy guardrails saved.`, 'parent');
  },

  simulateChildPayment: (childId, merchant, category, amount, customReason = '') => {
    const state = get();
    const child = state.children.find(c => c.id === childId);
    if (!child) return 'BLOCKED';

    // 1. Prepare evaluation context
    const ctx = {
      childId: child.id,
      parentId: state.parent.nationalId,
      childName: child.name,
      isChildActive: child.status === 'Active',
      walletBalance: child.balance,
      spentToday: child.spentToday,
      spentThisMonth: child.spentThisMonth,
      txCompletedToday: child.txCompletedToday,
      policy: {
        spendingMode: child.spendingMode === 'limits' ? 'LIMITS_AUTO_APPROVE' as const : 'APPROVE_EVERY_PAYMENT' as const,
        dailyLimit: child.dailyLimit,
        dailyTxCountLimit: child.dailyTxCountLimit,
        monthlyLimit: child.monthlyLimit,
        perTransactionLimit: child.dailyLimit * 0.8, // Assume per-transaction cap is 80% of daily limit for simulation
        blockedCategories: child.blockedCategories,
        blockedMerchants: child.blockedMerchants,
      },
      incomingPayment: {
        merchantName: merchant,
        category: category,
        amount: amount,
        currency: state.currency,
      }
    };

    // 2. Evaluate using spending engine
    const evaluation = SpendingPolicyEngine.evaluate(ctx);

    // 3. Process result
    if (evaluation.outcome === EvaluationOutcome.APPROVED) {
      set((state) => {
        // Deduct child's private wallet balance
        const children = state.children.map(c => {
          if (c.id === childId) {
            const weeklyData = { ...c.periodData.weekly, spent: c.periodData.weekly.spent + amount, remaining: c.periodData.weekly.remaining - amount, txCount: c.periodData.weekly.txCount + 1 };
            const monthlyData = { ...c.periodData.monthly, spent: c.periodData.monthly.spent + amount, remaining: c.periodData.monthly.remaining - amount, txCount: c.periodData.monthly.txCount + 1 };
            return {
              ...c,
              balance: c.balance - amount,
              spentToday: c.spentToday + amount,
              txCompletedToday: c.txCompletedToday + 1,
              spentThisMonth: c.spentThisMonth + amount,
              periodData: {
                ...c.periodData,
                weekly: weeklyData,
                monthly: monthlyData
              }
            };
          }
          return c;
        });

        // Add ledger record
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newTx: Transaction = {
          id: `tx-sim-${Date.now()}`,
          user: child.name,
          childId: child.id,
          userType: 'child',
          merchant,
          amount: -amount,
          category,
          time: `Today, ${timestamp}`,
          period: 'weekly',
          status: 'Completed'
        };

        // Notify child
        const childNotif: AppNotification = {
          id: `n-sim-c-${Date.now()}`,
          for: 'child',
          category: 'PAYMENT_SUCCESS',
          title: '🛍️ Payment Successful',
          desc: `You spent SAR ${amount.toFixed(2)} at ${merchant}.`,
          time: 'Just now',
          unread: true
        };

        return {
          children,
          transactions: [newTx, ...state.transactions],
          notifications: [childNotif, ...state.notifications]
        };
      });

      get().showToast(`🛍️ Payment of SAR ${amount} successful!`, 'child');
      return 'APPROVED';
    } 
    
    if (evaluation.outcome === EvaluationOutcome.BLOCKED) {
      set((state) => {
        // Record blocked attempt
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const blockedTx: Transaction = {
          id: `tx-sim-block-${Date.now()}`,
          user: child.name,
          childId: child.id,
          userType: 'child',
          merchant,
          amount: -amount,
          category,
          time: `Today, ${timestamp}`,
          period: 'weekly',
          status: 'Blocked'
        };

        // Notify parent and child
        const childNotif: AppNotification = {
          id: `n-sim-cb-${Date.now()}`,
          for: 'child',
          category: 'PAYMENT_BLOCKED',
          title: '❌ Transaction Blocked',
          desc: `Your payment of SAR ${amount.toFixed(2)} at ${merchant} was blocked.`,
          time: 'Just now',
          unread: true
        };

        const parentNotif: AppNotification = {
          id: `n-sim-pb-${Date.now()}`,
          for: 'parent',
          category: 'SPENDING_ALERT',
          title: '⚠️ Restricted Transaction Blocked',
          desc: `${child.shortName} tried to spend SAR ${amount.toFixed(2)} at blocked merchant ${merchant}.`,
          time: 'Just now',
          unread: true
        };

        return {
          transactions: [blockedTx, ...state.transactions],
          notifications: [childNotif, parentNotif, ...state.notifications]
        };
      });

      get().showToast(`❌ Transaction Blocked: Policy restriction.`, 'child');
      get().showToast(`⚠️ Alert: ${child.shortName} tried to pay blocked merchant ${merchant}.`, 'parent');
      return 'BLOCKED';
    }

    if (evaluation.outcome === EvaluationOutcome.APPROVAL_REQUIRED) {
      const reqId = `req-sim-${Date.now()}`;
      set((state) => {
        // Add pending request
        const newRequest: PendingRequest = {
          id: reqId,
          childId: child.id,
          childName: child.shortName,
          amount: amount,
          merchant: merchant,
          category: category,
          reason: customReason || `Simulated transaction request for ${merchant}`,
          time: 'Just now',
          status: 'pending'
        };

        // Notify parent and child
        const childNotif: AppNotification = {
          id: `n-sim-car-${Date.now()}`,
          for: 'child',
          category: 'PAYMENT_PENDING',
          title: '⏳ Approval Request Sent',
          desc: `Waiting for Dad to approve SAR ${amount.toFixed(2)} at ${merchant}`,
          time: 'Just now',
          unread: true
        };

        const parentNotif: AppNotification = {
          id: `n-sim-par-${Date.now()}`,
          for: 'parent',
          category: 'PAYMENT',
          title: '🔑 Approval Required',
          desc: `${child.shortName} requested SAR ${amount.toFixed(2)} at ${merchant}`,
          time: 'Just now',
          unread: true
        };

        return {
          pendingRequests: [newRequest, ...state.pendingRequests],
          notifications: [childNotif, parentNotif, ...state.notifications]
        };
      });

      get().showToast(`⏳ Approval requested from Dad.`, 'child');
      get().showToast(`🔔 Real-time push alert: Approval requested by ${child.shortName}!`, 'parent');
      return 'APPROVAL_REQUIRED';
    }

    return 'BLOCKED';
  },

  showToast: (message, type = 'parent') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }]
    }));
    // Auto dismiss after 4 seconds
    setTimeout(() => {
      get().dismissToast(id);
    }, 4000);
  },

  dismissToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter(t => t.id !== id)
    }));
  },

  resetDemo: () => {
    // Reset all mock states to initial
    set({
      language: 'en',
      currency: 'SAR',
      activeParentTab: 'dashboard',
      activeParentSubScreen: null,
      activeChildTab: 'home',
      activeChildSubScreen: null,
      selectedChildId: 'sara',
      viewMode: 'dual',
      ceoStep: 0,
      isCeoDemo: false,
      analyticsPeriod: 'weekly',
      selectedAnalyticsChild: 'all',
      txFilters: {
        period: 'all',
        child: 'all',
        status: 'all',
        category: 'all'
      },
      childAppreciation: null,
      parent: initialParent,
      children: initialChildren,
      analytics: initialAnalytics,
      childCategoryAnalytics: initialChildCategoryAnalytics,
      pendingRequests: initialPendingRequests,
      transactions: initialTransactions,
      notifications: initialNotifications,
      toasts: []
    });
    get().showToast('🔄 Demo data reset to defaults.', 'parent');
  }
}));
