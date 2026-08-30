// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Input, Select, Sheet, Separator } from 'tamagui';
import { QrCode, ShieldAlert, Check, X, ShieldX, Clock, CreditCard } from '@tamagui/lucide-icons';
import { useAppStore, PendingRequest } from '../../src/store/useAppStore';
import { formatMoney } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ChildPayScreen() {
  const {
    children,
    selectedChildId,
    currency,
    simulateChildPayment,
    pendingRequests,
    activeChildSubScreen,
    setChildSubScreen,
    showToast
  } = useAppStore();

  const child = children.find(c => c.id === selectedChildId) || children[0];

  // Simulator merchant controls form states
  const [merchant, setMerchant] = useState('Al Jarir Bookstore');
  const [amount, setAmount] = useState('85.00');
  const [category, setCategory] = useState('Education & Books');
  const [customNote, setCustomNote] = useState('School Art Project Materials & Notebooks');

  // Sheet states
  const [showStatusSheet, setShowStatusSheet] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'NONE' | 'APPROVED' | 'BLOCKED' | 'APPROVAL_REQUIRED'>('NONE');

  // Sync inputs with tour steps via activeChildSubScreen state
  useEffect(() => {
    if (activeChildSubScreen === 'scanCustom') {
      setMerchant('Al Jarir Bookstore');
      setAmount('85.00');
      setCategory('Education & Books');
      setCustomNote('School Art Project Materials & Notebooks');
    } else if (activeChildSubScreen === 'policyCheck') {
      setMerchant('Al Jarir Bookstore');
      setAmount('85.00');
      setCategory('Education & Books');
      setCustomNote('School Art Project Materials & Notebooks');
      
      // Auto trigger limit checks for step 12
      setPaymentStatus('APPROVAL_REQUIRED');
      setShowStatusSheet(true);
    } else if (activeChildSubScreen === 'requestSent') {
      setPaymentStatus('APPROVAL_REQUIRED');
      setShowStatusSheet(true);
    } else if (activeChildSubScreen === 'receipt') {
      setPaymentStatus('APPROVED');
      setShowStatusSheet(true);
    } else if (activeChildSubScreen === null) {
      setShowStatusSheet(false);
      setPaymentStatus('NONE');
    }
  }, [activeChildSubScreen]);

  const handleSimulatePayment = () => {
    const parsedAmt = parseFloat(amount);
    if (isNaN(parsedAmt) || parsedAmt <= 0) {
      showToast('Please enter a valid payment amount.', 'child');
      return;
    }

    // Trigger spending engine
    const result = simulateChildPayment(child.id, merchant, category, parsedAmt, customNote);
    setPaymentStatus(result);
    setShowStatusSheet(true);

    if (result === 'APPROVED') {
      setChildSubScreen('receipt');
    } else if (result === 'BLOCKED') {
      setChildSubScreen('blocked');
    } else if (result === 'APPROVAL_REQUIRED') {
      setChildSubScreen('policyCheck');
    }
  };

  const handleDispatchApprovalRequest = () => {
    // Already created standard pendingRequest in simulateChildPayment. Transition child view to waiting
    setChildSubScreen('requestSent');
  };

  const handleCloseReceipt = () => {
    setShowStatusSheet(false);
    setChildSubScreen(null);
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor">
        <Text fontSize={15} fontWeight="800" color="$color">
          Scan QR Code (C06)
        </Text>
        <Text fontSize={10} color="$textSecondary">
          Simulate a merchant QR code scan payment
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* Mock QR Camera viewport Box */}
        <Card 
          h={160} 
          bg="#000000" 
          br="$lg" 
          borderWidth={2} 
          borderColor="$primary" 
          ai="center" 
          jc="center"
          position="relative"
          overflow="hidden"
        >
          {/* Target box lines */}
          <YStack w={100} h={100} borderWidth={2} borderColor="#14B8A6" br="$md" opacity={0.6} ai="center" jc="center">
            <QrCode size={40} color="#14B8A6" opacity={0.7} />
          </YStack>
          <Text fontSize={10} color="rgba(255, 255, 255, 0.6)" marginTop="$2">
            Align merchant QR code within frame
          </Text>
        </Card>

        {/* Simulator controls panel */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <Text fontSize={12} fontWeight="800" color="$color" letterSpacing={0.5}>
            SIMULATOR CONTROLS
          </Text>

          <YStack gap="$2.5">
            <YStack>
              <Text fontSize={11} fontWeight="700" color="$textSecondary">Merchant Name</Text>
              <Select value={merchant} onValueChange={setMerchant}>
                <Select.Trigger size="$sm" bg="$background" borderColor="$borderColor" marginTop="$1">
                  <Select.Value placeholder="Select Shop" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Viewport>
                    <Select.Group>
                      <Select.Item index={0} value="Al Jarir Bookstore">📚 Al Jarir Bookstore</Select.Item>
                      <Select.Item index={1} value="School Cafeteria">🍔 School Cafeteria</Select.Item>
                      <Select.Item index={2} value="Starbucks Cafe">☕ Starbucks Cafe</Select.Item>
                      <Select.Item index={3} value="Roblox Corp">🎮 Roblox (Blocked Category)</Select.Item>
                      <Select.Item index={4} value="Toy Town Riyadh">🧸 Toy Town Riyadh</Select.Item>
                      <Select.Item index={5} value="Epic Games">🎮 Epic Games (Blocked Merchant)</Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select>
            </YStack>

            <XStack gap="$2">
              <YStack f={1.2}>
                <Text fontSize={11} fontWeight="700" color="$textSecondary">Amount (SAR)</Text>
                <Input 
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="decimal-pad"
                  bg="$background"
                  borderColor="$borderColor"
                  marginTop="$1"
                  h={32}
                  fontSize={12}
                />
              </YStack>
              <YStack f={1.8}>
                <Text fontSize={11} fontWeight="700" color="$textSecondary">Category</Text>
                <Select value={category} onValueChange={setCategory}>
                  <Select.Trigger size="$sm" bg="$background" borderColor="$borderColor" marginTop="$1" h={32}>
                    <Select.Value placeholder="Category" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Viewport>
                      <Select.Group>
                        <Select.Item index={0} value="Education & Books">Education</Select.Item>
                        <Select.Item index={1} value="Food & Drinks">Food & Drinks</Select.Item>
                        <Select.Item index={2} value="Shopping">Shopping</Select.Item>
                        <Select.Item index={3} value="Gaming">Gaming</Select.Item>
                        <Select.Item index={4} value="Transport">Transport</Select.Item>
                      </Select.Group>
                    </Select.Viewport>
                  </Select.Content>
                </Select>
              </YStack>
            </XStack>

            <YStack>
              <Text fontSize={11} fontWeight="700" color="$textSecondary">Note for Dad (If limit exceeded)</Text>
              <Input 
                value={customNote}
                onChangeText={setCustomNote}
                bg="$background"
                borderColor="$borderColor"
                marginTop="$1"
                h={32}
                fontSize={11}
              />
            </YStack>

            <Button size="$sm" bg="$primary" hoverStyle={{ bg: '$primaryHover' }} onPress={handleSimulatePayment} marginTop="$2">
              <Text color="white" fontSize={11} fontWeight="800">Scan & Simulate Payment →</Text>
            </Button>
          </YStack>
        </Card>
      </YStack>

      {/* DETERMINISTIC POLICY RESULT DIALOG SHEET */}
      <Sheet
        modal
        open={showStatusSheet}
        onOpenChange={(open) => {
          if (!open) {
            setShowStatusSheet(false);
            setChildSubScreen(null);
          }
        }}
        snapPoints={[50]}
        dismissOnSnapToBottom
      >
        <Sheet.Frame p="$4" bg="$cardBackground" gap="$3">
          <Sheet.Handle />

          {/* Scenario A: Approved Receipt */}
          {paymentStatus === 'APPROVED' && (
            <YStack ai="center" gap="$3" py="$2">
              <YStack bg="$successBg" w={50} h={50} br={25} ai="center" jc="center">
                <Check size={28} color="#059669" />
              </YStack>
              <Text fontSize={16} fontWeight="800" color="$success">Payment Auto-Approved (C09)</Text>
              <Text fontSize={11} color="$textSecondary" textAlign="center">
                Purchase successful! Transferred {formatMoney(parseFloat(amount), currency)} to {merchant}.
              </Text>
              <Separator borderColor="$borderColor" />
              <YStack bg="$background" w="100%" p="$3" br="$md" gap="$1">
                <Text fontSize={11} color="$textSecondary">Merchant: {merchant}</Text>
                <Text fontSize={11} color="$textSecondary">Amount: {formatMoney(parseFloat(amount), currency)}</Text>
                <Text fontSize={9} color="$textTertiary">Receipt ID: SAMA-{Date.now().toString().slice(-6)}</Text>
              </YStack>
              <Button size="$md" bg="$primary" onPress={handleCloseReceipt} w="100%">
                <Text color="white" fontWeight="800">Done (C09.2)</Text>
              </Button>
            </YStack>
          )}

          {/* Scenario B: Restricted Blocked */}
          {paymentStatus === 'BLOCKED' && (
            <YStack ai="center" gap={12} py="$2">
              <YStack bg="$dangerBg" w={50} h={50} br={25} ai="center" jc="center">
                <ShieldX size={28} color="#DC2626" />
              </YStack>
              <Text fontSize={16} fontWeight="800" color="$danger">Transaction Blocked (C07)</Text>
              <Text fontSize={11} color="$textSecondary" textAlign="center">
                {merchant} ({category}) is restricted by parent governance policy.
              </Text>
              <Button size="$md" bg="$borderColor" onPress={handleCloseReceipt} w="100%">
                Understand (C07.2)
              </Button>
            </YStack>
          )}

          {/* Scenario C: Parent Approval Required check page */}
          {paymentStatus === 'APPROVAL_REQUIRED' && activeChildSubScreen !== 'requestSent' && (
            <YStack ai="center" gap="$3" py="$2">
              <YStack bg="$warningBg" w={50} h={50} br={25} ai="center" jc="center">
                <Clock size={28} color="#D97706" />
              </YStack>
              <Text fontSize={16} fontWeight="800" color="$warning">Parent Approval Required (C08)</Text>
              <Text fontSize={11} color="$textSecondary" textAlign="center">
                SAR {amount} at {merchant} exceeds your daily limit of {formatMoney(child.dailyLimit, currency)}.
              </Text>
              
              <YStack w="100%">
                <Text fontSize={11} fontWeight="700">Attach Note for Dad</Text>
                <Input 
                  value={customNote} 
                  onChangeText={setCustomNote}
                  bg="$background"
                  borderColor="$borderColor"
                  marginTop="$1"
                />
              </YStack>

              <Button size="$md" bg="#14B8A6" hoverStyle={{ bg: '#2DD4BF' }} onPress={handleDispatchApprovalRequest} w="100%" icon={Clock}>
                <Text color="#0F172A" fontWeight="800">Request Instant Approval from Dad (C08) →</Text>
              </Button>
            </YStack>
          )}

          {/* Scenario D: Request Sent waiting screen */}
          {paymentStatus === 'APPROVAL_REQUIRED' && activeChildSubScreen === 'requestSent' && (
            <YStack ai="center" gap="$3" py="$4">
              <Clock size={36} color="#F59E0B" />
              <Text fontSize={16} fontWeight="800" color="$color">Waiting for Dad... (C08.3)</Text>
              <Text fontSize={11} color="$textSecondary" textAlign="center">
                Real-time push authorization request dispatched to Ahmed Al-Farsi. SAMA validation key is active.
              </Text>
              <YStack w="100%" bg="$background" p="$3.5" br="$md" gap="$1" borderStyle="dashed" borderWidth={1.5} borderColor="$borderColor">
                <Text fontSize={11} color="$textSecondary">Amount: {formatMoney(parseFloat(amount), currency)}</Text>
                <Text fontSize={11} color="$textSecondary">Note: "{customNote}"</Text>
              </YStack>
              <Button size="$sm" bg="$borderColor" onPress={handleCloseReceipt} w="100%">
                <Text color="$textSecondary" fontWeight="700">Close Window</Text>
              </Button>
            </YStack>
          )}
        </Sheet.Frame>
        <Sheet.Overlay />
      </Sheet>
    </ScrollView>
  );
}
export { ChildPayScreen };
