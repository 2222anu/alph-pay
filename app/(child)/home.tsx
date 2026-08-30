// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator, Progress } from 'tamagui';
import { CreditCard, Award, TrendingUp, Compass, Target, QrCode } from '@tamagui/lucide-icons';
import { useWindowDimensions, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney, getAppRegionConfig } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ChildHomeScreen() {
  const {
    children,
    selectedChildId,
    currency,
    language,
    setChildTab,
    activeChildSubScreen,
    setChildSubScreen
  } = useAppStore();

  const child = children.find(c => c.id === selectedChildId) || children[0];
  const rc = getAppRegionConfig(currency, language);

  const router = useRouter();
  const { width } = useWindowDimensions();

  // Card personalization color local state
  const [cardColor, setCardColor] = useState(child.color);

  // Remaining budget today
  const availableToday = Math.max(0, child.dailyLimit - child.spentToday);

  // Show reward celebration popup if appreciation exists
  const [showCelebration, setShowCelebration] = useState(false);
  const appreciation = useAppStore(state => state.childAppreciation);

  useEffect(() => {
    if (activeChildSubScreen === 'appreciation' && appreciation) {
      setShowCelebration(true);
    }
  }, [activeChildSubScreen, appreciation]);

  const handleCloseCelebration = () => {
    setShowCelebration(false);
    setChildSubScreen(null);
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header Info */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor" gap="$1">
        <XStack ai="center" jc="space-between">
          <XStack ai="center" gap="$2.5">
            <Text fontSize={20}>{child.avatar}</Text>
            <YStack>
              <Text fontSize={10} color="$textSecondary">Youth Spending Card</Text>
              <Text fontSize={14} fontWeight="800" color="$color">{child.name}</Text>
            </YStack>
          </XStack>
          <Button 
            size="$sm" 
            circular 
            bg="$background" 
            borderWidth={1} 
            borderColor="$borderColor" 
            onPress={() => {
              if (Platform.OS === 'web' && width > 960) {
                setChildSubScreen('notifications');
              } else {
                router.push('/(child)/notifications');
              }
            }}
          >
            <Text fontSize={14}>🔔</Text>
          </Button>
        </XStack>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* ==================== 1. DEBIT CARD PERSONALIZER ==================== */}
        <YStack gap="$2.5">
          <Text fontSize={11} fontWeight="800" color="$textSecondary" letterSpacing={0.5}>
            {t('digitalCard').toUpperCase()}
          </Text>
          
          {/* Card mockup */}
          <Card 
            p="$4" 
            h={180} 
            bg={cardColor} 
            br="$xl" 
            elevation={4} 
            jc="space-between"
            position="relative"
            overflow="hidden"
          >
            <XStack jc="space-between" ai="center">
              <Text fontSize={13} fontWeight="800" color="white" letterSpacing={0.5}>
                {rc.cardBrand}
              </Text>
              <Text fontSize={14} fontWeight="900" color="white" opacity={0.8}>
                {rc.cardNetwork}
              </Text>
            </XStack>

            <YStack gap="$1" py="$2">
              <Text fontSize={16} fontWeight="700" color="white" letterSpacing={3}>
                ••••  ••••  ••••  4892
              </Text>
            </YStack>

            <XStack jc="space-between" ai="flex-end">
              <YStack>
                <Text fontSize={8} color="white" opacity={0.6}>{t('cardholder')}</Text>
                <Text fontSize={11} fontWeight="800" color="white">{child.name.toUpperCase()}</Text>
              </YStack>
              <YStack>
                <Text fontSize={8} color="white" opacity={0.6}>{t('expires')}</Text>
                <Text fontSize={11} fontWeight="800" color="white">08/29</Text>
              </YStack>
            </XStack>
          </Card>

          {/* Color personalizer selectors */}
          <XStack gap="$2" ai="center" jc="center" py="$1">
            {['#0D9488', '#6366F1', '#F59E0B', '#EC4899', '#3B82F6', '#1E1B4B'].map(col => (
              <Button 
                key={col} 
                w={28} 
                h={28} 
                br={14} 
                p={0}
                bg={col} 
                borderWidth={cardColor === col ? 3 : 0}
                borderColor="white"
                onPress={() => setCardColor(col)}
              />
            ))}
          </XStack>
        </YStack>

        {/* ==================== 2. DAILY BUDGET GAUGES ==================== */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <YStack gap="$1">
            <Text fontSize={10} color="$textSecondary" fontWeight="800" letterSpacing={0.5}>
              {t('availableToday').toUpperCase()}
            </Text>
            <Text fontSize={28} fontWeight="900" color={child.color}>
              {formatMoney(availableToday, currency)}
            </Text>
          </YStack>

          <Separator borderColor="$borderColor" />

          <XStack jc="space-between" ai="center">
            <YStack>
              <Text fontSize={9} color="$textTertiary">Spent Today</Text>
              <Text fontSize={11} fontWeight="700" color="$color">
                {formatMoney(child.spentToday, currency)}
              </Text>
            </YStack>
            <YStack>
              <Text fontSize={9} color="$textTertiary">Daily limit</Text>
              <Text fontSize={11} fontWeight="700" color="$color">
                {formatMoney(child.dailyLimit, currency)}
              </Text>
            </YStack>
            <YStack>
              <Text fontSize={9} color="$textTertiary">Tx Count</Text>
              <Text fontSize={11} fontWeight="700" color="$color">
                {child.txCompletedToday} / {child.dailyTxCountLimit} tx
              </Text>
            </YStack>
          </XStack>
        </Card>

        {/* ==================== 3. SCAN PAY LINK ==================== */}
        <Button 
          size="$md" 
          bg="$primary" 
          hoverStyle={{ bg: '$primaryHover' }}
          onPress={() => setChildTab('scan')}
          icon={QrCode}
        >
          <Text color="white" fontSize={12} fontWeight="800">
            {t('scanQrBtn')}
          </Text>
        </Button>

        {/* ==================== 4. SAVINGS GOAL WORKBENCH ==================== */}
        {child.savingsGoal && (
          <Card 
            p="$4" 
            bg="$cardBackground" 
            br="$lg" 
            borderWidth={1} 
            borderColor="$borderColor" 
            gap="$2.5"
            onPress={() => {
              if (Platform.OS === 'web' && width > 960) {
                setChildSubScreen('savings');
              } else {
                router.push('/(child)/savings');
              }
            }}
            cursor="pointer"
            hoverStyle={{ borderColor: child.color }}
          >
            <XStack jc="space-between" ai="center">
              <Text fontSize={11} fontWeight="800" color="$textSecondary" letterSpacing={0.5}>
                {t('activeGoals').toUpperCase()}
              </Text>
              <Target size={14} color={child.color} />
            </XStack>

            <YStack gap="$1">
              <Text fontSize={13} fontWeight="800" color="$color">
                {child.savingsGoal.name}
              </Text>
              <XStack jc="space-between">
                <Text fontSize={10} color="$textSecondary">
                  {t('saved')}: {formatMoney(child.savingsGoal.saved, currency)}
                </Text>
                <Text fontSize={10} color="$textSecondary">
                  {t('target')}: {formatMoney(child.savingsGoal.target, currency)}
                </Text>
              </XStack>
              <Progress value={(child.savingsGoal.saved / child.savingsGoal.target) * 100} size="$xs" marginTop="$1">
                <Progress.Indicator bg={child.color} />
              </Progress>
            </YStack>
          </Card>
        )}
      </YStack>

      {/* PARENT CELEBRATION APPRECIATION POPUP */}
      {showCelebration && appreciation && (
        <Card 
          position="absolute"
          top={80}
          left={20}
          right={20}
          p="$4"
          bg="#0F0E20"
          borderWidth={2}
          borderColor="#D97706"
          br="$lg"
          elevation={8}
          ai="center"
          gap="$3"
          animation="bouncy"
        >
          <Text fontSize={42}>⭐</Text>
          <Text fontSize={16} fontWeight="800" color="#F8FAFC">Praise Reward from Dad!</Text>
          <Text fontSize={12} color="#CBD5E1" textAlign="center" fontStyle="italic">
            "{appreciation.message}"
          </Text>
          <Text fontSize={20} fontWeight="900" color="#D97706">
            + {formatMoney(appreciation.reward, currency)}
          </Text>
          <Button size="$sm" bg="#D97706" onPress={handleCloseCelebration} w="100%">
            <Text color="white" fontWeight="800">Awesome! 🎉</Text>
          </Button>
        </Card>
      )}
    </ScrollView>
  );
}
export { ChildHomeScreen };
