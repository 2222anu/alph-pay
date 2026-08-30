// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator, Input, Switch, Progress } from 'tamagui';
import { Shield, Sparkles, TrendingUp, DollarSign, Calendar, Edit, ShieldAlert, Award, Plus, Trash } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ParentChildrenScreen() {
  const {
    children,
    selectedChildId,
    setSelectedChildId,
    currency,
    boostSavingsGoal,
    allocateAllowance,
    updateSpendingControls,
    parent,
    activeParentSubScreen,
    setParentSubScreen
  } = useAppStore();

  const currentChild = children.find(c => c.id === selectedChildId) || children[0];

  // Forms states
  const [allowanceAmount, setAllowanceAmount] = useState(currentChild.allowanceAmount.toString());
  const [allowanceFreq, setAllowanceFreq] = useState(currentChild.allowanceFreq);
  const [dailyLimit, setDailyLimit] = useState(currentChild.dailyLimit.toString());
  const [txCountLimit, setTxCountLimit] = useState(currentChild.dailyTxCountLimit.toString());
  const [monthlyLimit, setMonthlyLimit] = useState(currentChild.monthlyLimit.toString());
  const [blockedCats, setBlockedCats] = useState<string[]>(currentChild.blockedCategories);
  const [blockedMerchants, setBlockedMerchants] = useState<string[]>(currentChild.blockedMerchants);
  const [newMerchant, setNewMerchant] = useState('');

  // Sync inputs on child selection change
  useEffect(() => {
    setAllowanceAmount(currentChild.allowanceAmount.toString());
    setAllowanceFreq(currentChild.allowanceFreq);
    setDailyLimit(currentChild.dailyLimit.toString());
    setTxCountLimit(currentChild.dailyTxCountLimit.toString());
    setMonthlyLimit(currentChild.monthlyLimit.toString());
    setBlockedCats(currentChild.blockedCategories);
    setBlockedMerchants(currentChild.blockedMerchants);
  }, [selectedChildId, children]);

  // Support tour highlights by checking active sub-screen state
  useEffect(() => {
    if (activeParentSubScreen === 'allowance') {
      // Just keep focus on allowance tab
    }
  }, [activeParentSubScreen]);

  const handleBoost = (amount: number) => {
    boostSavingsGoal(currentChild.id, amount);
  };

  const handleSaveAllowance = () => {
    const amt = parseFloat(allowanceAmount);
    if (isNaN(amt) || amt <= 0) return;
    allocateAllowance(currentChild.id, amt, allowanceFreq);
  };

  const handleSaveControls = () => {
    const dl = parseFloat(dailyLimit);
    const ml = parseFloat(monthlyLimit);
    const tcl = parseInt(txCountLimit, 10);
    if (isNaN(dl) || isNaN(ml) || isNaN(tcl)) return;
    updateSpendingControls(
      currentChild.id,
      currentChild.spendingMode, // keep standard
      dl,
      tcl,
      ml,
      blockedCats,
      blockedMerchants
    );
  };

  const toggleCategoryBlocked = (cat: string) => {
    setBlockedCats(prev => {
      if (prev.includes(cat)) {
        return prev.filter(c => c !== cat);
      } else {
        return [...prev, cat];
      }
    });
  };

  const handleAddMerchant = () => {
    if (!newMerchant.trim()) return;
    setBlockedMerchants(prev => [...prev, newMerchant.trim()]);
    setNewMerchant('');
  };

  const handleRemoveMerchant = (merch: string) => {
    setBlockedMerchants(prev => prev.filter(m => m !== merch));
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* 1. Selector Chips */}
      <XStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor" gap="$2">
        {children.map(c => {
          const isSelected = c.id === selectedChildId;
          return (
            <Button 
              key={c.id}
              size="$sm"
              bg={isSelected ? '$parentPrimary' : '$background'}
              borderColor={isSelected ? 'transparent' : '$borderColor'}
              borderWidth={1}
              onPress={() => setSelectedChildId(c.id)}
            >
              <Text fontSize={12} color={isSelected ? 'white' : '$textSecondary'} fontWeight="700">
                {c.avatar} {c.shortName}
              </Text>
            </Button>
          );
        })}
      </XStack>

      <YStack p="$4" gap="$4">
        {/* ==================== 1. SAVINGS GOAL WORKBENCH ==================== */}
        {currentChild.savingsGoal && (
          <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
            <XStack jc="space-between" ai="center">
              <Text fontSize={13} fontWeight="800" color="$color">
                🎯 {currentChild.shortName}'s Savings Goal
              </Text>
              {currentChild.savingsGoal.recentMilestone && (
                <Text fontSize={9} bg="$successBg" color="$success" px="$2" py="$0.5" br="$full" fontWeight="700">
                  Milestone Reached!
                </Text>
              )}
            </XStack>
            
            <YStack gap="$1">
              <Text fontSize={14} fontWeight="800" color="$color">
                {currentChild.savingsGoal.name}
              </Text>
              <XStack jc="space-between">
                <Text fontSize={11} color="$textSecondary">
                  Saved: {formatMoney(currentChild.savingsGoal.saved, currency)}
                </Text>
                <Text fontSize={11} color="$textSecondary">
                  Target: {formatMoney(currentChild.savingsGoal.target, currency)}
                </Text>
              </XStack>
              <Progress value={(currentChild.savingsGoal.saved / currentChild.savingsGoal.target) * 100} size="$sm" marginTop="$1">
                <Progress.Indicator bg={currentChild.color} />
              </Progress>
            </YStack>

            <Separator borderColor="$borderColor" />

            <YStack gap="$2">
              <Text fontSize={11} fontWeight="700" color="$textSecondary">Boost Child's Savings Goal (+ SAR from Parent Vault)</Text>
              <XStack gap="$2">
                <Button size="$sm" f={1} bg="$parentPrimarySubtle" borderColor="$parentPrimaryBorder" borderWidth={1} onPress={() => handleBoost(20)}>
                  <Text fontSize={11} color="$parentPrimary" fontWeight="700">+ SAR 20</Text>
                </Button>
                <Button size="$sm" f={1} bg="$parentPrimarySubtle" borderColor="$parentPrimaryBorder" borderWidth={1} onPress={() => handleBoost(50)}>
                  <Text fontSize={11} color="$parentPrimary" fontWeight="700">🚀 Boost +50</Text>
                </Button>
                <Button size="$sm" f={1} bg="$parentPrimarySubtle" borderColor="$parentPrimaryBorder" borderWidth={1} onPress={() => handleBoost(100)}>
                  <Text fontSize={11} color="$parentPrimary" fontWeight="700">+ SAR 100</Text>
                </Button>
              </XStack>
            </YStack>
          </Card>
        )}

        {/* ==================== 2. AUTOMATED ALLOWANCE CONFIG ==================== */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <Text fontSize={13} fontWeight="800" color="$color">
            📅 Allowance Settings (04)
          </Text>

          <YStack gap="$2">
            <XStack gap="$3" ai="center">
              <YStack f={1}>
                <Text fontSize={11} fontWeight="700" color="$textSecondary">Allowance Amount (SAR)</Text>
                <Input 
                  value={allowanceAmount}
                  onChangeText={setAllowanceAmount}
                  keyboardType="decimal-pad"
                  bg="$background"
                  borderColor="$borderColor"
                  marginTop="$1"
                />
              </YStack>
              <YStack f={1}>
                <Text fontSize={11} fontWeight="700" color="$textSecondary">Frequency</Text>
                <XStack bg="$background" p="$1" br="$md" borderWidth={1} borderColor="$borderColor" marginTop="$1">
                  {['Daily', 'Weekly', 'Monthly'].map(f => (
                    <Button 
                      key={f}
                      size="$xs"
                      f={1}
                      p={0}
                      bg={allowanceFreq === f ? '$parentPrimary' : 'transparent'}
                      onPress={() => setAllowanceFreq(f)}
                    >
                      <Text fontSize={9} color={allowanceFreq === f ? 'white' : '$textSecondary'} fontWeight="700">
                        {f}
                      </Text>
                    </Button>
                  ))}
                </XStack>
              </YStack>
            </XStack>

            <Button size="$sm" bg="$parentPrimary" hoverStyle={{ bg: '$parentPrimary' }} onPress={handleSaveAllowance} marginTop="$2">
              <Text color="white" fontSize={11} fontWeight="800">Save Allowance Schedule</Text>
            </Button>
          </YStack>
        </Card>

        {/* ==================== 3. SPENDING LIMITS CONFIG ==================== */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <Text fontSize={13} fontWeight="800" color="$color">
            🛡️ Spending Limits & Guardrails (05)
          </Text>

          <YStack gap="$3">
            <YStack>
              <Text fontSize={11} fontWeight="700" color="$textSecondary">Daily Limit (SAR)</Text>
              <Input 
                value={dailyLimit}
                onChangeText={setDailyLimit}
                keyboardType="decimal-pad"
                bg="$background"
                borderColor="$borderColor"
                marginTop="$1"
              />
            </YStack>
            <YStack>
              <Text fontSize={11} fontWeight="700" color="$textSecondary">Max Transactions per Day</Text>
              <Input 
                value={txCountLimit}
                onChangeText={setTxCountLimit}
                keyboardType="number-pad"
                bg="$background"
                borderColor="$borderColor"
                marginTop="$1"
              />
            </YStack>
            <YStack>
              <Text fontSize={11} fontWeight="700" color="$textSecondary">Monthly Cap Limit (SAR)</Text>
              <Input 
                value={monthlyLimit}
                onChangeText={setMonthlyLimit}
                keyboardType="decimal-pad"
                bg="$background"
                borderColor="$borderColor"
                marginTop="$1"
              />
            </YStack>

            <Separator borderColor="$borderColor" />

            {/* ==================== CATEGORIES TOGGLES ==================== */}
            <YStack gap="$2">
              <Text fontSize={11} fontWeight="700" color="$textSecondary">Category Restriction Engine (05.4)</Text>
              {['Gaming', 'Gambling', 'Adult Content', 'Shopping', 'Crypto'].map(cat => {
                const isBlocked = blockedCats.includes(cat);
                return (
                  <XStack key={cat} jc="space-between" ai="center" p="$2" bg="$background" br="$sm">
                    <Text fontSize={11} fontWeight="600" color="$textSecondary">{cat}</Text>
                    <XStack ai="center" gap="$2">
                      <Text fontSize={9} color={isBlocked ? '$danger' : '$success'} fontWeight="700">
                        {isBlocked ? 'Blocked' : 'Allowed'}
                      </Text>
                      <Switch 
                        size="$sm" 
                        checked={!isBlocked} 
                        onCheckedChange={() => toggleCategoryBlocked(cat)}
                      >
                        <Switch.Thumb bg={isBlocked ? '#64748B' : '#0D9488'} />
                      </Switch>
                    </XStack>
                  </XStack>
                );
              })}
            </YStack>

            <Separator borderColor="$borderColor" />

            {/* ==================== MERCHANT BLACKLISTS ==================== */}
            <YStack gap="$2">
              <Text fontSize={11} fontWeight="700" color="$textSecondary">Merchant Blacklist (Epic, Roblox, Steam)</Text>
              <XStack gap="$2">
                <Input 
                  f={1}
                  placeholder="e.g. Steam Games"
                  bg="$background"
                  borderColor="$borderColor"
                  value={newMerchant}
                  onChangeText={setNewMerchant}
                  fontSize={11}
                  h={32}
                />
                <Button size="$sm" bg="$parentPrimary" onPress={handleAddMerchant}>
                  <Text color="white" fontSize={11} fontWeight="700">Add</Text>
                </Button>
              </XStack>
              <XStack gap="$1.5" fw="wrap" marginTop="$1">
                {blockedMerchants.map(m => (
                  <XStack key={m} bg="$dangerBg" borderColor="$danger" borderWidth={1} px="$2" py="$1" br="$sm" ai="center" gap="$1.5">
                    <Text fontSize={9} color="$danger" fontWeight="700">{m}</Text>
                    <Button size="$xs" p={0} bg="transparent" onPress={() => handleRemoveMerchant(m)}>
                      <X size={10} color="#DC2626" />
                    </Button>
                  </XStack>
                ))}
              </XStack>
            </YStack>

            <Button size="$sm" bg="$parentPrimary" hoverStyle={{ bg: '$parentPrimary' }} onPress={handleSaveControls} marginTop="$2">
              <Text color="white" fontSize={11} fontWeight="800">Save Limits & Controls ✓</Text>
            </Button>
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
}
