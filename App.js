import React, { useCallback } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fonteCarregada, fontError] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRotView = useCallback(async () => {
    if(fonteCarregada || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fonteCarregada, fontError]);
  
  if (!fonteCarregada && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRotView} style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}