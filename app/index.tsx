// @ts-nocheck
import React, { useEffect } from 'react';
import { YStack, XStack, Text, Button, Select, Separator, Theme, ScrollView, View } from 'tamagui';
import { useWindowDimensions, Platform } from 'react-native';
import { Redirect, useRouter } from 'expo-router';
import { useAppStore } from '../src/store/useAppStore';
import { getAppRegionConfig } from '../src/constants/Currencies';
import { t } from '../src/constants/I18N';
import { IaSidebar } from '../components/IaSidebar';
import { CeoDemoBanner } from '../components/CeoDemoBanner';

// Import relative views
import ParentDashboardView from './(parent)/dashboard';
import ParentChildrenView from './(parent)/children';
import ParentAnalyticsView from './(parent)/analytics';
import ParentApprovalsView from './(parent)/approvals';
import ParentTransactionsView from './(parent)/transactions';
import ParentGovernanceView from './(parent)/governance';
import ParentSettingsView from './(parent)/settings';
import ParentSavingsView from './(parent)/savings';
import ParentNotificationsView from './(parent)/notifications';

import ChildHomeView from './(child)/home';
import ChildWalletView from './(child)/wallet';
import ChildPayView from './(child)/pay';
import ChildActivityView from './(child)/activity';
import ChildSavingsView from './(child)/savings';
import ChildNotificationsView from './(child)/notifications';

export default function IndexScreen() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  
  const {
    language,
    currency,
    setLanguage,
    setCurrency,
    viewMode,
    setViewMode,
    isCeoDemo,
    setIsCeoDemo,
    setCeoStep,
    resetDemo,
    activeParentTab,
    activeParentSubScreen,
    setParentTab,
    setParentSubScreen,
    activeChildTab,
    activeChildSubScreen,
    setChildTab,
    setChildSubScreen,
    parent,
    toasts,
    dismissToast
  } = useAppStore();

  const isDesktop = Platform.OS === 'web' && width > 960;
  const rc = getAppRegionConfig(currency, language);

  if (!isDesktop) {
    return <Redirect href="/(auth)/login" />;
  }

  // Helper to render parent screen inside simulator
  const renderParentSimulatorScreen = () => {
    if (activeParentSubScreen === 'onboarding') {
      return <ParentSettingsView />;
    }
    if (activeParentSubScreen === 'notifications') {
      return <ParentNotificationsView />;
    }
    if (activeParentSubScreen === 'savings') {
      return <ParentSavingsView />;
    }
    if (activeParentSubScreen === 'funding') {
      return <ParentSettingsView />;
    }
    if (activeParentSubScreen === 'profile') {
      return <ParentSettingsView />;
    }
    if (activeParentSubScreen === 'security') {
      return <ParentSettingsView />;
    }
    if (activeParentSubScreen === 'settings') {
      return <ParentSettingsView />;
    }

    switch (activeParentTab) {
      case 'dashboard':
        return <ParentDashboardView />;
      case 'children':
        return <ParentChildrenView />;
      case 'payments':
        return <ParentApprovalsView />;
      case 'transactions':
        return <ParentTransactionsView />;
      case 'more':
        return <ParentGovernanceView />;
      default:
        return <ParentDashboardView />;
    }
  };

  // Helper to render child screen inside simulator
  const renderChildSimulatorScreen = () => {
    if (activeChildSubScreen === 'notifications') {
      return <ChildNotificationsView />;
    }
    if (activeChildSubScreen === 'savings') {
      return <ChildSavingsView />;
    }

    switch (activeChildTab) {
      case 'home':
        return <ChildHomeView />;
      case 'wallet':
        return <ChildWalletView />;
      case 'scan':
        return <ChildPayView />;
      case 'activity':
        return <ChildActivityView />;
      default:
        return <ChildHomeView />;
    }
  };

  const handleStartOnboarding = () => {
    setParentSubScreen('onboarding');
    showToast('🔑 Initiated Parent Onboarding Flow (Nafath Level 3)', 'parent');
  };

  const handleStartChildOnboarding = () => {
    setChildSubScreen('onboarding');
    showToast('👧 Initiated Youth Card Personalization & Activation', 'child');
  };

  const showToast = (message: string, type: 'parent' | 'child') => {
    useAppStore.getState().showToast(message, type);
  };

  return (
    <YStack flex={1} height="100%" width="100%" backgroundColor="$background" overflow="hidden">
      {/* 1. Global Simulation Header Control Bar */}
      <XStack 
        height={64} 
        backgroundColor="$cardBackground" 
        paddingHorizontal="$4" 
        alignItems="center" 
        justifyContent="space-between" 
        borderBottomWidth={1} 
        borderBottomColor="$borderColor"
        elevation={2}
        zIndex={100}
      >
        {/* Brand logo & tagline */}
        <XStack alignItems="center" gap="$3">
          <YStack backgroundColor="$parentPrimary" padding="$2" borderRadius="$md">
            <Text color="white" fontWeight="900" fontSize={16}>▲</Text>
          </YStack>
          <YStack>
            <Text fontSize={15} fontWeight="800" color="$color">AMANAH</Text>
            <Text fontSize={10} color="$textSecondary">
              Trust + Responsibility + Protection · Saudi Family Fintech
            </Text>
          </YStack>
        </XStack>

        {/* Global Controls */}
        <XStack alignItems="center" gap="$3">
          {/* View mode selectors */}
          <XStack backgroundColor="$background" padding="$1" borderRadius="$md" borderWidth={1} borderColor="$borderColor">
            <Button 
              size="$sm" 
              backgroundColor={viewMode === 'dual' ? '$parentPrimary' : 'transparent'}
              hoverStyle={{ backgroundColor: viewMode === 'dual' ? '$parentPrimary' : '$backgroundHover' }}
              onPress={() => setViewMode('dual')}
            >
              <Text fontSize={11} fontWeight="700" color={viewMode === 'dual' ? 'white' : '$textSecondary'}>
                Dual Simulator
              </Text>
            </Button>
            <Button 
              size="$sm" 
              backgroundColor={viewMode === 'parent' ? '$parentPrimary' : 'transparent'}
              hoverStyle={{ backgroundColor: viewMode === 'parent' ? '$parentPrimary' : '$backgroundHover' }}
              onPress={() => setViewMode('parent')}
            >
              <Text fontSize={11} fontWeight="700" color={viewMode === 'parent' ? 'white' : '$textSecondary'}>
                Parent App
              </Text>
            </Button>
            <Button 
              size="$sm" 
              backgroundColor={viewMode === 'child' ? '$parentPrimary' : 'transparent'}
              hoverStyle={{ backgroundColor: viewMode === 'child' ? '$parentPrimary' : '$backgroundHover' }}
              onPress={() => setViewMode('child')}
            >
              <Text fontSize={11} fontWeight="700" color={viewMode === 'child' ? 'white' : '$textSecondary'}>
                Child App
              </Text>
            </Button>
            <Button 
              size="$sm" 
              backgroundColor={viewMode === 'ia' ? '$parentPrimary' : 'transparent'}
              hoverStyle={{ backgroundColor: viewMode === 'ia' ? '$parentPrimary' : '$backgroundHover' }}
              onPress={() => setViewMode('ia')}
            >
              <Text fontSize={11} fontWeight="700" color={viewMode === 'ia' ? 'white' : '$textSecondary'}>
                31 IA Inspector
              </Text>
            </Button>
          </XStack>

          {/* Quick Onboarding Trigger buttons */}
          <Button 
            size="$sm" 
            backgroundColor="$parentPrimarySubtle" 
            borderColor="$parentPrimaryBorder"
            borderWidth={1}
            onPress={handleStartOnboarding}
          >
            <Text fontSize={11} color="$parentPrimary" fontWeight="700">🔑 Login (01)</Text>
          </Button>

          <Button 
            size="$sm" 
            backgroundColor="$childPrimarySubtle" 
            borderColor="$childPrimaryBorder"
            borderWidth={1}
            onPress={handleStartChildOnboarding}
          >
            <Text fontSize={11} color="$childPrimary" fontWeight="700">👧 Child (C01)</Text>
          </Button>

          {/* CEO Signature demo trigger */}
          <Button 
            size="$sm" 
            backgroundColor="linear-gradient(135deg, #4338CA, #6366F1)" 
            onPress={() => {
              setIsCeoDemo(true);
              setCeoStep(0);
              setViewMode('dual');
            }}
          >
            <Text color="white" fontSize={11} fontWeight="800">▶ CEO Signature Demo</Text>
          </Button>

          {/* Language Selector */}
          <XStack alignItems="center" backgroundColor="$background" paddingHorizontal="$2" paddingVertical="$1" borderRadius="$md" borderWidth={1} borderColor="$borderColor">
            <Select 
              value={language} 
              onValueChange={setLanguage}
              title="Change Language"
            >
              <Select.Trigger size="$sm" width={110} backgroundColor="transparent" borderWidth={0}>
                <Select.Value placeholder="Language" />
              </Select.Trigger>
              <Select.Content>
                <Select.ScrollUpButton />
                <Select.Viewport>
                  <Select.Group>
                    <Select.Item index={0} value="en">
                      <Select.ItemText>🇬🇧 English (EN)</Select.ItemText>
                    </Select.Item>
                    <Select.Item index={1} value="ar">
                      <Select.ItemText>🇸🇦 العربية (AR)</Select.ItemText>
                    </Select.Item>
                    <Select.Item index={2} value="te">
                      <Select.ItemText>🇮🇳 తెలుగు (TE)</Select.ItemText>
                    </Select.Item>
                    <Select.Item index={3} value="hi">
                      <Select.ItemText>🇮🇳 हिन्दी (HI)</Select.ItemText>
                    </Select.Item>
                    <Select.Item index={4} value="ta">
                      <Select.ItemText>🇮🇳 தமிழ் (TA)</Select.ItemText>
                    </Select.Item>
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select>
          </XStack>

          {/* Currency Selector */}
          <XStack alignItems="center" backgroundColor="$background" paddingHorizontal="$2" paddingVertical="$1" borderRadius="$md" borderWidth={1} borderColor="$borderColor">
            <Select 
              value={currency} 
              onValueChange={setCurrency}
              title="Change Currency"
            >
              <Select.Trigger size="$sm" width={100} backgroundColor="transparent" borderWidth={0}>
                <Select.Value placeholder="Currency" />
              </Select.Trigger>
              <Select.Content>
                <Select.ScrollUpButton />
                <Select.Viewport>
                  <Select.Group>
                    <Select.Item index={0} value="SAR">
                      <Select.ItemText>🇸🇦 SAR (ر.س)</Select.ItemText>
                    </Select.Item>
                    <Select.Item index={1} value="USD">
                      <Select.ItemText>🇺🇸 USD ($)</Select.ItemText>
                    </Select.Item>
                    <Select.Item index={2} value="AED">
                      <Select.ItemText>🇦🇪 AED (د.إ)</Select.ItemText>
                    </Select.Item>
                    <Select.Item index={3} value="INR">
                      <Select.ItemText>🇮🇳 INR (₹)</Select.ItemText>
                    </Select.Item>
                    <Select.Item index={4} value="EUR">
                      <Select.ItemText>🇪🇺 EUR (€)</Select.ItemText>
                    </Select.Item>
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select>
          </XStack>

          {/* Reset button */}
          <Button 
            size="$sm" 
            circular 
            backgroundColor="transparent" 
            hoverStyle={{ backgroundColor: '$backgroundHover' }}
            onPress={resetDemo}
          >
            <Text fontSize={14}>🔄</Text>
          </Button>
        </XStack>
      </XStack>

      {/* 2. CEO guided walkthrough banner */}
      <CeoDemoBanner />

      {/* 3. Main Workspace Layout */}
      <XStack flex={1} backgroundColor="$background">
        {/* Left Side: 31 Section IA Inspector */}
        {(viewMode === 'dual' || viewMode === 'ia') && (
          <YStack width={viewMode === 'ia' ? '100%' : 340} height="100%">
            <IaSidebar />
          </YStack>
        )}

        {/* Center / Right: Interactive Dual Phone Simulator Stage */}
        {viewMode !== 'ia' && (
          <XStack flex={1} alignItems="center" justifyContent="center" padding="$4" gap="$5" backgroundColor="#0B0A1A" overflowY="auto">
            {/* ==================================================== */}
            {/* PARENT APP SIMULATOR FRAME                          */}
            {/* ==================================================== */}
            {(viewMode === 'dual' || viewMode === 'parent') && (
              <YStack alignItems="center" gap="$2">
                <Text color="white" fontSize={11} fontWeight="800" opacity={0.8}>
                  🛡️ PARENT APP · CONTROL LAYER
                </Text>
                
                {/* Phone mockup container */}
                <YStack 
                  width={360} 
                  height={720} 
                  backgroundColor="$background" 
                  borderRadius={40} 
                  borderWidth={10} 
                  borderColor="#1D1C36"
                  overflow="hidden"
                  elevation={8}
                >
                  {/* Status Bar */}
                  <XStack height={26} backgroundColor="$background" alignItems="center" justifyContent="space-between" paddingHorizontal="$4">
                    <Text fontSize={11} fontWeight="700" color="$color">09:41</Text>
                    <XStack alignItems="center" gap="$1">
                      <Text fontSize={10}>🔋 100%</Text>
                    </XStack>
                  </XStack>

                  {/* Simulator Screen Body (Scrollable Screen Component) */}
                  <YStack flex={1} overflow="hidden">
                    {renderParentSimulatorScreen()}
                  </YStack>

                  {/* Navigation bar tabs */}
                  <XStack height={50} backgroundColor="$cardBackground" borderTopWidth={1} borderTopColor="$borderColor" alignItems="center" justifyContent="space-around">
                    <Button padding={0} backgroundColor="transparent" onPress={() => setParentTab('dashboard')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>🏠</Text>
                        <Text fontSize={9} color={activeParentTab === 'dashboard' ? '$parentPrimary' : '$textSecondary'}>Home</Text>
                      </YStack>
                    </Button>
                    <Button padding={0} backgroundColor="transparent" onPress={() => setParentTab('children')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>👥</Text>
                        <Text fontSize={9} color={activeParentTab === 'children' ? '$parentPrimary' : '$textSecondary'}>Children</Text>
                      </YStack>
                    </Button>
                    <Button padding={0} backgroundColor="transparent" onPress={() => setParentTab('payments')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>💳</Text>
                        <Text fontSize={9} color={activeParentTab === 'payments' ? '$parentPrimary' : '$textSecondary'}>Approvals</Text>
                      </YStack>
                    </Button>
                    <Button padding={0} backgroundColor="transparent" onPress={() => setParentTab('transactions')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>📊</Text>
                        <Text fontSize={9} color={activeParentTab === 'transactions' ? '$parentPrimary' : '$textSecondary'}>Ledger</Text>
                      </YStack>
                    </Button>
                    <Button padding={0} backgroundColor="transparent" onPress={() => setParentTab('more')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>⚙️</Text>
                        <Text fontSize={9} color={activeParentTab === 'more' ? '$parentPrimary' : '$textSecondary'}>Rules</Text>
                      </YStack>
                    </Button>
                  </XStack>
                </YStack>
              </YStack>
            )}

            {/* ==================================================== */}
            {/* LIVE SYNC CONNECTOR BRIDGE                          */}
            {/* ==================================================== */}
            {viewMode === 'dual' && (
              <YStack alignItems="center" justifyContent="center" gap="$2">
                <Text color="#0D9488" fontWeight="800" fontSize={14}>⚡</Text>
                <Text color="white" fontSize={9} fontWeight="700" letterSpacing={1}>LIVE SYNC</Text>
                <YStack width={1} height={80} backgroundColor="$borderColor" opacity={0.3} />
              </YStack>
            )}

            {/* ==================================================== */}
            {/* CHILD APP SIMULATOR FRAME                           */}
            {/* ==================================================== */}
            {(viewMode === 'dual' || viewMode === 'child') && (
              <YStack alignItems="center" gap="$2">
                <Text color="white" fontSize={11} fontWeight="800" opacity={0.8}>
                  💳 CHILD APP · SPENDING LAYER
                </Text>
                
                {/* Phone mockup container */}
                <YStack 
                  width={360} 
                  height={720} 
                  backgroundColor="$background" 
                  borderRadius={40} 
                  borderWidth={10} 
                  borderColor="#1D1C36"
                  overflow="hidden"
                  elevation={8}
                >
                  {/* Status Bar */}
                  <XStack height={26} backgroundColor="$background" alignItems="center" justifyContent="space-between" paddingHorizontal="$4">
                    <Text fontSize={11} fontWeight="700" color="$color">09:41</Text>
                    <XStack alignItems="center" gap="$1">
                      <Text fontSize={10}>🔋 98%</Text>
                    </XStack>
                  </XStack>

                  {/* Simulator Screen Body (Scrollable Screen Component) */}
                  <YStack flex={1} overflow="hidden">
                    {renderChildSimulatorScreen()}
                  </YStack>

                  {/* Navigation bar tabs */}
                  <XStack height={50} backgroundColor="$cardBackground" borderTopWidth={1} borderTopColor="$borderColor" alignItems="center" justifyContent="space-around">
                    <Button padding={0} backgroundColor="transparent" onPress={() => setChildTab('home')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>🏠</Text>
                        <Text fontSize={9} color={activeChildTab === 'home' ? '$childPrimary' : '$textSecondary'}>Home</Text>
                      </YStack>
                    </Button>
                    <Button padding={0} backgroundColor="transparent" onPress={() => setChildTab('wallet')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>💼</Text>
                        <Text fontSize={9} color={activeChildTab === 'wallet' ? '$childPrimary' : '$textSecondary'}>Wallet</Text>
                      </YStack>
                    </Button>
                    <Button padding={0} backgroundColor="transparent" onPress={() => setChildTab('scan')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>🔍</Text>
                        <Text fontSize={9} color={activeChildTab === 'scan' ? '$childPrimary' : '$textSecondary'}>Scan</Text>
                      </YStack>
                    </Button>
                    <Button padding={0} backgroundColor="transparent" onPress={() => setChildTab('activity')}>
                      <YStack alignItems="center" gap="$0.5">
                        <Text fontSize={14}>📈</Text>
                        <Text fontSize={9} color={activeChildTab === 'activity' ? '$childPrimary' : '$textSecondary'}>Activity</Text>
                      </YStack>
                    </Button>
                  </XStack>
                </YStack>
              </YStack>
            )}
          </XStack>
        )}
      </XStack>

      {/* Global Toast Container */}
      <YStack position="absolute" bottom="$4" right="$4" zIndex={200} gap="$2">
        {toasts.map(toast => (
          <Theme key={toast.id} name={toast.type === 'parent' ? 'dark' : 'light'}>
            <XStack 
              backgroundColor={toast.type === 'parent' ? '#1E1B4B' : '#0D9488'} 
              padding="$3" 
              borderRadius="$md" 
              alignItems="center" 
              justifyContent="space-between" 
              elevation={4}
              gap="$4"
              width={300}
            >
              <Text color="white" fontSize={12} fontWeight="600" flex={1}>{toast.message}</Text>
              <Button size="$xs" backgroundColor="transparent" padding={0} onPress={() => dismissToast(toast.id)}>
                <Text color="white" fontWeight="800">✕</Text>
              </Button>
            </XStack>
          </Theme>
        ))}
      </YStack>
    </YStack>
  );
}
