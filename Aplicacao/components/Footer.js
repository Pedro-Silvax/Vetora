import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  COLOR_BG_MAIN,
  COLOR_BG_SECONDARY,
  COLOR_BORDER,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
} from '../styles/color';

const FOOTER_ROWS = [
  [
    { key: 'Dashboard', label: 'Dashboard' },
    { key: 'Ferramentas', label: 'Ferramentas' },
  ],
  [
    { key: 'DetalhesFerramenta', label: 'Detalhes da ferramenta' },
    { key: 'Alugueis', label: 'Aluguéis' },
  ],
  [
    { key: 'Historico', label: 'Histórico' },
    { key: 'ContactarNos', label: 'Contactar-nos' },
  ],
  [
    { key: 'Configuracoes', label: 'Configurações' },
    null,
  ],
];

export default function Footer({ currentScreen, onNavigate }) {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.brandTitle}>VETORA</Text>
      <Text style={styles.tagline}>A ferramenta certa. Pelo tempo certo.</Text>

      <View style={styles.linksGrid}>
        {FOOTER_ROWS.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.gridRow}>
            {row.map((item, colIndex) => {
              if (!item) {
                return <View key={`empty-${colIndex}`} style={styles.gridCol} />;
              }
              const isActive = currentScreen === item.key;
              return (
                <TouchableOpacity
                  key={item.key}
                  activeOpacity={0.75}
                  onPress={() => onNavigate && onNavigate(item.key)}
                  style={[styles.gridCol, isActive && styles.gridColActive]}
                >
                  <Text
                    style={[
                      styles.linkText,
                      isActive && styles.linkTextActive,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomLinksRow}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onNavigate && onNavigate('Ferramentas')}
        >
          <Text style={styles.bottomLinkText}>Como alugar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onNavigate && onNavigate('ContactarNos')}
          style={styles.secondBottomLink}
        >
          <Text style={styles.bottomLinkText}>Condições de aluguel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: COLOR_BG_MAIN,
    borderTopWidth: 1,
    borderTopColor: COLOR_BORDER,
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 24,
    marginTop: 20,
  },
  brandTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  tagline: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13,
    marginTop: 10,
    marginBottom: 18,
  },
  linksGrid: {
    marginTop: 2,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  gridCol: {
    flex: 1,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  gridColActive: {
    backgroundColor: COLOR_BG_SECONDARY,
  },
  linkText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '400',
  },
  linkTextActive: {
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: COLOR_BORDER,
    marginTop: 18,
    marginBottom: 18,
  },
  bottomLinksRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomLinkText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13,
    fontWeight: '400',
  },
  secondBottomLink: {
    marginLeft: 18,
  },
});
