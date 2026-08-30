// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Input, Sheet } from 'tamagui';
import { ShieldAlert, Check, X, Lock } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ParentApprovalsScreen() {
  const {
    pendingRequests,
    currency,
    approveRequest,
    declineRequest,
    activeParentSubScreen,
    setParentSubScreen
  } = useAppStore();

  const [pinCode, setPinCode] = useState('');
  const [activeReqId, setActiveReqId] = useState<string | null>(null);
  const [showPinSheet, setShowPinSheet] = useState(false);

  const handleOpenApproval = (reqId: string) => {
    setActiveReqId(reqId);
    setPinCode('');
    setShowPinSheet(true);
  };

  const handleApprove = () => {
    if (!activeReqId) return;
    const success = approveRequest(activeReqId, pinCode);
    if (success) {
      setShowPinSheet(false);
      setActiveReqId(null);
    }
  };

  // Support tour OTP automation
  useEffect(() => {
    if (activeParentSubScreen === 'req-001') {
      setActiveReqId('req-001');
      setPinCode('');
      setShowPinSheet(true);
    } else if (activeParentSubScreen === 'req-001-otp') {
      setActiveReqId('req-001');
      setPinCode('1932'); // autofills standard code
      setShowPinSheet(true);
    }
  }, [activeParentSubScreen]);

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor">
        <Text fontSize={15} fontWeight="800" color="$color">
          Payment Approvals Queue
        </Text>
        <Text fontSize={10} color="$textSecondary">
          Real-time SAMA-compliant parent biometric or PIN transaction approvals
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {pendingRequests.length === 0 ? (
          <Card p="$6" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" ai="center" jc="center" gap="$2">
            <Text fontSize={32}>🎉</Text>
            <Text fontSize={14} fontWeight="800" color="$color">No Pending Approvals</Text>
            <Text fontSize={11} color="$textSecondary" textAlign="center">
              All child transactions are within their configured limits and policy guardrails.
            </Text>
          </Card>
        ) : (
          pendingRequests.map((req) => (
            <Card key={req.id} p="$3.5" bg="$cardBackground" br="$md" borderWidth={1} borderColor="$borderColor" gap="$2">
              <XStack jc="space-between" ai="center">
                <XStack ai="center" gap="$2">
                  <YStack bg="$parentPrimarySubtle" w={32} h={32} br={16} ai="center" jc="center">
                    <ShieldAlert size={14} color="#4338CA" />
                  </YStack>
                  <YStack>
                    <Text fontSize={12} fontWeight="800" color="$color">
                      {req.childName} requested {formatMoney(req.amount, currency)}
                    </Text>
                    <Text fontSize={9} color="$textSecondary">At {req.merchant} · {req.time}</Text>
                  </YStack>
                </XStack>
              </XStack>
              
              <Text fontSize={11} color="$textSecondary" bg="$background" p="$2" br="$sm" fontStyle="italic">
                💬 "{req.reason}"
              </Text>

              <XStack gap="$2" marginTop="$1">
                <Button 
                  size="$sm" 
                  f={1} 
                  bg="$borderColor" 
                  hoverStyle={{ bg: '$backgroundHover' }}
                  onPress={() => declineRequest(req.id)}
                >
                  <X size={12} color="#64748B" />
                  <Text fontSize={11} fontWeight="700" color="#475569">Decline</Text>
                </Button>

                <Button 
                  size="$sm" 
                  f={1.8} 
                  bg="#059669" 
                  hoverStyle={{ bg: '#10B981' }}
                  onPress={() => handleOpenApproval(req.id)}
                >
                  <Check size={12} color="white" />
                  <Text fontSize={11} fontWeight="800" color="white">Approve with PIN (10.4) ✓</Text>
                </Button>
              </XStack>
            </Card>
          ))
        )}
      </YStack>

      {/* SAMA SECURE OTP / PIN VERIFICATION OVERLAY SHEET */}
      <Sheet
        modal
        open={showPinSheet}
        onOpenChange={(open) => {
          if (!open) {
            setShowPinSheet(false);
            setParentSubScreen(null);
          }
        }}
        snapPoints={[45]}
        dismissOnSnapToBottom
      >
        <Sheet.Frame p="$4" bg="$cardBackground" gap="$3">
          <Sheet.Handle />
          <YStack ai="center" gap="$2" py="$2">
            <Lock size={32} color="#059669" />
            <Text fontSize={15} fontWeight="800" color="$color">
              {t('otpTitle')}
            </Text>
            <Text fontSize={11} color="$textSecondary" textAlign="center">
              Please enter your 4-digit Parent authorization PIN to authenticate and settle this SAMA electronic transfer.
            </Text>
          </YStack>

          <XStack ai="center" jc="center" gap="$2" py="$2">
            <Input
              value={pinCode}
              onChangeText={setPinCode}
              keyboardType="number-pad"
              secureTextEntry
              maxLength={6}
              textAlign="center"
              fontSize={24}
              fontWeight="900"
              letterSpacing={10}
              w={180}
              h={50}
              bg="$background"
              borderColor="$borderColor"
              placeholder="••••"
            />
          </XStack>

          <XStack gap="$2" marginTop="$2">
            <Button size="$md" f={1} bg="$borderColor" onPress={() => { setShowPinSheet(false); setParentSubScreen(null); }}>
              Cancel
            </Button>
            <Button size="$md" f={1.8} bg="#059669" hoverStyle={{ bg: '#10B981' }} onPress={handleApprove}>
              Verify & Approve (SAMA) ✓
            </Button>
          </XStack>
        </Sheet.Frame>
        <Sheet.Overlay />
      </Sheet>
    </ScrollView>
  );
}
export { ParentApprovalsScreen };
