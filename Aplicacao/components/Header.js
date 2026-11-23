import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_DARK_SUBTLE,
  COLOR_PRIMARY_ORANGE,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_LIGHT,
  COLOR_TEXT_LIGHT_MUTED,
  COLOR_BG_MAIN,
  COLOR_BG_SECONDARY,
  COLOR_BORDER,
} from '../styles/color';
import { ChevronDownIcon } from './Icons';

const logoHeader = require('../../Imagens/VetoraLogo-EscuraComBG.png');

export const NAV_ITEMS = [
  { key: 'Dashboard', label: 'Dashboard', headerTitle: 'Dashboard' },
  { key: 'Ferramentas', label: 'Ferramentas', headerTitle: 'Ferramentas' },
  { key: 'DetalhesFerramenta', label: 'Detalhes da ferramenta', headerTitle: 'Detalhes da ferramenta' },
  { key: 'Alugueis', label: 'Aluguéis', headerTitle: 'Aluguéis' },
  { key: 'Historico', label: 'Histórico', headerTitle: 'Histórico' },
  { key: 'Configuracoes', label: 'Configurações', headerTitle: 'Configurações' },
  { key: 'ContactarNos', label: 'Contactar-nos', headerTitle: 'Contactar-nos' },
];

export default function Header({ currentScreen, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentItem =
    NAV_ITEMS.find((item) => item.key === currentScreen) || NAV_ITEMS[0];

  const handleSelect = (screenKey) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(screenKey);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        {/* Top Row: Logo + Avatar PS + Hamburger */}
        <View style={styles.topRow}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => handleSelect('Dashboard')}
            style={styles.logoTouchable}
          >
            <Image source={logoHeader} style={styles.logo} resizeMode="contain" />
          </TouchableOpacity>

          <View style={styles.rightControls}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => handleSelect('Configuracoes')}
              style={styles.avatarCircle}
            >
              <Text style={styles.avatarText}>PS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setMenuOpen(!menuOpen)}
              style={styles.hamburgerButton}
              accessibilityLabel="Menu"
            >
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Sub-bar: Current Screen Name + "Ir para v" */}
        <View style={styles.subRow}>
          <Text style={styles.screenTitle}>{currentItem.headerTitle}</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setMenuOpen(!menuOpen)}
            style={styles.irParaButton}
          >
            <Text style={styles.irParaText}>Ir para</Text>
            <View style={styles.chevronWrap}>
              <ChevronDownIcon size={14} color={COLOR_TEXT_LIGHT_MUTED} strokeWidth={1.8} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown Navigation Menu when "Ir para" or Hamburger is clicked */}
      {menuOpen && (
        <View style={styles.dropdownMenu}>
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === currentScreen;
            return (
              <TouchableOpacity
                key={item.key}
                activeOpacity={0.75}
                onPress={() => handleSelect(item.key)}
                style={[styles.dropdownItem, isActive && styles.dropdownItemActive]}
              >
                <Text
                  style={[
                    styles.dropdownItemText,
                    isActive && styles.dropdownItemTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 100,
    backgroundColor: COLOR_PRIMARY_DARK,
  },
  headerContainer: {
    backgroundColor: COLOR_PRIMARY_DARK,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 14,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 54,
  },
  logoTouchable: {
    justifyContent: 'center',
    marginLeft: -8,
  },
  logo: {
    width: 168,
    height: 46,
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR_PRIMARY_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  hamburgerButton: {
    marginLeft: 18,
    paddingVertical: 6,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    height: 24,
  },
  hamburgerLine: {
    width: 16,
    height: 1.6,
    backgroundColor: COLOR_TEXT_LIGHT,
    borderRadius: 1,
  },
  subRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingHorizontal: 2,
  },
  screenTitle: {
    color: COLOR_TEXT_LIGHT,
    fontSize: 15,
    fontWeight: '700',
  },
  irParaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  irParaText: {
    color: COLOR_TEXT_LIGHT_MUTED,
    fontSize: 13,
    fontWeight: '400',
  },
  chevronWrap: {
    marginLeft: 6,
    marginTop: 1,
  },
  dropdownMenu: {
    backgroundColor: COLOR_BG_MAIN,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 2,
  },
  dropdownItemActive: {
    backgroundColor: COLOR_BG_SECONDARY,
  },
  dropdownItemText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: '500',
  },
  dropdownItemTextActive: {
    fontWeight: '700',
  },
});
