// @ts-nocheck
import React, { useEffect } from 'react';
import { YStack, XStack, Text, Button } from 'tamagui';
import { Play, ArrowLeft, ArrowRight, X } from '@tamagui/lucide-icons';
import { useAppStore } from '../src/store/useAppStore';

export const CEODemoSteps = [
  {
    step: 1,
    title: 'Brand Vision & Sovereign Family Architecture',
    desc: 'Parent is the Control & Governance Layer (Indigo), Child is the Autonomous Spending Layer (Teal). Notice real-time live sync.'
  },
  {
    step: 2,
    title: 'Children Allocation, Spent & Remaining (Feature 4)',
    desc: 'Each child’s financial position is immediately clear: Allocated vs Spent vs Remaining (Sara: SAR 320/500 spent).'
  },
  {
    step: 3,
    title: 'Spending Analytics — Time Filter (Feature 1)',
    desc: 'Parent switches between Weekly, Monthly, and Yearly views. Watch all summary metrics recalculate dynamically!'
  },
  {
    step: 4,
    title: 'Child-Wise Spending Donut Chart (Feature 2)',
    desc: 'Interactive SVG Donut chart displaying spending share per child (Sara 46%, Omar 36%, Youssef 18%) with complete legend.'
  },
  {
    step: 5,
    title: 'Category-Wise Spending Breakdown (Feature 3)',
    desc: 'Clear visual tracking of where family funds are spent: Education, Food, Shopping, Transport, and Entertainment.'
  },
  {
    step: 6,
    title: 'Automated Allowance Engine (04)',
    desc: 'Automated scheduling: Daily, Weekly, or Monthly deposits. Setting Sara’s allowance to SAR 100 / week.'
  },
  {
    step: 7,
    title: 'Daily Spending & Transaction Count Limits (Feature 5)',
    desc: 'Parent configures a SAR 50.00 daily limit AND a maximum 3 transactions/day limit for controlled youth freedom.'
  },
  {
    step: 8,
    title: 'Restricted Category Management (Feature 9)',
    desc: 'Clear management of Allowed Categories (Education, Food, Shopping) vs Blocked Categories (Gaming, Gambling). 1-click toggle.'
  },
  {
    step: 9,
    title: 'Child Experience: Sara’s Home (C02)',
    desc: 'Sara opens her phone: Clean answers to “How much can I spend today?” (SAR 45.00 remaining, 1/3 tx used today).'
  },
  {
    step: 10,
    title: 'Child Savings Goal Tracker (Feature 7)',
    desc: 'Sara tracks her New iPad Goal (SAR 650 / 1000 saved · 65% progress) right from her home dashboard.'
  },
  {
    step: 11,
    title: 'Signature Flow: Sara Scans Merchant QR (07 / C06)',
    desc: 'Sara scans merchant QR code at Al Jarir Bookstore for SAR 85.00 (Exceeds her SAR 50.00 daily limit!).'
  },
  {
    step: 12,
    title: 'Deterministic Policy Engine Evaluation (07.5 / C07)',
    desc: 'Deterministic engine executes 9 rules: Detects Amount SAR 85 > Daily Limit SAR 50 → Flags “Parent Approval Required”.'
  },
  {
    step: 13,
    title: 'Sara Dispatches Approval Request (10.2 / C08)',
    desc: 'Sara attaches note: “School Art Project Materials & Notebooks” and submits prompt to Dad.'
  },
  {
    step: 14,
    title: 'Parent Receives High-Priority Alert Sheet (10.3)',
    desc: 'Dad’s phone buzzes immediately with a full context approval sheet containing merchant, category, amount & reason.'
  },
  {
    step: 15,
    title: 'Parent 6-Digit OTP Verification (Feature 6)',
    desc: 'Parent verifies payment authorization using secure 6-digit mock OTP (123456) with instant validation feedback.'
  },
  {
    step: 16,
    title: 'Parent Approves with OTP & Real-Time Sync',
    desc: 'Parent confirms approval: Dad’s balance updates, Sara gets instant celebration & SAMA digital receipt.'
  },
  {
    step: 17,
    title: 'Live Transactions & Allocation Updates (Feature 4 & 10)',
    desc: 'The bookstore purchase is automatically added to family analytics and deducted from Sara’s remaining weekly allocation.'
  },
  {
    step: 18,
    title: 'Parent Appreciation & Milestone Reward (Feature 8)',
    desc: 'Dad sends “Great job! 👏” praise + SAR 20 reward to celebrate Sara’s responsible saving → Instant in-app celebration!'
  }
];

export const CeoDemoBanner: React.FC = () => {
  const { 
    isCeoDemo, 
    ceoStep, 
    setCeoStep, 
    setIsCeoDemo,
    setParentTab,
    setParentSubScreen,
    setChildTab,
    setChildSubScreen,
    setAnalyticsPeriod,
    setSelectedAnalyticsChild,
    simulateChildPayment,
    approveRequest,
    sendPraise,
    showToast
  } = useAppStore();

  const current = CEODemoSteps[ceoStep];

  // Run side-effects on tour step changes
  useEffect(() => {
    if (!isCeoDemo || !current) return;

    switch (current.step) {
      case 1:
        setParentTab('dashboard');
        setParentSubScreen(null);
        setChildTab('home');
        setChildSubScreen(null);
        showToast('Step 1: Notice dual-device real-time sync ready.', 'parent');
        break;
      case 2:
        setParentTab('dashboard');
        setParentSubScreen(null);
        break;
      case 3:
        setParentTab('dashboard');
        setAnalyticsPeriod('monthly');
        break;
      case 4:
        setParentTab('dashboard');
        setAnalyticsPeriod('weekly');
        setSelectedAnalyticsChild('all');
        break;
      case 5:
        setParentTab('dashboard');
        break;
      case 6:
        setParentTab('children');
        setParentSubScreen('allowance');
        break;
      case 7:
        setParentTab('children');
        setParentSubScreen('controls');
        break;
      case 8:
        // Category management highlights
        break;
      case 9:
        setParentSubScreen(null);
        setChildTab('home');
        setChildSubScreen(null);
        break;
      case 10:
        setChildTab('home');
        break;
      case 11:
        setChildTab('scan');
        setChildSubScreen('scanCustom'); // fill scan amounts
        break;
      case 12:
        // Simulates limit evaluation check
        setChildTab('scan');
        setChildSubScreen('policyCheck');
        break;
      case 13:
        // Submit request to dad
        simulateChildPayment('sara', 'Al Jarir Bookstore', 'Education & Books', 85, 'School Art Project Materials & Notebooks');
        setChildSubScreen('requestSent');
        break;
      case 14:
        setParentTab('dashboard');
        setParentSubScreen('req-001'); // open OTP approval sheet
        break;
      case 15:
        // Autofill simulated OTP
        setParentSubScreen('req-001-otp');
        break;
      case 16:
        // Submit approval
        approveRequest('req-001', '1932'); // standard approve code
        setChildSubScreen('receipt');
        break;
      case 17:
        setChildSubScreen(null);
        setParentTab('dashboard');
        break;
      case 18:
        sendPraise('sara', 'Great job! 👏', 20.00);
        setChildTab('home');
        setChildSubScreen('appreciation');
        break;
      default:
        break;
    }
  }, [ceoStep, isCeoDemo]);

  if (!isCeoDemo) return null;

  const handleNext = () => {
    if (ceoStep < CEODemoSteps.length - 1) {
      setCeoStep(ceoStep + 1);
    } else {
      setIsCeoDemo(false);
      showToast('Amanah CEO Presentation Completed! You can explore freely.', 'parent');
    }
  };

  const handlePrev = () => {
    if (ceoStep > 0) {
      setCeoStep(ceoStep - 1);
    }
  };

  const handleClose = () => {
    setIsCeoDemo(false);
  };

  return (
    <YStack 
      width="100%" 
      backgroundColor="#1E1B4B" 
      borderBottomWidth={2} 
      borderBottomColor="$parentPrimary"
      paddingHorizontal="$4" 
      paddingVertical="$2" 
      gap="$2"
      elevation={5}
    >
      <XStack alignItems="center" justifyContent="space-between" flexWrap="wrap" gap="$3">
        {/* Step details */}
        <XStack alignItems="center" gap="$3" minWidth={260}>
          <Text fontSize={11} backgroundColor="$parentPrimary" color="white" paddingHorizontal="$2" paddingVertical="$0.5" borderRadius="$sm" fontWeight="800">
            STEP {current.step} OF {CEODemoSteps.length}
          </Text>
          <Text fontSize={14} fontWeight="700" color="white">
            {current.title}
          </Text>
        </XStack>

        {/* Step description */}
        <Text fontSize={12} color="#CBD5E1" flex={1} minWidth={250}>
          {current.desc}
        </Text>

        {/* Navigation Action Buttons */}
        <XStack alignItems="center" gap="$2">
          <Button 
            size="$sm" 
            backgroundColor="rgba(255, 255, 255, 0.1)" 
            hoverStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            disabled={ceoStep === 0}
            onPress={handlePrev}
          >
            <ArrowLeft size={14} color="white" />
            <Text color="white" fontSize={11} fontWeight="600">Previous</Text>
          </Button>

          <Button 
            size="$sm" 
            backgroundColor="#14B8A6" 
            hoverStyle={{ backgroundColor: '#2DD4BF' }}
            onPress={handleNext}
          >
            <Text color="#0F172A" fontSize={11} fontWeight="800">
              {ceoStep === CEODemoSteps.length - 1 ? 'Finish Demo' : 'Next Step'}
            </Text>
            <ArrowRight size={14} color="#0F172A" />
          </Button>

          <Button 
            size="$sm" 
            circular 
            backgroundColor="transparent" 
            hoverStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            onPress={handleClose}
          >
            <X size={14} color="#94A3B8" />
          </Button>
        </XStack>
      </XStack>
    </YStack>
  );
};
export default CeoDemoBanner;
