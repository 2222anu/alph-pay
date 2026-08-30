// @ts-nocheck
import React, { useEffect } from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator } from 'tamagui';
import { Bell, ShieldAlert, Award, Calendar, Check, CheckCircle2 } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';

export default function ParentNotificationsScreen() {
  const { notifications } = useAppStore();
  const parentNotifications = notifications.filter(n => n.for === 'parent');

  // Mark parent notifications as read when opening this screen
  useEffect(() => {
    const hasUnread = parentNotifications.some(n => n.unread);
    if (hasUnread) {
      const updatedNotifs = notifications.map(n => 
        n.for === 'parent' ? { ...n, unread: false } : n
      );
      useAppStore.setState({ notifications: updatedNotifs });
    }
  }, []);

  const handleClearNotifications = () => {
    const updatedNotifs = notifications.filter(n => n.for !== 'parent');
    useAppStore.setState({ notifications: updatedNotifs });
  };

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'SPENDING_ALERT':
        return <ShieldAlert size={16} color="#DC2626" />;
      case 'PAYMENT':
        return <Bell size={16} color="#4338CA" />;
      case 'GOAL':
        return <Award size={16} color="#D97706" />;
      case 'ALLOWANCE':
        return <Calendar size={16} color="#0D9488" />;
      default:
        return <Bell size={16} color="#64748B" />;
    }
  };

  const getBgColor = (cat: string) => {
    switch (cat) {
      case 'SPENDING_ALERT':
        return '$dangerBg';
      case 'PAYMENT':
        return '$parentPrimarySubtle';
      case 'GOAL':
        return '$warningBg';
      case 'ALLOWANCE':
        return '$childPrimarySubtle';
      default:
        return '$backgroundHover';
    }
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header */}
      <XStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor" jc="space-between" ai="center">
        <YStack>
          <Text fontSize={15} fontWeight="800" color="$color">
            Notification Center (11)
          </Text>
          <Text fontSize={10} color="$textSecondary">
            Review security alerts, allowance logs, and pending requests
          </Text>
        </YStack>
        {parentNotifications.length > 0 && (
          <Button size="$xs" bg="$background" borderColor="$borderColor" borderWidth={1} onPress={handleClearNotifications}>
            <Text fontSize={10} color="$textSecondary" fontWeight="700">Clear All</Text>
          </Button>
        )}
      </XStack>

      <YStack p="$4" gap="$3">
        {parentNotifications.length === 0 ? (
          <Card p="$6" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" ai="center" jc="center" gap="$2">
            <Text fontSize={32}>🔔</Text>
            <Text fontSize={14} fontWeight="800" color="$color">All Caught Up</Text>
            <Text fontSize={11} color="$textSecondary" textAlign="center">
              No new alerts or system messages for your guardian profile.
            </Text>
          </Card>
        ) : (
          parentNotifications.map((n) => (
            <Card 
              key={n.id} 
              p="$3.5" 
              bg="$cardBackground" 
              br="$md" 
              borderWidth={1} 
              borderColor={n.unread ? '$parentPrimaryBorder' : '$borderColor'} 
              gap="$2"
              position="relative"
            >
              {n.unread && (
                <YStack 
                  position="absolute" 
                  top={12} 
                  right={12} 
                  w={6} 
                  h={6} 
                  br={3} 
                  bg="$parentPrimary" 
                />
              )}
              <XStack gap="$3" ai="flex-start">
                <YStack bg={getBgColor(n.category)} w={32} h={32} br={16} ai="center" jc="center">
                  {getIcon(n.category)}
                </YStack>
                <YStack f={1} gap="$0.5">
                  <XStack jc="space-between" ai="center">
                    <Text fontSize={12} fontWeight="800" color="$color">{n.title}</Text>
                    <Text fontSize={9} color="$textTertiary">{n.time}</Text>
                  </XStack>
                  <Text fontSize={11} color="$textSecondary">{n.desc}</Text>
                </YStack>
              </XStack>
            </Card>
          ))
        )}
      </YStack>
    </ScrollView>
  );
}
export { ParentNotificationsScreen };
