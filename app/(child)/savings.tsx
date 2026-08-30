// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Card, ScrollView, Separator, Progress, Button } from 'tamagui';
import { Target, Award, ArrowLeft, ArrowUpRight } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { useRouter } from 'expo-router';

export default function ChildSavingsScreen() {
  const router = useRouter();
  const { children, selectedChildId, currency, transactions } = useAppStore();
  const child = children.find(c => c.id === selectedChildId) || children[0];

  const savingsTx = transactions.filter(t => t.childId === child.id && (t.category === 'Savings' || t.category === 'Deposit'));

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header */}
      <XStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor" ai="center" gap="$3">
        <Button size="$sm" circular bg="$background" borderWidth={1} borderColor="$borderColor" onPress={() => router.back()}>
          <ArrowLeft size={16} color="#64748B" />
        </Button>
        <YStack>
          <Text fontSize={15} fontWeight="800" color="$color">
            My Savings Goal (C03.1)
          </Text>
          <Text fontSize={10} color="$textSecondary">
            Track your milestones and check out pocket money rewards
          </Text>
        </YStack>
      </XStack>

      <YStack p="$4" gap="$4">
        {/* Goal Detail Card */}
        {child.savingsGoal ? (
          <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$4">
            <XStack jc="space-between" ai="center">
              <YStack gap="$1">
                <Text fontSize={10} color="$textTertiary">MY GOAL TARGET</Text>
                <Text fontSize={18} fontWeight="900" color="$color">{child.savingsGoal.name}</Text>
              </YStack>
              <YStack bg="$childPrimarySubtle" w={40} h={40} br={20} ai="center" jc="center">
                <Target size={20} color="$childPrimary" />
              </YStack>
            </XStack>

            <Progress value={(child.savingsGoal.saved / child.savingsGoal.target) * 100} size="$sm" marginTop="$2">
              <Progress.Indicator bg={child.color} />
            </Progress>

            <XStack jc="space-between" ai="center">
              <YStack>
                <Text fontSize={9} color="$textTertiary">Saved So Far</Text>
                <Text fontSize={14} fontWeight="900" color={child.color}>
                  {formatMoney(child.savingsGoal.saved, currency)}
                </Text>
              </YStack>
              <YStack ai="center">
                <Text fontSize={9} color="$textTertiary">Progress</Text>
                <Text fontSize={14} fontWeight="900" color="$color">
                  {Math.round((child.savingsGoal.saved / child.savingsGoal.target) * 100)}%
                </Text>
              </YStack>
              <YStack ai="flex-end">
                <Text fontSize={9} color="$textTertiary">Target Goal</Text>
                <Text fontSize={14} fontWeight="900" color="$color">
                  {formatMoney(child.savingsGoal.target, currency)}
                </Text>
              </YStack>
            </XStack>

            <Separator borderColor="$borderColor" />

            <XStack jc="space-between" ai="center">
              <Text fontSize={11} color="$textSecondary" fontWeight="600">Remaining to Saved Target:</Text>
              <Text fontSize={12} fontWeight="800" color="$color">
                {formatMoney(child.savingsGoal.remaining, currency)}
              </Text>
            </XStack>

            {child.savingsGoal.saved >= child.savingsGoal.target ? (
              <YStack bg="$successBg" p="$3" br="$md" ai="center" gap="$1" borderStyle="dashed" borderWidth={1} borderColor="$success">
                <Text fontSize={20}>🎉</Text>
                <Text fontSize={12} fontWeight="800" color="$success">Congratulations!</Text>
                <Text fontSize={10} color="$textSecondary" textAlign="center">
                  You have successfully reached your target for "{child.savingsGoal.name}"!
                </Text>
              </YStack>
            ) : child.savingsGoal.recentMilestone ? (
              <YStack bg="$warningBg" p="$3" br="$md" ai="center" gap="$1">
                <Award size={20} color="$warning" />
                <Text fontSize={12} fontWeight="800" color="$warning">Recent Milestone Reached!</Text>
                <Text fontSize={10} color="$textSecondary" textAlign="center">
                  You are saving responsibly! Dad noticed and boosted your milestone.
                </Text>
              </YStack>
            ) : null}
          </Card>
        ) : (
          <Card p="$6" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" ai="center" jc="center">
            <Text fontSize={12} color="$textTertiary" fontStyle="italic">No active savings goal configured.</Text>
          </Card>
        )}

        {/* Savings History Log */}
        <YStack gap="$2">
          <Text fontSize={12} fontWeight="800" color="$textSecondary" letterSpacing={0.5}>
            SAVINGS & REWARDS HISTORY
          </Text>

          <Card bg="$cardBackground" br="$md" borderWidth={1} borderColor="$borderColor" overflow="hidden">
            {savingsTx.length === 0 ? (
              <Text fontSize={11} color="$textTertiary" fontStyle="italic" p="$4" textAlign="center">
                No savings deposits or goal boosts recorded yet.
              </Text>
            ) : (
              savingsTx.map((tx, idx) => (
                <YStack key={tx.id}>
                  {idx > 0 && <Separator borderColor="$borderColor" />}
                  <XStack p="$3.5" ai="center" jc="space-between">
                    <XStack ai="center" gap="$2.5">
                      <YStack bg="$warningBg" w={28} h={28} br={14} ai="center" jc="center">
                        <ArrowUpRight size={14} color="$warning" />
                      </YStack>
                      <YStack>
                        <Text fontSize={12} fontWeight="800" color="$color">{tx.merchant}</Text>
                        <Text fontSize={9} color="$textTertiary">{tx.time}</Text>
                      </YStack>
                    </XStack>
                    <Text fontSize={12} fontWeight="900" color="$success">
                      + {formatMoney(Math.abs(tx.amount), currency)}
                    </Text>
                  </XStack>
                </YStack>
              ))
            )}
          </Card>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
export { ChildSavingsScreen };
