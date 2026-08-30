// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator, Select } from 'tamagui';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ParentTransactionsScreen() {
  const {
    transactions,
    currency,
    txFilters,
    setTxFilters,
    children
  } = useAppStore();

  // Apply filters
  const filteredTx = transactions.filter(tx => {
    // Child filter
    if (txFilters.child !== 'all') {
      // Find matching child id
      if (tx.childId !== txFilters.child) return false;
    }
    // Status filter
    if (txFilters.status !== 'all') {
      if (tx.status.toLowerCase() !== txFilters.status.toLowerCase()) return false;
    }
    // Category filter
    if (txFilters.category !== 'all') {
      if (tx.category.toLowerCase() !== txFilters.category.toLowerCase()) return false;
    }
    return true;
  });

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor" gap="$2">
        <Text fontSize={15} fontWeight="800" color="$color">
          {t('recentTx')}
        </Text>
        <Text fontSize={10} color="$textSecondary">
          Immutable SAMA audit ledger for child cards spending and transfers
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* Filter selectors card */}
        <Card p="$3" bg="$cardBackground" br="$md" borderWidth={1} borderColor="$borderColor" gap="$2">
          <Text fontSize={11} fontWeight="800" color="$textSecondary">Ledger Filter Tools</Text>
          <XStack gap="$2" fw="wrap">
            {/* Child filter */}
            <Select 
              value={txFilters.child} 
              onValueChange={(val) => setTxFilters({ child: val })}
            >
              <Select.Trigger size="$sm" w={110} bg="$background" borderColor="$borderColor">
                <Select.Value placeholder="Child" />
              </Select.Trigger>
              <Select.Content>
                <Select.Viewport>
                  <Select.Group>
                    <Select.Item index={0} value="all">All Kids</Select.Item>
                    {children.map((c, i) => (
                      <Select.Item key={c.id} index={i + 1} value={c.id}>{c.shortName}</Select.Item>
                    ))}
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select>

            {/* Status filter */}
            <Select 
              value={txFilters.status} 
              onValueChange={(val) => setTxFilters({ status: val })}
            >
              <Select.Trigger size="$sm" w={100} bg="$background" borderColor="$borderColor">
                <Select.Value placeholder="Status" />
              </Select.Trigger>
              <Select.Content>
                <Select.Viewport>
                  <Select.Group>
                    <Select.Item index={0} value="all">All Status</Select.Item>
                    <Select.Item index={1} value="completed">Completed</Select.Item>
                    <Select.Item index={2} value="blocked">Blocked</Select.Item>
                    <Select.Item index={3} value="pending">Pending</Select.Item>
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select>

            {/* Category filter */}
            <Select 
              value={txFilters.category} 
              onValueChange={(val) => setTxFilters({ category: val })}
            >
              <Select.Trigger size="$sm" w={110} bg="$background" borderColor="$borderColor">
                <Select.Value placeholder="Category" />
              </Select.Trigger>
              <Select.Content>
                <Select.Viewport>
                  <Select.Group>
                    <Select.Item index={0} value="all">All Categories</Select.Item>
                    <Select.Item index={1} value="food & drinks">Food & Drinks</Select.Item>
                    <Select.Item index={2} value="education & books">Education</Select.Item>
                    <Select.Item index={3} value="shopping">Shopping</Select.Item>
                    <Select.Item index={4} value="gaming">Gaming</Select.Item>
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select>
          </XStack>
        </Card>

        {/* Transaction list */}
        {filteredTx.length === 0 ? (
          <Card p="$6" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" ai="center" jc="center">
            <Text fontSize={12} color="$textSecondary">No matching transactions found.</Text>
          </Card>
        ) : (
          <YStack bg="$cardBackground" br="$md" borderWidth={1} borderColor="$borderColor" overflow="hidden">
            {filteredTx.map((tx, idx) => (
              <YStack key={tx.id}>
                {idx > 0 && <Separator borderColor="$borderColor" />}
                <XStack p="$3.5" ai="center" jc="space-between">
                  <XStack ai="center" gap="$3">
                    <Text fontSize={18}>
                      {tx.category === 'Deposit' ? '💰' : tx.category === 'Food & Drinks' ? '🍔' : tx.category === 'Shopping' ? '🛍️' : tx.category === 'Gaming' ? '🎮' : '📚'}
                    </Text>
                    <YStack>
                      <Text fontSize={12} fontWeight="800" color="$color">{tx.merchant}</Text>
                      <Text fontSize={10} color="$textTertiary">{tx.user} · {tx.time}</Text>
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
export { ParentTransactionsScreen };
