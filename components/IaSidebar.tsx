// @ts-nocheck
import React, { useState, useMemo } from 'react';
import { YStack, XStack, Text, Input, Button, ScrollView, Separator } from 'tamagui';
import { Search, ChevronDown, ChevronRight, Folder, FolderOpen } from '@tamagui/lucide-icons';
import { useAppStore } from '../src/store/useAppStore';
import { IATreeData } from '../src/constants/IATree';

export const IaSidebar: React.FC = () => {
  const { 
    viewMode, 
    setParentTab, 
    setParentSubScreen, 
    setChildTab, 
    setChildSubScreen, 
    showToast
  } = useAppStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
    '03': true,
    '04': true,
    '05': true,
    '06': true,
    'C01': true,
    'C02': true,
    'C03': true,
  });

  // Deep Link implementation mapped exactly to app.js
  const handleDeepLink = (appType: 'parent' | 'child', code: string, leaf = '') => {
    if (appType === 'parent') {
      if (code.startsWith('01')) setParentSubScreen('onboarding');
      else if (code.startsWith('02')) setParentTab('dashboard');
      else if (code.startsWith('03')) setParentTab('children');
      else if (code.startsWith('04')) {
        setParentTab('children');
        setParentSubScreen('allowance');
      }
      else if (code.startsWith('05')) {
        setParentTab('children');
        setParentSubScreen('controls');
      }
      else if (code.startsWith('06') || code.startsWith('07')) setParentTab('payments');
      else if (code.startsWith('08')) {
        setParentTab('payments');
        setParentSubScreen('sendMoney');
      }
      else if (code.startsWith('09')) setParentTab('transactions');
      else if (code.startsWith('10')) {
        setParentTab('dashboard');
        setParentSubScreen('req-001'); // opens SAMA authorization modal
      }
      else if (code.startsWith('11')) setParentSubScreen('notifications');
      else if (code.startsWith('12')) setParentSubScreen('funding');
      else if (code.startsWith('13')) setParentSubScreen('profile');
      else if (code.startsWith('14')) setParentSubScreen('security');
      else if (code.startsWith('15')) setParentSubScreen('settings');
      else if (code.startsWith('16')) setParentSubScreen('help');
      else if (code.startsWith('17')) setParentSubScreen('exit');
      else setParentTab('more');

      showToast(`Navigated Parent App to: [${code}] ${leaf || ''}`, 'parent');
    } else {
      if (code === 'C01') setChildSubScreen('onboarding');
      else if (code === 'C02') setChildTab('home');
      else if (code === 'C03') setChildTab('wallet');
      else if (code === 'C06' || code === 'C07') setChildTab('scan');
      else if (code === 'C10') setChildTab('activity');
      else if (code === 'C11') setChildSubScreen('child_notifications');
      else if (code === 'C12') setChildSubScreen('passcode');
      else if (code === 'C13') setChildSubScreen('avatar');
      else if (code === 'C14') setChildSubScreen('literacy');
      else setChildTab('more');

      showToast(`Navigated Child App to: [${code}] ${leaf || ''}`, 'child');
    }
  };

  const toggleNode = (code: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [code]: !prev[code]
    }));
  };

  const expandAll = () => {
    const allCodes: Record<string, boolean> = {};
    IATreeData.parentApp.forEach(node => { allCodes[node.code] = true; });
    IATreeData.childApp.forEach(node => { allCodes[node.code] = true; });
    setExpandedNodes(allCodes);
  };

  const collapseAll = () => {
    setExpandedNodes({});
  };

  const query = searchQuery.toLowerCase().trim();

  // Filter tree data based on query
  const filteredParentTree = useMemo(() => {
    return IATreeData.parentApp.filter(section => {
      const matchesSection = section.title.toLowerCase().includes(query) || section.code.includes(query);
      const filteredSubs = section.sub.filter(sub => {
        if (matchesSection) return true;
        if (sub.title.toLowerCase().includes(query) || sub.code.includes(query)) return true;
        return sub.leaves.some(l => l.toLowerCase().includes(query));
      });
      return matchesSection || filteredSubs.length > 0;
    });
  }, [query]);

  const filteredChildTree = useMemo(() => {
    return IATreeData.childApp.filter(section => {
      const matchesSection = section.title.toLowerCase().includes(query) || section.code.includes(query);
      const filteredSubs = section.sub.filter(sub => {
        if (matchesSection) return true;
        if (sub.title.toLowerCase().includes(query) || sub.code.includes(query)) return true;
        return sub.leaves.some(l => l.toLowerCase().includes(query));
      });
      return matchesSection || filteredSubs.length > 0;
    });
  }, [query]);

  const renderSection = (appType: 'parent' | 'child', section: any) => {
    const isOpen = query.length > 0 || !!expandedNodes[section.code];
    const isParent = appType === 'parent';
    const accentColor = isParent ? '$parentPrimary' : '$primary';
    const accentSubtle = isParent ? '$parentPrimarySubtle' : '$childPrimarySubtle';

    return (
      <YStack key={section.code} marginBottom="$2" borderLeftWidth={1.5} borderLeftColor={accentSubtle} paddingLeft="$2">
        {/* Node Header */}
        <XStack 
          alignItems="center" 
          paddingVertical="$1.5" 
          paddingHorizontal="$2" 
          borderRadius="$sm"
          hoverStyle={{ backgroundColor: '$backgroundHover' }}
          cursor="pointer"
          onPress={() => toggleNode(section.code)}
          gap="$1.5"
        >
          {isOpen ? <ChevronDown size={14} color="#64748B" /> : <ChevronRight size={14} color="#64748B" />}
          <Text 
            fontSize={11} 
            fontFamily="$heading" 
            fontWeight="800" 
            backgroundColor={accentColor} 
            color="white" 
            paddingHorizontal="$1.5" 
            paddingVertical="$0.5" 
            borderRadius="$sm"
          >
            {section.code}
          </Text>
          <Text fontSize={13} fontWeight="700" color="$color" flex={1}>
            {section.title}
          </Text>
        </XStack>

        {/* Sub Trees */}
        {isOpen && (
          <YStack paddingLeft="$4" marginTop="$1">
            {section.sub.map((sub: any) => {
              const matchesSub = !query || sub.title.toLowerCase().includes(query) || sub.code.includes(query);
              const leavesToShow = query
                ? sub.leaves.filter((l: string) => l.toLowerCase().includes(query) || matchesSub)
                : sub.leaves;

              if (query && !matchesSub && leavesToShow.length === 0) return null;

              return (
                <YStack key={sub.code} marginBottom="$2">
                  <XStack 
                    alignItems="center" 
                    paddingVertical="$1" 
                    paddingHorizontal="$1.5"
                    borderRadius="$sm"
                    hoverStyle={{ backgroundColor: '$backgroundHover' }}
                    cursor="pointer"
                    onPress={() => handleDeepLink(appType, sub.code)}
                    gap="$1.5"
                  >
                    <Text fontSize={11} color={accentColor} fontWeight="700">
                      [{sub.code}]
                    </Text>
                    <Text fontSize={12} fontWeight="600" color="$textSecondary" flex={1}>
                      {sub.title}
                    </Text>
                  </XStack>

                  <YStack paddingLeft="$4" marginTop="$0.5" borderLeftWidth={1} borderLeftColor="$borderColor">
                    {leavesToShow.map((leaf: string, lIdx: number) => (
                      <XStack
                        key={lIdx}
                        paddingVertical="$0.5"
                        paddingHorizontal="$2"
                        hoverStyle={{ backgroundColor: '$backgroundHover' }}
                        cursor="pointer"
                        onPress={() => handleDeepLink(appType, sub.code, leaf)}
                      >
                        <Text fontSize={11} color="$textTertiary" hoverStyle={{ color: '$color' }}>
                          • {leaf}
                        </Text>
                      </XStack>
                    ))}
                  </YStack>
                </YStack>
              );
            })}
          </YStack>
        )}
      </YStack>
    );
  };

  return (
    <YStack 
      width={viewMode === 'ia' ? '100%' : 340} 
      height="100%" 
      backgroundColor="$cardBackground" 
      borderRightWidth={viewMode === 'ia' ? 0 : 1}
      borderRightColor="$borderColor"
      flex={1}
    >
      {/* Header Info */}
      <YStack padding="$4" borderBottomWidth={1} borderBottomColor="$borderColor" gap="$2">
        <XStack alignItems="center" justifyContent="space-between">
          <Text fontSize={15} fontWeight="800" color="$color">
            31-Section IA Inspector
          </Text>
          <Text fontSize={11} backgroundColor="$parentPrimarySubtle" color="$parentPrimary" paddingHorizontal="$2" paddingVertical="$0.5" borderRadius="$full" fontWeight="700">
            31 Sections
          </Text>
        </XStack>
        <Text fontSize={11} color="$textSecondary">
          Sovereign Saudi Family Fintech Architecture
        </Text>

        {/* Search Bar */}
        <XStack alignItems="center" backgroundColor="$background" borderWidth={1} borderColor="$borderColor" borderRadius="$md" paddingHorizontal="$3" paddingVertical="$1" gap="$2">
          <Search size={14} color="#94A3B8" />
          <Input 
            flex={1}
            padding={0}
            height={28}
            borderWidth={0}
            backgroundColor="transparent"
            placeholder="Search architecture..."
            fontSize={12}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </XStack>

        {/* Collapse Actions */}
        <XStack gap="$2" marginTop="$1">
          <Button size="$xs" flex={1} backgroundColor="$background" borderColor="$borderColor" hoverStyle={{ borderColor: '$borderColorStrong' }} onPress={expandAll}>
            <Text fontSize={11} fontWeight="600" color="$textSecondary">Expand All</Text>
          </Button>
          <Button size="$xs" flex={1} backgroundColor="$background" borderColor="$borderColor" hoverStyle={{ borderColor: '$borderColorStrong' }} onPress={collapseAll}>
            <Text fontSize={11} fontWeight="600" color="$textSecondary">Collapse All</Text>
          </Button>
        </XStack>
      </YStack>

      {/* Tree list */}
      <ScrollView flex={1} padding="$3">
        {/* Parent Group */}
        {filteredParentTree.length > 0 && (
          <YStack marginBottom="$4">
            <XStack alignItems="center" justifyContent="space-between" paddingVertical="$2" paddingHorizontal="$1">
              <Text fontSize={12} fontWeight="800" color="$parentPrimary" letterSpacing={0.5}>
                PARENT APP (17 SECTIONS)
              </Text>
              <YStack width={8} height={8} borderRadius={4} backgroundColor="$parentPrimary" />
            </XStack>
            <Separator marginBottom="$2" borderColor="$borderColor" />
            {filteredParentTree.map(section => renderSection('parent', section))}
          </YStack>
        )}

        {/* Child Group */}
        {filteredChildTree.length > 0 && (
          <YStack marginBottom="$4">
            <XStack alignItems="center" justifyContent="space-between" paddingVertical="$2" paddingHorizontal="$1">
              <Text fontSize={12} fontWeight="800" color="$primary" letterSpacing={0.5}>
                CHILD APP (14 SECTIONS)
              </Text>
              <YStack width={8} height={8} borderRadius={4} backgroundColor="$primary" />
            </XStack>
            <Separator marginBottom="$2" borderColor="$borderColor" />
            {filteredChildTree.map(section => renderSection('child', section))}
          </YStack>
        )}
      </ScrollView>
    </YStack>
  );
};
export default IaSidebar;
