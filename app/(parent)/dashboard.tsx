// @ts-nocheck
import React, { useState } from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator, Progress, Sheet, Input } from 'tamagui';
import { Plus, Send, Calendar, ShieldAlert, Award, ChevronRight, Check, X, Shield, Lock, Bell } from '@tamagui/lucide-icons';
import { useWindowDimensions, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney, getAppRegionConfig } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';
import { DonutChart } from '../../components/DonutChart';

export default function ParentDashboardScreen() {
  const {
    parent,
    children,
    currency,
    language,
    pendingRequests,
    transactions,
    analytics,
    analyticsPeriod,
    setAnalyticsPeriod,
    selectedAnalyticsChild,
    setSelectedAnalyticsChild,
    approveRequest,
    declineRequest,
    sendPraise,
    selectedChildId,
    setSelectedChildId,
    setParentSubScreen,
    activeParentSubScreen
  } = useAppStore();

  const { width } = useWindowDimensions();
  const router = useRouter();

  const [pinCode, setPinCode] = useState('');
  const [activeReqId, setActiveReqId] = useState<string | null>(null);
  const [showPinSheet, setShowPinSheet] = useState(false);

  // Send Money / Praise Dialog inputs
  const [praiseText, setPraiseText] = useState('Great job! Responsible spending 👏');
  const [rewardAmount, setRewardAmount] = useState('20.00');
  const [showPraiseSheet, setShowPraiseSheet] = useState(false);

  const rc = getAppRegionConfig(currency, language);
  const periodStats = analytics[analyticsPeriod] || analytics.weekly;

  const currentSelectedChild = children.find(c => c.id === selectedChildId) || children[0];

  const handleOpenApproval = (reqId: string) => {
    setActiveReqId(reqId);
    setPinCode('');
    setShowPinSheet(true);
  };

  const handleApprove = () => {
    if (!activeReqId) return;
    const success = approveRequest(activeReqId, pinCode);
    if (success) {
      setShowPinSheet(false);
      setActiveReqId(null);
    }
  };

  const handleDecline = (reqId: string) => {
    declineRequest(reqId);
  };

  const handleSendPraise = () => {
    const rewardNum = parseFloat(rewardAmount);
    if (isNaN(rewardNum) || rewardNum <= 0) return;
    sendPraise(selectedChildId, praiseText, rewardNum);
    setShowPraiseSheet(false);
  };

  // Support tour steps highlighting by checking sub-screen state
  React.useEffect(() => {
    if (activeParentSubScreen === 'req-001') {
      setActiveReqId('req-001');
      setPinCode('');
      setShowPinSheet(true);
    } else if (activeParentSubScreen === 'req-001-otp') {
      setActiveReqId('req-001');
      setPinCode('1932'); // auto fill demo OTP
      setShowPinSheet(true);
    } else if (activeParentSubScreen === null) {
      setShowPinSheet(false);
    }
  }, [activeParentSubScreen]);

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header Profile Title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor" gap="$2">
        <XStack ai="center" jc="space-between">
          <XStack ai="center" gap="$3">
            <YStack bg="$parentPrimarySubtle" w={40} h={40} br={20} ai="center" jc="center">
              <Text fontSize={16} fontWeight="700">🛡️</Text>
            </YStack>
            <YStack>
              <Text fontSize={11} color="$textSecondary">{t('welcomeParent')}</Text>
              <Text fontSize={14} fontWeight="800" color="$color">{parent.name}</Text>
            </YStack>
          </XStack>
          <XStack gap="$2">
            <Button 
              size="$sm" 
              circular 
              bg="$background" 
              borderWidth={1} 
              borderColor="$borderColor" 
              onPress={() => {
                if (Platform.OS === 'web' && width > 960) {
                  setParentSubScreen('notifications');
                } else {
                  router.push('/(parent)/notifications');
                }
              }}
            >
              <Bell size={14} color="#64748B" />
            </Button>
            <Button 
              size="$sm" 
              circular 
              bg="$background" 
              borderWidth={1} 
              borderColor="$borderColor" 
              onPress={() => {
                if (Platform.OS === 'web' && width > 960) {
                  setParentSubScreen('savings');
                } else {
                  router.push('/(parent)/savings');
                }
              }}
            >
              <Text fontSize={12}>🎯</Text>
            </Button>
          </XStack>
        </XStack>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* ==================== 1. FINANCIAL VAULT CARD ==================== */}
        <Card p="$4" bg="#1E1B4B" br="$lg" elevation={4} gap="$3">
          <XStack jc="space-between" ai="center">
            <Text fontSize={10} color="#CBD5E1" fontWeight="800" letterSpacing={0.5}>
              {t('familyBalance').toUpperCase()}
            </Text>
            <Text fontSize={10} color="#14B8A6" bg="rgba(20, 184, 166, 0.15)" px="$2" py="$0.5" br="$full" fontWeight="700">
              {rc.regulator} Active
            </Text>
          </XStack>
          
          <Text fontSize={32} fontWeight="900" color="white">
            {formatMoney(parent.availableBalance, currency)}
          </Text>

          <Separator borderColor="rgba(255,255,255,0.1)" />

          <XStack jc="space-between" ai="center" fw="wrap" gap="$2">
            <YStack>
              <Text fontSize={9} color="#94A3B8">{t('totalAllocated')}</Text>
              <Text fontSize={12} color="white" fontWeight="700">
                {formatMoney(parent.totalAllocated, currency)}
              </Text>
            </YStack>
            <YStack>
              <Text fontSize={9} color="#94A3B8">{t('totalSpent')}</Text>
              <Text fontSize={12} color="#F59E0B" fontWeight="700">
                {formatMoney(parent.childSpendingThisMonth, currency)}
              </Text>
            </YStack>
            <YStack>
              <Text fontSize={9} color="#94A3B8">{t('allowance')}</Text>
              <Text fontSize={12} color="#14B8A6" fontWeight="700">
                {formatMoney(parent.upcomingAllowance, currency)}
              </Text>
            </YStack>
          </XStack>
        </Card>

        {/* ==================== 2. CHILDREN OVERVIEW ==================== */}
        <YStack gap="$2">
          <Text fontSize={13} fontWeight="800" color="$color" letterSpacing={0.5}>
            {t('childrenAllocation').toUpperCase()}
          </Text>
          <XStack gap="$2" fw="wrap">
            {children.map((c) => {
              const isSelected = c.id === selectedChildId;
              const pctUsed = Math.min(100, Math.round((c.spentToday / c.dailyLimit) * 100));
              return (
                <Card 
                  key={c.id} 
                  f={1} 
                  minWidth={150} 
                  p="$3" 
                  bg="$cardBackground" 
                  br="$md" 
                  borderWidth={isSelected ? 2 : 1} 
                  borderColor={isSelected ? '$parentPrimary' : '$borderColor'}
                  onPress={() => setSelectedChildId(c.id)}
                  cursor="pointer"
                  gap="$2"
                >
                  <XStack jc="space-between" ai="center">
                    <XStack ai="center" gap="$2">
                      <Text fontSize={18}>{c.avatar}</Text>
                      <YStack>
                        <Text fontSize={12} fontWeight="800" color="$color">{c.shortName}</Text>
                        <Text fontSize={9} color="$textSecondary">Age {c.age}</Text>
                      </YStack>
                    </XStack>
                    <ChevronRight size={14} color="#94A3B8" />
                  </XStack>
                  <Separator borderColor="$borderColor" />
                  <YStack>
                    <Text fontSize={9} color="$textSecondary">Available Balance</Text>
                    <Text fontSize={13} fontWeight="800" color={c.color}>
                      {formatMoney(c.balance, currency)}
                    </Text>
                  </YStack>
                  <YStack gap="$1">
                    <XStack jc="space-between" ai="center">
                      <Text fontSize={8} color="$textTertiary">Today's limit</Text>
                      <Text fontSize={8} color="$textSecondary" fontWeight="700">
                        {pctUsed}%
                      </Text>
                    </XStack>
                    <Progress value={pctUsed} size="$xs">
                      <Progress.Indicator bg={c.color} />
                    </Progress>
                  </YStack>
                </Card>
              );
            })}
          </XStack>
        </YStack>

        {/* ==================== 3. QUICK ACTIONS ==================== */}
        <XStack gap="$2" jc="space-between">
          <Button 
            f={1} 
            bg="$cardBackground" 
            borderColor="$borderColor" 
            borderWidth={1}
            py="$2.5"
            onPress={() => setShowPraiseSheet(true)}
            flexDirection="column"
            h={64}
            gap="$1"
          >
            <Award size={16} color="#D97706" />
            <Text fontSize={10} fontWeight="700" color="$textSecondary">Send Praise</Text>
          </Button>
          
          <Button 
            f={1} 
            bg="$cardBackground" 
            borderColor="$borderColor" 
            borderWidth={1}
            py="$2.5"
            onPress={() => setParentSubScreen('allowance')}
            flexDirection="column"
            h={64}
            gap="$1"
          >
            <Calendar size={16} color="#0D9488" />
            <Text fontSize={10} fontWeight="700" color="$textSecondary">Add Allowance</Text>
          </Button>

          <Button 
            f={1} 
            bg="$cardBackground" 
            borderColor="$borderColor" 
            borderWidth={1}
            py="$2.5"
            onPress={() => setParentSubScreen('controls')}
            flexDirection="column"
            h={64}
            gap="$1"
          >
            <Shield size={16} color="#4338CA" />
            <Text fontSize={10} fontWeight="700" color="$textSecondary">Governance</Text>
          </Button>
        </XStack>

        {/* ==================== 4. PENDING REQUESTS ==================== */}
        {pendingRequests.length > 0 && (
          <YStack gap="$2">
            <XStack ai="center" gap="$2">
              <Text fontSize={13} fontWeight="800" color="$color" letterSpacing={0.5}>
                PENDING APPROVALS
              </Text>
              <Text fontSize={10} bg="$dangerBg" color="$danger" px="$2" py="$0.5" br="$full" fontWeight="700">
                {pendingRequests.length} Req
              </Text>
            </XStack>

            {pendingRequests.map((req) => (
              <Card key={req.id} p="$3.5" bg="$cardBackground" br="$md" borderWidth={1} borderColor="$borderColor" gap="$2">
                <XStack jc="space-between" ai="center">
                  <XStack ai="center" gap="$2">
                    <YStack bg="$parentPrimarySubtle" w={32} h={32} br={16} ai="center" jc="center">
                      <ShieldAlert size={14} color="#4338CA" />
                    </YStack>
                    <YStack>
                      <Text fontSize={12} fontWeight="800" color="$color">
                        {req.childName} requested {formatMoney(req.amount, currency)}
                      </Text>
                      <Text fontSize={9} color="$textSecondary">At {req.merchant} · {req.time}</Text>
                    </YStack>
                  </XStack>
                </XStack>
                
                <Text fontSize={11} color="$textSecondary" bg="$background" p="$2" br="$sm" fontStyle="italic">
                  💬 "{req.reason}"
                </Text>

                <XStack gap="$2" marginTop="$1">
                  <Button 
                    size="$sm" 
                    f={1} 
                    bg="$borderColor" 
                    hoverStyle={{ bg: '$backgroundHover' }}
                    onPress={() => handleDecline(req.id)}
                  >
                    <X size={12} color="#64748B" />
                    <Text fontSize={11} fontWeight="700" color="#475569">Decline</Text>
                  </Button>

                  <Button 
                    size="$sm" 
                    f={1.8} 
                    bg="#059669" 
                    hoverStyle={{ bg: '#10B981' }}
                    onPress={() => handleOpenApproval(req.id)}
                  >
                    <Check size={12} color="white" />
                    <Text fontSize={11} fontWeight="800" color="white">Approve with PIN (C08) →</Text>
                  </Button>
                </XStack>
              </Card>
            ))}
          </YStack>
        )}

        {/* ==================== 5. SPENDING SNAPSHOT (PIE CHART) ==================== */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <XStack jc="space-between" ai="center">
            <YStack>
              <Text fontSize={13} fontWeight="800" color="$color">
                {t('spendingAnalytics')}
              </Text>
              <Text fontSize={10} color="$textSecondary">
                Showing Pie Chart for: {selectedAnalyticsChild === 'all' ? 'All Family' : selectedAnalyticsChild.toUpperCase()}
              </Text>
            </YStack>
            {/* Weekly/Monthly period switcher */}
            <XStack bg="$background" p="$0.5" br="$sm" borderWidth={1} borderColor="$borderColor">
              {(['weekly', 'monthly', 'yearly'] as const).map((p) => (
                <Button 
                  key={p} 
                  size="$xs" 
                  p="$1" 
                  h={24}
                  bg={analyticsPeriod === p ? '$parentPrimary' : 'transparent'}
                  onPress={() => setAnalyticsPeriod(p)}
                >
                  <Text fontSize={9} color={analyticsPeriod === p ? 'white' : '$textSecondary'} fontWeight="700">
                    {p.toUpperCase()}
                  </Text>
                </Button>
              ))}
            </XStack>
          </XStack>

          <XStack ai="center" jc="center" h={140} gap="$4">
            <YStack w={120} h={120}>
              <DonutChart period={analyticsPeriod} selChild={selectedAnalyticsChild} />
            </YStack>

            <YStack f={1} gap="$1">
              <Text fontSize={10} color="$textTertiary">SPENDING SHARE</Text>
              {periodStats.categorySpending.slice(0, 3).map((item: any) => (
                <XStack key={item.name} ai="center" jc="space-between">
                  <XStack ai="center" gap="$1">
                    <Text fontSize={12}>{item.icon}</Text>
                    <Text fontSize={10} fontWeight="600" color="$textSecondary" numberOfLines={1} w={70}>
                      {item.name}
                    </Text>
                  </XStack>
                  <Text fontSize={10} fontWeight="800" color={item.color}>
                    {item.percentage}%
                  </Text>
                </XStack>
              ))}
            </YStack>
          </XStack>
        </Card>

        {/* ==================== 6. RECENT ACTIVITY ==================== */}
        <YStack gap="$2">
          <Text fontSize={13} fontWeight="800" color="$color" letterSpacing={0.5}>
            {t('recentTx').toUpperCase()}
          </Text>
          <YStack bg="$cardBackground" br="$md" borderWidth={1} borderColor="$borderColor" overflow="hidden">
            {transactions.slice(0, 4).map((tx, idx) => (
              <YStack key={tx.id}>
                {idx > 0 && <Separator borderColor="$borderColor" />}
                <XStack p="$3" ai="center" jc="space-between">
                  <XStack ai="center" gap="$2">
                    <Text fontSize={18}>
                      {tx.category === 'Deposit' ? '💰' : tx.category === 'Food & Drinks' ? '🍔' : tx.category === 'Shopping' ? '🛍️' : '📚'}
                    </Text>
                    <YStack>
                      <Text fontSize={11} fontWeight="800" color="$color">{tx.merchant}</Text>
                      <Text fontSize={9} color="$textTertiary">{tx.user} · {tx.time}</Text>
                    </YStack>
                  </XStack>
                  <YStack ai="flex-end">
                    <Text fontSize={12} fontWeight="800" color={tx.amount > 0 ? '$success' : '$color'}>
                      {tx.amount > 0 ? '+' : ''}{formatMoney(tx.amount, currency)}
                    </Text>
                    <Text fontSize={8} bg={tx.status === 'Completed' ? '$successBg' : '$dangerBg'} color={tx.status === 'Completed' ? '$success' : '$danger'} px="$1.5" py="$0.2" br="$sm" fontWeight="700">
                      {tx.status}
                    </Text>
                  </YStack>
                </XStack>
              </YStack>
            ))}
          </YStack>
        </YStack>
      </YStack>

      {/* SAMA SECURE OTP / PIN VERIFICATION OVERLAY SHEET */}
      <Sheet
        modal
        open={showPinSheet}
        onOpenChange={(open) => {
          if (!open) {
            setShowPinSheet(false);
            setParentSubScreen(null);
          }
        }}
        snapPoints={[45]}
        dismissOnSnapToBottom
      >
        <Sheet.Frame p="$4" bg="$cardBackground" gap="$3">
          <Sheet.Handle />
          <YStack ai="center" gap="$2" py="$2">
            <Lock size={32} color="#059669" />
            <Text fontSize={15} fontWeight="800" color="$color">
              {t('otpTitle')}
            </Text>
            <Text fontSize={11} color="$textSecondary" textAlign="center">
              Please enter your 4-digit Parent authorization PIN to authenticate and settle this SAMA electronic transfer.
            </Text>
          </YStack>

          <XStack ai="center" jc="center" gap="$2" py="$2">
            <Input
              value={pinCode}
              onChangeText={setPinCode}
              keyboardType="number-pad"
              secureTextEntry
              maxLength={6}
              textAlign="center"
              fontSize={24}
              fontWeight="900"
              letterSpacing={10}
              w={180}
              h={50}
              bg="$background"
              borderColor="$borderColor"
              placeholder="••••"
            />
          </XStack>

          <XStack gap="$2" marginTop="$2">
            <Button size="$md" f={1} bg="$borderColor" onPress={() => { setShowPinSheet(false); setParentSubScreen(null); }}>
              Cancel
            </Button>
            <Button size="$md" f={1.8} bg="#059669" hoverStyle={{ bg: '#10B981' }} onPress={handleApprove}>
              Verify & Approve (SAMA) ✓
            </Button>
          </XStack>
        </Sheet.Frame>
        <Sheet.Overlay />
      </Sheet>

      {/* SEND REWARD / PRAISE SHEET */}
      <Sheet
        modal
        open={showPraiseSheet}
        onOpenChange={setShowPraiseSheet}
        snapPoints={[50]}
        dismissOnSnapToBottom
      >
        <Sheet.Frame p="$4" bg="$cardBackground" gap="$3">
          <Sheet.Handle />
          <YStack ai="center" gap="$2" py="$2">
            <Award size={32} color="#D97706" />
            <Text fontSize={15} fontWeight="800" color="$color">
              Send Appreciation & Milestone Reward
            </Text>
            <Text fontSize={11} color="$textSecondary">
              Appreciate {currentSelectedChild.shortName}'s financial discipline by sending praise and a cash wallet booster.
            </Text>
          </YStack>

          <YStack gap="$2">
            <Text fontSize={11} fontWeight="700">Appreciation Message</Text>
            <Input 
              value={praiseText} 
              onChangeText={setPraiseText}
              bg="$background"
              borderColor="$borderColor"
            />

            <Text fontSize={11} fontWeight="700">Milestone Cash Reward (SAR)</Text>
            <Input 
              value={rewardAmount} 
              onChangeText={setRewardAmount}
              keyboardType="decimal-pad"
              bg="$background"
              borderColor="$borderColor"
            />
          </YStack>

          <XStack gap="$2" marginTop="$3">
            <Button size="$md" f={1} bg="$borderColor" onPress={() => setShowPraiseSheet(false)}>
              Cancel
            </Button>
            <Button size="$md" f={1.8} bg="#D97706" hoverStyle={{ bg: '#F59E0B' }} onPress={handleSendPraise}>
              Send Reward & Praise ⭐
            </Button>
          </XStack>
        </Sheet.Frame>
        <Sheet.Overlay />
      </Sheet>
    </ScrollView>
  );
}
export { ParentDashboardScreen };
