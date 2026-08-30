// @ts-nocheck
import React from 'react';
import { YStack, XStack, Text, Button, Card, ScrollView, Separator } from 'tamagui';
import { Shield, CreditCard, FileText, CheckCircle2, ChevronRight, FileDown } from '@tamagui/lucide-icons';
import { useAppStore } from '../../src/store/useAppStore';
import { getAppRegionConfig } from '../../src/constants/Currencies';
import { t } from '../../src/constants/I18N';

export default function ParentGovernanceScreen() {
  const { currency, language, parent, showToast } = useAppStore();
  const rc = getAppRegionConfig(currency, language);

  const handleDownloadPDF = () => {
    showToast('📄 Downloaded official SAMA audit statement (PDF).', 'parent');
  };

  return (
    <ScrollView f={1} bg="$background" contentContainerStyle={{ paddingBottom: 60 }}>
      {/* Header title */}
      <YStack p="$4" bg="$cardBackground" borderBottomWidth={1} borderBottomColor="$borderColor">
        <Text fontSize={15} fontWeight="800" color="$color">
          System Governance & Compliance
        </Text>
        <Text fontSize={10} color="$textSecondary">
          {rc.regulator} Auditing, KYC Identity & Security Controls
        </Text>
      </YStack>

      <YStack p="$4" gap="$4">
        {/* SAMA Electronic Audit Compliance Card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <XStack ai="center" gap="$2.5">
            <CheckCircle2 size={18} color="#059669" />
            <Text fontSize={13} fontWeight="800" color="$color">
              SSO Verification Status
            </Text>
          </XStack>
          <Text fontSize={11} color="$textSecondary">
            {rc.kycDesc}
          </Text>
          <XStack p="$2.5" bg="$successBg" br="$sm" ai="center" gap="$2">
            <Text fontSize={11} fontWeight="800" color="$success">
              {rc.kycStatusText}
            </Text>
          </XStack>
          <Separator borderColor="$borderColor" />
          <YStack gap="$1.5">
            <XStack jc="space-between">
              <Text fontSize={11} color="$textSecondary">National ID / Iqama</Text>
              <Text fontSize={11} fontWeight="700" color="$color">{rc.idSample}</Text>
            </XStack>
            <XStack jc="space-between">
              <Text fontSize={11} color="$textSecondary">Guardian Name</Text>
              <Text fontSize={11} fontWeight="700" color="$color">{parent.name}</Text>
            </XStack>
          </YStack>
        </Card>

        {/* Linked Funding Accounts Card */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <XStack ai="center" gap="$2.5">
            <CreditCard size={18} color="#4338CA" />
            <Text fontSize={13} fontWeight="800" color="$color">
              Linked Bank Account
            </Text>
          </XStack>
          <Text fontSize={11} color="$textSecondary">
            {rc.fundingSub}
          </Text>
          
          <YStack bg="$background" p="$3" br="$md" borderWidth={1} borderColor="$borderColor" gap="$1">
            <Text fontSize={12} fontWeight="800" color="$color">{parent.bankName}</Text>
            <Text fontSize={10} color="$textSecondary" fontWeight="600">{parent.bankIban}</Text>
            <Text fontSize={9} color="$success" fontWeight="700" marginTop="$1">
              {rc.openBankingBadge}
            </Text>
          </YStack>

          <Text fontSize={10} color="$textTertiary" fontStyle="italic">
            {rc.parentAccountCompliance}
          </Text>
        </Card>

        {/* PDF audit Statements Download Actions */}
        <Card p="$4" bg="$cardBackground" br="$lg" borderWidth={1} borderColor="$borderColor" gap="$3">
          <XStack ai="center" gap="$2.5">
            <FileText size={18} color="#D97706" />
            <Text fontSize={13} fontWeight="800" color="$color">
              Auditing Statements
            </Text>
          </XStack>
          <Text fontSize={11} color="$textSecondary">
            Download certified transaction ledgers and electronic summaries for tax or SAMA auditing reviews.
          </Text>

          <Button size="$sm" bg="$background" borderColor="$borderColor" borderWidth={1} onPress={handleDownloadPDF} icon={FileDown}>
            <Text fontSize={11} fontWeight="700" color="$textSecondary">Download Audit Statement (PDF)</Text>
          </Button>
        </Card>
      </YStack>
    </ScrollView>
  );
}
export { ParentGovernanceScreen };
