// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Button, Card, Separator } from 'tamagui';
import { useRouter } from 'expo-router';
import { ShieldCheck, User, Users, ChevronRight, Lock } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { getAppRegionConfig } from '../../src/constants/Currencies';

export default function LoginScreen() {
  const router = useRouter();
  const { currency, language, children, setSelectedChildId } = useAppStore();
  const rc = getAppRegionConfig(currency, language);

  const handleParentLogin = () => {
    router.replace('/(auth)/role-selection');
  };

  const handleChildLogin = (childId: string) => {
    setSelectedChildId(childId);
    router.replace('/(auth)/role-selection');
  };

  return (
    <YStack f={1} bg="$background" px="$4" jc="center" gap="$4">
      {/* Branding */}
      <YStack ai="center" gap="$2" py="$4">
        <YStack bg="$parentPrimary" p="$3" br="$lg" elevation={4}>
          <Text color="white" fontWeight="900" fontSize={24}>▲</Text>
        </YStack>
        <Text fontSize={24} fontWeight="900" color="$color">AMANAH</Text>
        <Text fontSize={11} color="$textSecondary" textAlign="center" px="$4">
          Trust • Responsibility • Protection · SAMA Sovereign youth banking rules engine
        </Text>
      </YStack>

      {/* Parental access SSO card */}
      <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
        <XStack ai="center" gap="$2.5">
          <ShieldCheck size={20} color="#4338CA" />
          <Text fontSize={14} fontWeight="800" color="$color">
            Guardian Governance Portal
          </Text>
        </XStack>
        <Text fontSize={11} color="$textSecondary">
          Sign in securely using the National Single Sign-On (Nafath) network.
        </Text>

        <Button size="$md" bg="$parentPrimary" hoverStyle={{ bg: '$parentPrimaryHover' }} onPress={handleParentLogin} icon={Lock}>
          <Text color="white" fontSize={12} fontWeight="800">
            Verify with Nafath Portal →
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
              p="$3" 
              bg="$cardBackground" 
              br="$md" 
              borderWidth={1} 
              borderColor="$borderColor"
              onPress={() => handleChildLogin(c.id)}
              cursor="pointer"
            >
              <XStack jc="space-between" ai="center">
                <XStack ai="center" gap="$3">
                  <Text fontSize={20}>{c.avatar}</Text>
                  <YStack>
                    <Text fontSize={12} fontWeight="800" color="$color">{c.name}</Text>
                    <Text fontSize={10} color="$textSecondary">Age {c.age} · Tap to pay</Text>
                  </YStack>
                </XStack>
                <ChevronRight size={14} color="#94A3B8" />
              </XStack>
            </Card>
          ))}
        </YStack>
      </YStack>
    </YStack>
  );
}
export { LoginScreen };
