// @ts-nocheck
import React, { useEffect } from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator } from 'tamagui';
import { Bell, Award, CheckCircle2, ShieldAlert, ArrowLeft } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { useRouter } from 'expo-router';

export default function ChildNotificationsScreen() {
  const router = useRouter();
  const { notifications, selectedChildId } = useAppStore();
  
  const childNotifications = notifications.filter(
    n => n.for === 'child'
  );

  // Mark child notifications as read when opening this screen
  useEffect(() => {
    const hasUnread = childNotifications.some(n => n.unread);
    if (hasUnread) {
      const updatedNotifs = notifications.map(n => 
        n.for === 'child' ? { ...n, unread: false } : n
      );
      useAppStore.setState({ notifications: updatedNotifs });
    }
  }, []);

  const handleClearNotifications = () => {
    const updatedNotifs = notifications.filter(n => n.for !== 'child');
    useAppStore.setState({ notifications: updatedNotifs });
  };

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'PAYMENT_SUCCESS':
      case 'PAYMENT_APPROVED':
        return <CheckCircle2 size={16} color="#059669" />;
      case 'PAYMENT_DECLINED':
      case 'PAYMENT_BLOCKED':
        return <ShieldAlert size={16} color="#DC2626" />;
      case 'GOAL':
        return <Award size={16} color="#D97706" />;
      default:
        return <Bell size={16} color="#0D9488" />;
    }
  };

  const getBgColor = (cat: string) => {
    switch (cat) {
      case 'PAYMENT_SUCCESS':
      case 'PAYMENT_APPROVED':
        return '$successBg';
      case 'PAYMENT_DECLINED':
      case 'PAYMENT_BLOCKED':
        return '$dangerBg';
      case 'GOAL':
        return '$warningBg';
      default:
        return '$childPrimarySubtle';
    }
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header */}
      <XStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor" jc="space-between" ai="center">
        <XStack ai="center" gap="$3">
          <Button size="$sm" circular bg="$background" borderWidth={1} borderColor="$borderColor" onPress={() => router.back()}>
            <ArrowLeft size={16} color="#64748B" />
          </Button>
          <YStack>
            <Text fontSize={15} fontWeight="800" color="$color">
              My Notifications (C11)
            </Text>
            <Text fontSize={10} color="$textSecondary">
              Check out approvals, warnings and pocket money updates
            </Text>
          </YStack>
        </XStack>
        
        {childNotifications.length > 0 && (
          <Button size="$xs" bg="$background" borderColor="$borderColor" borderWidth={1} onPress={handleClearNotifications}>
            <Text fontSize={10} color="$textSecondary" fontWeight="700">Clear All</Text>
          </Button>
        )}
      </XStack>

      <YStack p="$4" gap="$3">
        {childNotifications.length === 0 ? (
          <Card p="$6" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" ai="center" jc="center" gap="$2">
            <Text fontSize={32}>🔔</Text>
            <Text fontSize={14} fontWeight="800" color="$color">No Notifications</Text>
            <Text fontSize={11} color="$textSecondary" textAlign="center">
              You are all caught up! Updates from Dad will appear here.
            </Text>
          </Card>
        ) : (
          childNotifications.map((n) => (
            <Card 
              key={n.id} 
              p="$3.5" 
              bg="$cardBackground" 
              br="$md" 
              borderWidth={1} 
              borderColor={n.unread ? '$childPrimaryBorder' : '$borderColor'} 
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
                  bg="$childPrimary" 
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
export { ChildNotificationsScreen };
