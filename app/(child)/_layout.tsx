// @ts-nocheck
import React from 'react';
import { Tabs } from 'expo-router';
import { Home, Wallet, QrCode, ClipboardList } from '@tamagui/lucide-icons';

export default function ChildLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#0D9488',
      tabBarInactiveTintColor: '#64748B',
      tabBarStyle: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E2E8F0',
        height: 60,
        paddingBottom: 8,
        paddingTop: 8,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '600'
      }
    }}>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={20} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="wallet" 
        options={{ 
          title: 'Wallet',
          tabBarIcon: ({ color }) => <Wallet size={20} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="pay" 
        options={{ 
          title: 'Scan',
          tabBarIcon: ({ color }) => <QrCode size={20} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="activity" 
        options={{ 
          title: 'Activity',
          tabBarIcon: ({ color }) => <ClipboardList size={20} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="savings" 
        options={{ 
          href: null 
        }} 
      />
      <Tabs.Screen 
        name="notifications" 
        options={{ 
          href: null 
        }} 
      />
    </Tabs>
  );
}
