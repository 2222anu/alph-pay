// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator, Select } from 'tamagui';
import { Settings, Globe, DollarSign, LogOut, ChevronRight } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ParentSettingsScreen() {
  const {
    language,
    currency,
    setLanguage,
    setCurrency,
    parent,
    setParentSubScreen
  } = useAppStore();

  const handleSignOut = () => {
    setParentSubScreen('exit');
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor">
        <Text fontSize={15} fontWeight="800" color="$color">
          App Settings
        </Text>
        <Text fontSize={10} color="$textSecondary">
          Manage currency, multi-lingual translations & session profiles
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* Regional Preferences Card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3.5">
          <XStack ai="center" gap="$2.5">
            <Globe size={18} color="#4338CA" />
            <Text fontSize={13} fontWeight="800" color="$color">
              Regional Preferences
            </Text>
          </XStack>
          
          <Separator borderColor="$borderColor" />

          {/* Language Selector row */}
          <XStack jc="space-between" ai="center">
            <YStack>
              <Text fontSize={12} fontWeight="700" color="$color">Language</Text>
              <Text fontSize={10} color="$textSecondary">Select translation dialect</Text>
            </YStack>
            <Select value={language} onValueChange={setLanguage}>
              <Select.Trigger size="$sm" w={130} bg="$background" borderColor="$borderColor">
                <Select.Value placeholder="Language" />
              </Select.Trigger>
              <Select.Content>
                <Select.Viewport>
                  <Select.Group>
                    <Select.Item index={0} value="en">🇬🇧 English</Select.Item>
                    <Select.Item index={1} value="ar">🇸🇦 العربية</Select.Item>
                    <Select.Item index={2} value="te">🇮🇳 తెలుగు</Select.Item>
                    <Select.Item index={3} value="hi">🇮🇳 हिन्दी</Select.Item>
                    <Select.Item index={4} value="ta">🇮🇳 தமிழ்</Select.Item>
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select>
          </XStack>

          <Separator borderColor="$borderColor" />

          {/* Currency Selector row */}
          <XStack jc="space-between" ai="center">
            <YStack>
              <Text fontSize={12} fontWeight="700" color="$color">Currency</Text>
              <Text fontSize={10} color="$textSecondary">Select default SAMA currency</Text>
            </YStack>
            <Select value={currency} onValueChange={setCurrency}>
              <Select.Trigger size="$sm" w={130} bg="$background" borderColor="$borderColor">
                <Select.Value placeholder="Currency" />
              </Select.Trigger>
              <Select.Content>
                <Select.Viewport>
                  <Select.Group>
                    <Select.Item index={0} value="SAR">🇸🇦 SAR (ر.س)</Select.Item>
                    <Select.Item index={1} value="USD">🇺🇸 USD ($)</Select.Item>
                    <Select.Item index={2} value="AED">🇦🇪 AED (د.إ)</Select.Item>
                    <Select.Item index={3} value="INR">🇮🇳 INR (₹)</Select.Item>
                    <Select.Item index={4} value="EUR">🇪🇺 EUR (€)</Select.Item>
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select>
          </XStack>
        </Card>

        {/* Profile Card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <XStack ai="center" gap="$2.5">
            <Settings size={18} color="#0D9488" />
            <Text fontSize={13} fontWeight="800" color="$color">
              Guardian Details
            </Text>
          </XStack>
          
          <Separator borderColor="$borderColor" />

          <YStack gap="$2">
            <XStack jc="space-between">
              <Text fontSize={11} color="$textSecondary">Legal Name</Text>
              <Text fontSize={11} fontWeight="700" color="$color">{parent.name}</Text>
            </XStack>
            <XStack jc="space-between">
              <Text fontSize={11} color="$textSecondary">National ID</Text>
              <Text fontSize={11} fontWeight="700" color="$color">{parent.nationalId}</Text>
            </XStack>
            <XStack jc="space-between">
              <Text fontSize={11} color="$textSecondary">Verification Status</Text>
              <Text fontSize={11} fontWeight="700" color="$success">Nafath Level 3 Verified</Text>
            </XStack>
          </YStack>
        </Card>

        {/* Sign out Button */}
        <Button size="$md" bg="$dangerBg" borderColor="$danger" borderWidth={1} onPress={handleSignOut} icon={LogOut}>
          <Text fontSize={12} fontWeight="700" color="$danger">Sign Out from AMANAH</Text>
        </Button>
      </YStack>
    </ScrollView>
  );
}
export { ParentSettingsScreen };
