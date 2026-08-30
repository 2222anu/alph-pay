// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Card, ScrollView, Separator } from 'tamagui';
import { ShieldCheck, Calendar, RefreshCcw, Lock, AlertTriangle } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ChildWalletScreen() {
  const {
    children,
    selectedChildId,
    currency,
    language
  } = useAppStore();

  const child = children.find(c => c.id === selectedChildId) || children[0];

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor">
        <Text fontSize={15} fontWeight="800" color="$color">
          Digital Wallet & Policies (C03)
        </Text>
        <Text fontSize={10} color="$textSecondary">
          View active spending guardrails and policy restrictions
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* Transparent Policy Card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3.5">
          <XStack ai="center" gap="$2.5">
            <ShieldCheck size={18} color={child.color} />
            <Text fontSize={13} fontWeight="800" color="$color">
              Active Spending Policy
            </Text>
          </XStack>

          <Separator borderColor="$borderColor" />

          {/* Limits list */}
          <YStack gap="$3">
            <XStack jc="space-between" ai="center">
              <YStack>
                <Text fontSize={11} fontWeight="700" color="$color">Daily Spend Limit</Text>
                <Text fontSize={9} color="$textSecondary">Refreshes every night</Text>
              </YStack>
              <Text fontSize={12} fontWeight="800" color="$color">
                {formatMoney(child.dailyLimit, currency)}
              </Text>
            </XStack>

            <Separator borderColor="$borderColor" />

            <XStack jc="space-between" ai="center">
              <YStack>
                <Text fontSize={11} fontWeight="700" color="$color">Daily Transaction Limit</Text>
                <Text fontSize={9} color="$textSecondary">Maximum purchases allowed</Text>
              </YStack>
              <Text fontSize={12} fontWeight="800" color="$color">
                {child.dailyTxCountLimit} tx / day
              </Text>
            </XStack>

            <Separator borderColor="$borderColor" />

            <XStack jc="space-between" ai="center">
              <YStack>
                <Text fontSize={11} fontWeight="700" color="$color">Monthly Total Cap</Text>
                <Text fontSize={9} color="$textSecondary">Monthly budget allowance</Text>
              </YStack>
              <Text fontSize={12} fontWeight="800" color="$color">
                {formatMoney(child.monthlyLimit, currency)}
              </Text>
            </XStack>
          </YStack>
        </Card>

        {/* Restricted Categories Card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <XStack ai="center" gap="$2.5">
            <Lock size={16} color="#DC2626" />
            <Text fontSize={12} fontWeight="800" color="$color">
              Restricted Categories
            </Text>
          </XStack>
          <Text fontSize={10} color="$textSecondary">
            Transactions matching these classifications require explicit real-time parent approval.
          </Text>

          <XStack gap="$1.5" fw="wrap" marginTop="$1">
            {child.blockedCategories.map(cat => (
              <XStack key={cat} bg="$dangerBg" borderColor="$danger" borderWidth={1} px="$2" py="$1" br="$sm" ai="center">
                <Text fontSize={9} color="$danger" fontWeight="700">🚫 {cat}</Text>
              </XStack>
            ))}
          </XStack>
        </Card>

        {/* Blocked Merchants Card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <XStack ai="center" gap="$2.5">
            <AlertTriangle size={16} color="#DC2626" />
            <Text fontSize={12} fontWeight="800" color="$color">
              Blocked Merchants
            </Text>
          </XStack>
          <Text fontSize={10} color="$textSecondary">
            These specific shops are blacklisted by your parent.
          </Text>

          <XStack gap="$1.5" fw="wrap" marginTop="$1">
            {child.blockedMerchants.length === 0 ? (
              <Text fontSize={10} color="$textTertiary" fontStyle="italic">No blacklisted merchants</Text>
            ) : (
              child.blockedMerchants.map(m => (
                <XStack key={m} bg="$dangerBg" borderColor="$danger" borderWidth={1} px="$2" py="$1" br="$sm" ai="center">
                  <Text fontSize={9} color="$danger" fontWeight="700">🚫 {m}</Text>
                </XStack>
              ))
            )}
          </XStack>
        </Card>
      </YStack>
    </ScrollView>
  );
}
export { ChildWalletScreen };
