// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator, Progress } from 'tamagui';
import { Target, Award, ArrowUpRight } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';

export default function ParentSavingsScreen() {
  const { children, currency, boostSavingsGoal, parent } = useAppStore();

  const handleBoost = (childId: string, amount: number) => {
    boostSavingsGoal(childId, amount);
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor">
        <Text fontSize={15} fontWeight="800" color="$color">
          Family Savings Goals (02.8)
        </Text>
        <Text fontSize={10} color="$textSecondary">
          Monitor and boost your children's saving targets from the family vault
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* Vault balance card */}
        <Card p="$4" bg="$parentPrimarySubtle" br="$lg" borderWidth={1} borderColor="$parentPrimaryBorder">
          <XStack jc="space-between" ai="center">
            <YStack>
              <Text fontSize={10} color="$parentPrimary" fontWeight="800" letterSpacing={0.5}>
                AVAILABLE FUNDING SOURCE
              </Text>
              <Text fontSize={18} fontWeight="900" color="$parentPrimary" marginTop="$1">
                {parent.bankName}
              </Text>
            </YStack>
            <YStack ai="flex-end">
              <Text fontSize={9} color="$textSecondary">Vault Balance</Text>
              <Text fontSize={14} fontWeight="800" color="$color">
                {formatMoney(parent.availableBalance, currency)}
              </Text>
            </YStack>
          </XStack>
        </Card>

        {/* Children Goal Tracker cards */}
        {children.map((c) => (
          <Card key={c.id} p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3.5">
            {/* Child Profile Info Header */}
            <XStack jc="space-between" ai="center">
              <XStack ai="center" gap="$3">
                <Text fontSize={24}>{c.avatar}</Text>
                <YStack>
                  <Text fontSize={13} fontWeight="800" color="$color">{c.name}</Text>
                  <Text fontSize={10} color="$textSecondary">Child Balance: {formatMoney(c.balance, currency)}</Text>
                </YStack>
              </XStack>
              
              {c.savingsGoal && c.savingsGoal.saved >= c.savingsGoal.target ? (
                <XStack bg="$successBg" px="$2.5" py="$0.5" br="$full" ai="center" gap="$1">
                  <Award size={10} color="$success" />
                  <Text fontSize={9} fontWeight="800" color="$success">Goal Achieved!</Text>
                </XStack>
              ) : c.savingsGoal && c.savingsGoal.recentMilestone ? (
                <XStack bg="$warningBg" px="$2.5" py="$0.5" br="$full" ai="center" gap="$1">
                  <Target size={10} color="$warning" />
                  <Text fontSize={9} fontWeight="800" color="$warning">Milestone Reached</Text>
                </XStack>
              ) : null}
            </XStack>

            <Separator borderColor="$borderColor" />

            {/* Savings Goal Workbench */}
            {c.savingsGoal ? (
              <YStack gap="$3">
                <YStack gap="$1.5">
                  <XStack jc="space-between" ai="center">
                    <Text fontSize={11} color="$textSecondary">ACTIVE TARGET</Text>
                    <Text fontSize={12} fontWeight="800" color="$color">{c.savingsGoal.name}</Text>
                  </XStack>

                  <Progress value={(c.savingsGoal.saved / c.savingsGoal.target) * 100} size="$sm" marginTop="$1">
                    <Progress.Indicator bg={c.color} />
                  </Progress>

                  <XStack jc="space-between" ai="center" marginTop="$1">
                    <YStack>
                      <Text fontSize={9} color="$textTertiary">Saved</Text>
                      <Text fontSize={11} fontWeight="800" color="$color">
                        {formatMoney(c.savingsGoal.saved, currency)}
                      </Text>
                    </YStack>
                    <YStack ai="center">
                      <Text fontSize={9} color="$textTertiary">Progress</Text>
                      <Text fontSize={11} fontWeight="800" color="$color">
                        {Math.round((c.savingsGoal.saved / c.savingsGoal.target) * 100)}%
                      </Text>
                    </YStack>
                    <YStack ai="flex-end">
                      <Text fontSize={9} color="$textTertiary">Target</Text>
                      <Text fontSize={11} fontWeight="800" color="$color">
                        {formatMoney(c.savingsGoal.target, currency)}
                      </Text>
                    </YStack>
                  </XStack>
                </YStack>

                <Separator borderColor="$borderColor" />

                {/* Boost Actions */}
                <YStack gap={8}>
                  <Text fontSize={10} fontWeight="800" color="$textSecondary" letterSpacing={0.5}>
                    🚀 BOOST SAVINGS FROM FAMILY VAULT
                  </Text>
                  
                  <XStack gap="$2">
                    <Button 
                      size="$sm" 
                      f={1} 
                      bg="$parentPrimarySubtle" 
                      borderColor="$parentPrimaryBorder" 
                      borderWidth={1} 
                      onPress={() => handleBoost(c.id, 20)}
                    >
                      <Text fontSize={11} color="$parentPrimary" fontWeight="800">+ SAR 20</Text>
                    </Button>
                    <Button 
                      size="$sm" 
                      f={1} 
                      bg="$parentPrimarySubtle" 
                      borderColor="$parentPrimaryBorder" 
                      borderWidth={1} 
                      onPress={() => handleBoost(c.id, 50)}
                    >
                      <Text fontSize={11} color="$parentPrimary" fontWeight="800">🚀 Boost 50</Text>
                    </Button>
                    <Button 
                      size="$sm" 
                      f={1} 
                      bg="$parentPrimarySubtle" 
                      borderColor="$parentPrimaryBorder" 
                      borderWidth={1} 
                      onPress={() => handleBoost(c.id, 100)}
                    >
                      <Text fontSize={11} color="$parentPrimary" fontWeight="800">+ SAR 100</Text>
                    </Button>
                  </XStack>
                </YStack>
              </YStack>
            ) : (
              <Text fontSize={11} color="$textTertiary" fontStyle="italic" textAlign="center" py="$2">
                No active savings goal configured.
              </Text>
            )}
          </Card>
        ))}
      </YStack>
    </ScrollView>
  );
}
export { ParentSavingsScreen };
