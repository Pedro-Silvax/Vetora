import React from 'react';
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
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_ORANGE,
  COLOR_BORDER,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_LIGHT,
  COLOR_TEXT_LIGHT_MUTED,
} from '../styles/color';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronRightSmallIcon,
  ExtensionBadgeIcon,
} from '../components/Icons';

const furadeiraImg = require('../../Imagens/Ferramentas/FuradeiraEletrica.png');
const ticoTicoImg = require('../../Imagens/Ferramentas/TicoTico.png');

export default function DashboardScreen({ onNavigate }) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header currentScreen="Dashboard" onNavigate={onNavigate} />

      {/* Orange Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumbText}>Início</Text>
          <View style={styles.breadcrumbArrow}>
            <ChevronRightSmallIcon size={11} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.breadcrumbText}>Dashboard</Text>
        </View>

        <Text style={styles.heroTitle}>Olá, Pedro Silva.</Text>
        <Text style={styles.heroSubtitle}>
          Acompanhe os seus aluguéis e encontre a ferramenta para o próximo
          projeto.
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => onNavigate('Ferramentas')}
          style={styles.heroButton}
        >
          <Text style={styles.heroButtonText}>Explorar ferramentas</Text>
          <View style={styles.btnIconRight}>
            <ArrowRightIcon size={16} color={COLOR_TEXT_PRIMARY} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* 2x2 Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statsRow}>
            <View style={[styles.statCard, styles.statCardLeft]}>
              <Text style={styles.statNumber}>01</Text>
              <Text style={styles.statLabel}>aluguel em curso</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>02</Text>
              <Text style={styles.statLabel}>aluguéis agendados</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={[styles.statCard, styles.statCardLeft]}>
              <Text style={styles.statNumber}>02</Text>
              <Text style={styles.statLabel}>registros no histórico</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>04 / 05</Text>
              <Text style={styles.statLabel}>
                unidades disponíveis no catálogo
              </Text>
            </View>
          </View>
        </View>

        {/* Card: O seu aluguel em curso */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>O seu aluguel em curso</Text>
          <Text style={styles.cardSubtitle}>
            Duração e devolução conforme os dados da conta.
          </Text>

          <View style={styles.activeRentalToolRow}>
            <View style={styles.toolThumbBox}>
              <Image
                source={furadeiraImg}
                style={styles.furadeiraThumb}
                resizeMode="contain"
              />
            </View>
            <View style={styles.activeRentalToolInfo}>
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
            onPress={() => onNavigate('Alugueis')}
            style={styles.orangePrimaryButton}
          >
            <Text style={styles.orangePrimaryButtonText}>Gerir aluguel</Text>
            <View style={styles.btnIconRight}>
              <ArrowRightIcon size={16} color={COLOR_TEXT_PRIMARY} />
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

          <Text style={styles.cardFootnote}>
            A data de devolução é a informada no registro; confirme-a ao gerir o
            aluguel.
          </Text>
        </View>

        {/* Card: Aluguéis agendados */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Aluguéis agendados</Text>
          <Text style={styles.cardSubtitle}>
            Datas informadas nos agendamentos.
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('Alugueis')}
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
            onPress={() => onNavigate('Alugueis')}
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

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('Alugueis')}
            style={[styles.outlineButton, styles.mt6]}
          >
            <Text style={styles.outlineButtonText}>Ver agendamentos</Text>
            <View style={styles.btnIconRight}>
              <ArrowRightIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Card: Histórico recente */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Histórico recente</Text>
          <Text style={styles.cardSubtitle}>
            Os seus registros anteriores, num só lugar.
          </Text>

          <View style={styles.historyItemBlock}>
            <Text style={styles.historyToolName}>Rebarbadora elétrica</Text>
            <Text style={styles.historyDateText}>
              31/10/2026 · data do registro
            </Text>
            <View style={styles.historyStatusBadge}>
              <Text style={styles.historyStatusBadgeText}>
                Estado não informado
              </Text>
            </View>
          </View>

          <View style={styles.historyItemBlock}>
            <Text style={styles.historyToolName}>Furadeira elétrica</Text>
            <Text style={styles.historyDateText}>
              31/10/2026 · data do registro
            </Text>
            <View style={styles.historyStatusBadge}>
              <Text style={styles.historyStatusBadgeText}>
                Estado não informado
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('Historico')}
            style={[styles.outlineButton, styles.mt14]}
          >
            <Text style={styles.outlineButtonText}>Consultar histórico</Text>
            <View style={styles.btnIconRight}>
              <ArrowRightIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Card: Featured Serra tico tico Showcase */}
        <View style={styles.featuredCard}>
          <View style={styles.featuredDarkSection}>
            <View style={styles.featuredTopRow}>
              <Image
                source={ticoTicoImg}
                style={styles.featuredTicoImage}
                resizeMode="contain"
              />
              <View style={styles.featuredInfoCol}>
                <Text style={styles.featuredCategory}>CORTE E SERRAGEM</Text>
                <Text style={styles.featuredTitle}>Serra tico tico</Text>
                <Text style={styles.featuredSpecs}>Black+Decker · 400W</Text>
                <Text style={styles.featuredPrice}>€5 / dia</Text>
              </View>
            </View>
            <Text style={styles.featuredDepositNote}>
              €35 de caução · indicada à parte
            </Text>
          </View>

          <View style={styles.featuredLightSection}>
            <Text style={styles.featuredUnitsAvailable}>
              4 unidades disponíveis
            </Text>
            <Text style={styles.featuredUnitsSub}>
              Unidade 05 alugada / sem estoque
            </Text>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => onNavigate('Ferramentas')}
              style={[styles.orangePrimaryButton, styles.mt14]}
            >
              <Text style={styles.orangePrimaryButtonText}>Ver catálogo</Text>
              <View style={styles.btnIconRight}>
                <ArrowRightIcon size={15} color={COLOR_TEXT_PRIMARY} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Footer currentScreen="Dashboard" onNavigate={onNavigate} />
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
    fontWeight: '400',
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
    letterSpacing: -0.3,
  },
  heroSubtitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  heroButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderRadius: 6,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  heroButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: '700',
  },
  btnIconRight: {
    marginLeft: 10,
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  statsGrid: {
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 96,
    justifyContent: 'flex-start',
  },
  statCardLeft: {
    marginRight: 12,
  },
  statNumber: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 24,
    fontWeight: '700',
  },
  statLabel: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    lineHeight: 17,
    marginTop: 6,
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
  activeRentalToolRow: {
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
  activeRentalToolInfo: {
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
  cardFootnote: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 14,
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
  historyItemBlock: {
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
  },
  historyToolName: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: '700',
  },
  historyDateText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    marginTop: 5,
  },
  historyStatusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLOR_BG_SECONDARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginTop: 8,
  },
  historyStatusBadgeText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: '700',
  },
  featuredCard: {
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLOR_BG_MAIN,
    marginTop: 18,
  },
  featuredDarkSection: {
    backgroundColor: COLOR_PRIMARY_DARK,
    padding: 20,
  },
  featuredTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredTicoImage: {
    width: 110,
    height: 118,
  },
  featuredInfoCol: {
    flex: 1,
    marginLeft: 14,
  },
  featuredCategory: {
    color: COLOR_TEXT_LIGHT_MUTED,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  featuredTitle: {
    color: COLOR_TEXT_LIGHT,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6,
  },
  featuredSpecs: {
    color: COLOR_TEXT_LIGHT_MUTED,
    fontSize: 13,
    marginTop: 6,
  },
  featuredPrice: {
    color: COLOR_TEXT_LIGHT,
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
  },
  featuredDepositNote: {
    color: COLOR_TEXT_LIGHT_MUTED,
    fontSize: 12.5,
    marginTop: 14,
  },
  featuredLightSection: {
    backgroundColor: COLOR_BG_MAIN,
    padding: 20,
  },
  featuredUnitsAvailable: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: '700',
  },
  featuredUnitsSub: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    marginTop: 5,
  },
  mt6: {
    marginTop: 14,
  },
  mt14: {
    marginTop: 14,
  },
});
