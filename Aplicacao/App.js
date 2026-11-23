import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLOR_BG_MAIN, COLOR_PRIMARY_DARK } from './styles/color';

import DashboardScreen from './screens/DashboardScreen';
import FerramentasScreen from './screens/FerramentasScreen';
import DetalhesFerramentaScreen from './screens/DetalhesFerramentaScreen';
import AlugueisScreen from './screens/AlugueisScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import ConfiguracoesScreen from './screens/ConfiguracoesScreen';
import ContactarNosScreen from './screens/ContactarNosScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Dashboard':
        return <DashboardScreen onNavigate={setCurrentScreen} />;
      case 'Ferramentas':
        return <FerramentasScreen onNavigate={setCurrentScreen} />;
      case 'DetalhesFerramenta':
        return <DetalhesFerramentaScreen onNavigate={setCurrentScreen} />;
      case 'Alugueis':
        return <AlugueisScreen onNavigate={setCurrentScreen} />;
      case 'Historico':
        return <HistoricoScreen onNavigate={setCurrentScreen} />;
      case 'Configuracoes':
        return <ConfiguracoesScreen onNavigate={setCurrentScreen} />;
      case 'ContactarNos':
        return <ContactarNosScreen onNavigate={setCurrentScreen} />;
      default:
        return <DashboardScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.topSafeAreaFill}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLOR_PRIMARY_DARK}
        />
        <SafeAreaView style={styles.safeContainer} edges={['top']}>
          <View style={styles.mainViewport}>{renderScreen()}</View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  topSafeAreaFill: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_DARK,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_DARK,
  },
  mainViewport: {
    flex: 1,
    backgroundColor: COLOR_BG_MAIN,
    ...(Platform.OS === 'web'
      ? {
          maxWidth: 440,
          width: '100%',
          alignSelf: 'center',
        }
      : {}),
  },
});
