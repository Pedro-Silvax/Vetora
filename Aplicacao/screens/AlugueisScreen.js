import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  COLOR_BG_MAIN,
  COLOR_BG_SECONDARY,
  COLOR_PRIMARY_ORANGE,
  COLOR_BORDER,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
} from '../styles/color';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  ChatBubbleIcon,
  ChevronRightSmallIcon,
  ExtensionBadgeIcon,
  InfoCircleIcon,
} from '../components/Icons';

const furadeiraImg = require('../../Imagens/Ferramentas/FuradeiraEletrica.png');

export default function AlugueisScreen({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('em_curso');

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header currentScreen="Alugueis" onNavigate={onNavigate} />

      {/* Orange Hero Banner */}
      <View style={styles.heroSection}>
        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumbText}>Início</Text>
          <View style={styles.breadcrumbArrow}>
            <ChevronRightSmallIcon size={11} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.breadcrumbText}>Aluguéis</Text>
        </View>

        <Text style={styles.heroTitle}>Os seus aluguéis</Text>
        <Text style={styles.heroSubtitle}>
          Acompanhe as ferramentas em uso, consulte os agendamentos e faça a
          gestão do aluguel.
        </Text>

        <View style={styles.heroStatsRow}>
          <View style={styles.heroStatItem}>
            <Text style={styles.heroStatNumber}>01</Text>
            <Text style={styles.heroStatLabel}>em curso</Text>
          </View>
          <View style={styles.heroStatItem}>
            <Text style={styles.heroStatNumber}>02</Text>
            <Text style={styles.heroStatLabel}>agendados</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Two Filter Tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setActiveTab('em_curso')}
            style={[
              styles.tabButton,
              styles.tabButtonLeft,
              activeTab === 'em_curso'
                ? styles.tabButtonActive
                : styles.tabButtonInactive,
            ]}
          >
            <Text style={styles.tabButtonText}>Em curso · 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setActiveTab('agendados')}
            style={[
              styles.tabButton,
              activeTab === 'agendados'
                ? styles.tabButtonActive
                : styles.tabButtonInactive,
            ]}
          >
            <Text style={styles.tabButtonText}>Agendados · 2</Text>
          </TouchableOpacity>
        </View>

        {/* Card: Em curso */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Em curso</Text>

          <View style={styles.toolRow}>
            <View style={styles.toolThumbBox}>
              <Image
                source={furadeiraImg}
                style={styles.furadeiraThumb}
                resizeMode="contain"
              />
            </View>
            <View style={styles.toolInfoCol}>
              <Text style={styles.statusSmallBold}>
                Em curso · conforme registro
              </Text>
              <Text style={styles.toolTitleLarge}>Furadeira elétrica</Text>
            </View>
          </View>

          <View style={styles.metaBlock}>
            <Text style={styles.metaLabel}>Duração informada</Text>
            <Text style={styles.metaValue}>3 dias</Text>

            <Text style={[styles.metaLabel, styles.metaLabelSpaced]}>
              Devolução · data informada
            </Text>
            <Text style={styles.metaValue}>25/10/2025 até 10:00</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => onNavigate('DetalhesFerramenta')}
            style={styles.orangePrimaryButton}
          >
            <Text style={styles.orangePrimaryButtonText}>Gerir aluguel</Text>
            <View style={styles.btnIconRight}>
              <ArrowRightIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('ContactarNos')}
            style={styles.outlineButton}
          >
            <Text style={styles.outlineButtonText}>Solicitar extensão</Text>
            <View style={styles.btnIconRight}>
              <ExtensionBadgeIcon color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>

          <View style={styles.cardDivider} />

          <Text style={styles.extraMetaText}>
            Início do período: não informado
          </Text>
          <Text style={[styles.extraMetaText, styles.extraMetaSpaced]}>
            Preço diário conhecido: €8,5 / dia
          </Text>
        </View>

        {/* Card: Agendados */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Agendados</Text>
          <Text style={styles.cardSubtitle}>
            Consulte os detalhes antes do levantamento.
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('DetalhesFerramenta')}
            style={styles.scheduledItemBox}
          >
            <View style={styles.scheduledIconWrap}>
              <CalendarIcon size={16} color={COLOR_TEXT_PRIMARY} />
            </View>
            <View style={styles.scheduledTextWrap}>
              <Text style={styles.scheduledItemTitle}>Rebarbadora</Text>
              <Text style={styles.scheduledItemDate}>
                31/10/2026 às 10:00 · data informada
              </Text>
            </View>
            <ArrowRightIcon size={14} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('DetalhesFerramenta')}
            style={styles.scheduledItemBox}
          >
            <View style={styles.scheduledIconWrap}>
              <CalendarIcon size={16} color={COLOR_TEXT_PRIMARY} />
            </View>
            <View style={styles.scheduledTextWrap}>
              <Text style={styles.scheduledItemTitle}>Martelo</Text>
              <Text style={styles.scheduledItemDate}>
                31/10/2026 às 10:00 · data informada
              </Text>
            </View>
            <ArrowRightIcon size={14} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>

          <Text style={styles.scheduledFootnote}>
            Duração e data de devolução não informadas nos agendamentos.
          </Text>
        </View>

        {/* Card: Precisa de mais tempo? */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Precisa de mais tempo?</Text>
          <Text style={styles.cardSubtitle}>
            Envie um pedido sobre a extensão do período. Uma solicitação não
            altera automaticamente o aluguel.
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('ContactarNos')}
            style={[styles.outlineButton, styles.mt14]}
          >
            <Text style={styles.outlineButtonText}>
              Contactar sobre o aluguel
            </Text>
            <View style={styles.btnIconRight}>
              <ChatBubbleIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Callout Card: Aluguéis anteriores */}
        <View style={styles.previousRentalsCard}>
          <Text style={styles.cardTitle}>Aluguéis anteriores</Text>
          <Text style={styles.previousSmallSub}>
            Aluguéis anteriores e conclusões
          </Text>
          <Text style={styles.previousBodyText}>
            Os registros anteriores ficam no Histórico. Quando o estado não é
            conhecido, aparece como não informado.
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('Historico')}
            style={[styles.outlineButton, styles.mt14]}
          >
            <Text style={styles.outlineButtonText}>Consultar histórico</Text>
            <View style={styles.btnIconRight}>
              <ArrowUpRightIcon size={16} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Footer currentScreen="Alugueis" onNavigate={onNavigate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR_BG_MAIN,
  },
  contentContainer: {
    backgroundColor: COLOR_BG_MAIN,
  },
  heroSection: {
    backgroundColor: COLOR_PRIMARY_ORANGE,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  breadcrumbRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13,
  },
  breadcrumbArrow: {
    marginHorizontal: 6,
    marginTop: 1,
  },
  heroTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 28,
    fontWeight: '700',
    marginTop: 12,
  },
  heroSubtitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    lineHeight: 20,
    marginTop: 10,
  },
  heroStatsRow: {
    flexDirection: 'row',
    marginTop: 16,
  },
  heroStatItem: {
    marginRight: 36,
  },
  heroStatNumber: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 24,
    fontWeight: '700',
  },
  heroStatLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12.5,
    marginTop: 3,
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  tabsRow: {
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    height: 42,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonLeft: {
    marginRight: 10,
  },
  tabButtonActive: {
    backgroundColor: COLOR_PRIMARY_ORANGE,
  },
  tabButtonInactive: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
  },
  tabButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  card: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
  },
  cardTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18.5,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    lineHeight: 19,
    marginTop: 8,
  },
  toolRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  toolThumbBox: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: COLOR_BG_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  furadeiraThumb: {
    width: 82,
    height: 82,
  },
  toolInfoCol: {
    flex: 1,
    marginLeft: 16,
  },
  statusSmallBold: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: '700',
  },
  toolTitleLarge: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 6,
  },
  metaBlock: {
    marginTop: 16,
  },
  metaLabel: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
  },
  metaLabelSpaced: {
    marginTop: 12,
  },
  metaValue: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },
  orangePrimaryButton: {
    backgroundColor: COLOR_PRIMARY_ORANGE,
    borderRadius: 6,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  orangePrimaryButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  outlineButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  outlineButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  btnIconRight: {
    marginLeft: 10,
  },
  cardDivider: {
    height: 1,
    backgroundColor: COLOR_BORDER,
    marginVertical: 16,
  },
  extraMetaText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
  },
  extraMetaSpaced: {
    marginTop: 10,
  },
  confirmCalloutBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  infoIconWrap: {
    marginTop: 1,
  },
  infoTextWrap: {
    flex: 1,
    marginLeft: 12,
  },
  infoTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  infoDescription: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 6,
  },
  scheduledItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginTop: 12,
  },
  scheduledIconWrap: {
    marginRight: 12,
  },
  scheduledTextWrap: {
    flex: 1,
  },
  scheduledItemTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: '700',
  },
  scheduledItemDate: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    marginTop: 4,
  },
  scheduledFootnote: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 14,
  },
  previousRentalsCard: {
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 20,
    marginTop: 18,
  },
  previousSmallSub: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    marginTop: 6,
  },
  previousBodyText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    lineHeight: 19,
    marginTop: 12,
  },
  mt14: {
    marginTop: 14,
  },
});
