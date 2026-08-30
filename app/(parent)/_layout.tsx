// @ts-nocheck
import React from 'react';
import { Tabs } from 'expo-router';
import { Theme } from 'tamagui';
import { useAppStore } from '../../src/store/useAppStore';
import { Shield, Home, Users, BarChart3, Clock, Lock, Settings } from '@tamagui/lucide-icons';

export default function ParentLayout() {
  const { parent } = useAppStore();

  return (
    <Theme name="dark">
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6366F1', // Indigo accent
        tabBarInactiveTintColor: '#94A3B8', // Secondary muted text
        tabBarStyle: {
          backgroundColor: '#121124', // Premium dark card navy
          borderTopWidth: 1,
          borderTopColor: '#2E2D4A', // Premium dark border
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
          name="dashboard" 
          options={{ 
            title: 'Home',
            tabBarIcon: ({ color }) => <Home size={20} color={color} />
          }} 
        />
        <Tabs.Screen 
          name="children" 
          options={{ 
            title: 'Children',
            tabBarIcon: ({ color }) => <Users size={20} color={color} />
          }} 
        />
        <Tabs.Screen 
          name="analytics" 
          options={{ 
            title: 'Analytics',
            tabBarIcon: ({ color }) => <BarChart3 size={20} color={color} />
          }} 
        />
        <Tabs.Screen 
          name="approvals" 
          options={{ 
            title: 'Approvals',
            tabBarIcon: ({ color }) => <Clock size={20} color={color} />
          }} 
        />
        <Tabs.Screen 
          name="transactions" 
          options={{ 
            title: 'Ledger',
            tabBarIcon: ({ color }) => <Shield size={20} color={color} />
          }} 
        />
        <Tabs.Screen 
          name="governance" 
          options={{ 
            title: 'Rules',
            tabBarIcon: ({ color }) => <Lock size={20} color={color} />
          }} 
        />
        <Tabs.Screen 
          name="settings" 
          options={{ 
            title: 'Settings',
            tabBarIcon: ({ color }) => <Settings size={20} color={color} />
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
    </Theme>
  );
}
