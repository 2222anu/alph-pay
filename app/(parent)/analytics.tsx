// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator, Progress } from 'tamagui';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';
import { DonutChart } from '../../components/DonutChart';

export default function ParentAnalyticsScreen() {
  const {
    analytics,
    analyticsPeriod,
    setAnalyticsPeriod,
    selectedAnalyticsChild,
    setSelectedAnalyticsChild,
    currency,
    children
  } = useAppStore();

  const periodStats = analytics[analyticsPeriod] || analytics.weekly;

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor">
        <Text fontSize={15} fontWeight="800" color="$color">
          {t('spendingAnalytics')}
        </Text>
        <Text fontSize={10} color="$textSecondary">
          Granular family and child-wise transaction analysis
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* Period selection */}
        <XStack bg="$cardBackground" p="$1" br="$md" borderWidth={1} borderColor="$borderColor">
          {(['weekly', 'monthly', 'yearly'] as const).map(p => (
            <Button 
              key={p} 
              f={1}
              size="$sm"
              bg={analyticsPeriod === p ? '$parentPrimary' : 'transparent'}
              onPress={() => setAnalyticsPeriod(p)}
            >
              <Text fontSize={11} color={analyticsPeriod === p ? 'white' : '$textSecondary'} fontWeight="700">
                {p.toUpperCase()}
              </Text>
            </Button>
          ))}
        </XStack>

        {/* Child selection tabs */}
        <XStack gap="$2" fw="wrap">
          <Button 
            size="$xs"
            bg={selectedAnalyticsChild === 'all' ? '$parentPrimary' : '$cardBackground'}
            borderColor={selectedAnalyticsChild === 'all' ? 'transparent' : '$borderColor'}
            borderWidth={1}
            onPress={() => setSelectedAnalyticsChild('all')}
          >
            <Text fontSize={10} color={selectedAnalyticsChild === 'all' ? 'white' : '$textSecondary'} fontWeight="700">
              🌐 All Family
            </Text>
          </Button>
          {children.map(c => (
            <Button 
              key={c.id}
              size="$xs"
              bg={selectedAnalyticsChild === c.id ? '$parentPrimary' : '$cardBackground'}
              borderColor={selectedAnalyticsChild === c.id ? 'transparent' : '$borderColor'}
              borderWidth={1}
              onPress={() => setSelectedAnalyticsChild(c.id)}
            >
              <Text fontSize={10} color={selectedAnalyticsChild === c.id ? 'white' : '$textSecondary'} fontWeight="700">
                {c.avatar} {c.shortName}
              </Text>
            </Button>
          ))}
        </XStack>

        {/* Donut Chart visual card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$4">
          <XStack ai="center" jc="center" h={160} gap="$4">
            <YStack w={130} h={130}>
              <DonutChart period={analyticsPeriod} selChild={selectedAnalyticsChild} />
            </YStack>

            <YStack f={1} gap="$2">
              <Text fontSize={10} color="$textTertiary">TOTAL POSITION</Text>
              <Text fontSize={20} fontWeight="900" color="$color">
                {formatMoney(periodStats.totalSpent, currency)}
              </Text>
              <Text fontSize={10} color="$textSecondary">
                Out of {formatMoney(periodStats.totalAllocated, currency)} allocated
              </Text>
            </YStack>
          </XStack>
        </Card>

        {/* Category lists card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <Text fontSize={12} fontWeight="800" color="$color">
            Category Breakdown
          </Text>
          
          <YStack gap="$3">
            {periodStats.categorySpending.map((item: any) => (
              <YStack key={item.name} gap="$1">
                <XStack jc="space-between" ai="center">
                  <XStack ai="center" gap="$2">
                    <Text fontSize={14}>{item.icon}</Text>
                    <Text fontSize={12} fontWeight="700" color="$color">{item.name}</Text>
                  </XStack>
                  <YStack ai="flex-end">
                    <Text fontSize={11} fontWeight="800" color="$color">
                      {formatMoney(item.amount, currency)}
                    </Text>
                    <Text fontSize={9} color="$textSecondary">{item.percentage}%</Text>
                  </YStack>
                </XStack>
                <Progress value={item.percentage} size="$xs">
                  <Progress.Indicator bg={item.color} />
                </Progress>
              </YStack>
            ))}
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
}
