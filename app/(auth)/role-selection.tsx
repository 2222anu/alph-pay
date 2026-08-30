// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Button, Card, Separator, ScrollView } from 'tamagui';
import { useRouter } from 'expo-router';
import { ShieldCheck, Users, ChevronRight, Lock } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { getAppRegionConfig } from '../../src/constants/Currencies';

export default function RoleSelectionScreen() {
  const router = useRouter();
  const { currency, language, children, setSelectedChildId, parent } = useAppStore();
  const rc = getAppRegionConfig(currency, language);

  const handleParentLogin = () => {
    router.replace('/(parent)/dashboard');
  };

  const handleChildLogin = (childId: string) => {
    setSelectedChildId(childId);
    router.replace('/(child)/home');
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ justifyContent: 'center', minHeight: '100%', paddingVertical: 40 }}>
      <YStack px="$4" gap="$4" maxWidth={500} width="100%" alignSelf="center">
        {/* Branding Header */}
        <YStack ai="center" gap="$2" py="$4">
          <YStack bg="$parentPrimary" p="$3" br="$lg" elevation={4}>
            <Text color="white" fontWeight="900" fontSize={24}>▲</Text>
          </YStack>
          <Text fontSize={22} fontWeight="900" color="$color">AMANAH</Text>
          <Text fontSize={12} color="$textSecondary" textAlign="center" px="$4">
            Trust • Responsibility • Protection
          </Text>
        </YStack>

        <YStack ai="center" gap="$1" py="$2">
          <Text fontSize={18} fontWeight="800" color="$color">Select Your Profile</Text>
          <Text fontSize={11} color="$textSecondary">Choose a workspace role to proceed</Text>
        </YStack>

        {/* Parental access portal */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <XStack ai="center" gap="$2.5">
            <ShieldCheck size={20} color="#4338CA" />
            <Text fontSize={14} fontWeight="800" color="$color">
              Guardian Governance Portal
            </Text>
          </XStack>
          <Text fontSize={11} color="$textSecondary">
            Manage allowances, configure limits & approve transaction requests for {parent.name}.
          </Text>

          <Button size="$md" bg="$parentPrimary" hoverStyle={{ bg: '$parentPrimaryHover' }} onPress={handleParentLogin} icon={Lock}>
            <Text color="white" fontSize={12} fontWeight="800">
              Enter Guardian Dashboard →
            </Text>
          </Button>
        </Card>

        <Separator borderColor="$borderColor" />

        {/* Children access portal */}
        <YStack gap="$2.5">
          <XStack ai="center" gap="$2" px="$1">
            <Users size={16} color="#0D9488" />
            <Text fontSize={12} fontWeight="800" color="$textSecondary" letterSpacing={0.5}>
              YOUTH CARD ACCOUNTS
            </Text>
          </XStack>

          <YStack gap="$2">
            {children.map(c => (
              <Card 
                key={c.id}
                p="$3.5" 
                bg="$cardBackground" 
                br="$md" 
                borderWidth={1} 
                borderColor="$borderColor"
                onPress={() => handleChildLogin(c.id)}
                cursor="pointer"
                hoverStyle={{ borderColor: '$childPrimary' }}
              >
                <XStack jc="space-between" ai="center">
                  <XStack ai="center" gap="$3">
                    <Text fontSize={22}>{c.avatar}</Text>
                    <YStack>
                      <Text fontSize={13} fontWeight="800" color="$color">{c.name}</Text>
                      <Text fontSize={10} color="$textSecondary">Age {c.age} · Available: {c.avatar} Tap to Pay</Text>
                    </YStack>
                  </XStack>
                  <ChevronRight size={14} color="#94A3B8" />
                </XStack>
              </Card>
            ))}
          </YStack>
        </YStack>

        <Button size="$sm" bg="transparent" onPress={() => router.replace('/(auth)/login')}>
          <Text color="$textSecondary" fontSize={11} fontWeight="600">← Back to Login</Text>
        </Button>
      </YStack>
    </ScrollView>
  );
}
