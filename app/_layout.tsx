// @ts-nocheck
import React from 'react';
import { Stack } from 'expo-router';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../tamagui.config';
import { useAppStore } from '../src/store/useAppStore';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const { language } = useAppStore();

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Theme name="light">
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(parent)" />
          <Stack.Screen name="(child)" />
        </Stack>
      </Theme>
    </TamaguiProvider>
  );
}
