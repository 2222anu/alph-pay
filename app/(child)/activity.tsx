// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Card, ScrollView, Separator } from 'tamagui';
import { TrendingDown, Calendar, RefreshCcw } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ChildActivityScreen() {
  const {
    transactions,
    currency,
    selectedChildId,
    children
  } = useAppStore();

  const child = children.find(c => c.id === selectedChildId) || children[0];

  // Filter child transactions
  const childTx = transactions.filter(t => t.childId === child.id);

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor">
        <Text fontSize={15} fontWeight="800" color="$color">
          My Purchases Ledger (C10)
        </Text>
        <Text fontSize={10} color="$textSecondary">
          List of card expenditures and allowances received
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* Cumulative metric card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$1">
          <Text fontSize={10} color="$textSecondary" fontWeight="800">
            SPENT THIS MONTH
          </Text>
          <Text fontSize={24} fontWeight="900" color={child.color}>
            {formatMoney(child.spentThisMonth, currency)}
          </Text>
          <Text fontSize={9} color="$textTertiary">
            Out of {formatMoney(child.monthlyLimit, currency)} monthly cap limit
          </Text>
        </Card>

        {/* Transaction list */}
        {childTx.length === 0 ? (
          <Card p="$6" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" ai="center" jc="center">
            <Text fontSize={12} color="$textSecondary">No purchases made yet.</Text>
          </Card>
        ) : (
          <YStack bg="$cardBackground" br="$md" borderWidth={1} borderColor="$borderColor" overflow="hidden">
            {childTx.map((tx, idx) => (
              <YStack key={tx.id}>
                {idx > 0 && <Separator borderColor="$borderColor" />}
                <XStack p="$3.5" ai="center" jc="space-between">
                  <XStack ai="center" gap={12}>
                    <Text fontSize={18}>
                      {tx.category === 'Deposit' ? '💰' : tx.category === 'Food & Drinks' ? '🍔' : tx.category === 'Shopping' ? '🛍️' : tx.category === 'Gaming' ? '🎮' : '📚'}
                    </Text>
                    <YStack>
                      <Text fontSize={12} fontWeight="800" color="$color">{tx.merchant}</Text>
                      <Text fontSize={10} color="$textTertiary">{tx.time}</Text>
                    </YStack>
                  </XStack>
                  <YStack ai="flex-end" gap="$1">
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
        )}
      </YStack>
    </ScrollView>
  );
}
export { ChildActivityScreen };
