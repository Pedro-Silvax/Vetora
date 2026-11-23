import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  COLOR_BG_MAIN,
  COLOR_BG_SECONDARY,
  COLOR_PRIMARY_DARK,
  COLOR_BADGE_DARK,
  COLOR_PRIMARY_ORANGE,
  COLOR_BORDER,
  COLOR_BORDER_SOFT,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_PLACEHOLDER,
  COLOR_TEXT_DISABLED,
  COLOR_TEXT_LIGHT,
} from '../styles/color';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BellIcon,
  CalendarIcon,
  CheckCircleOutlineIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightSmallIcon,
  ClockCircleOutlineIcon,
  GridIcon,
  InfoCircleIcon,
  ListIcon,
  SearchCircleIcon,
} from '../components/Icons';

const ticoTicoImg = require('../../Imagens/Ferramentas/TicoTico.png');

const TOOL_UNITS = [
  { id: '01', badge: 'UNIDADE 01', available: true },
  { id: '02', badge: 'UNIDADE 02', available: true },
  { id: '03', badge: 'UNIDADE 03', available: true },
  { id: '04', badge: 'UNIDADE 04', available: true },
  { id: '05', badge: 'UNIDADE 05', available: false },
];

export default function FerramentasScreen({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [corteChecked, setCorteChecked] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const handleClearFilters = () => {
    setAvailabilityFilter('all');
    setCorteChecked(false);
    setSearchQuery('');
    setPickupDate('');
    setReturnDate('');
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header currentScreen="Ferramentas" onNavigate={onNavigate} />

      {/* Orange Hero Banner */}
      <View style={styles.heroSection}>
        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumbText}>Início</Text>
          <View style={styles.breadcrumbArrow}>
            <ChevronRightSmallIcon size={11} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.breadcrumbText}>Ferramentas</Text>
        </View>

        <Text style={styles.heroTitle}>Ferramentas{'\n'}Disponíveis</Text>
        <Text style={styles.heroSubtitle}>
          A ferramenta certa para o seu próximo projeto.{'\n'}Alugue só pelo
          tempo de que precisa.
        </Text>

        {/* Stats Row inside Hero */}
        <View style={styles.heroStatsRow}>
          <View style={styles.heroStatCol}>
            <Text style={styles.heroStatNumber}>05</Text>
            <Text style={styles.heroStatLabel}>ferramentas no catálogo</Text>
          </View>
          <View style={styles.heroStatCol}>
            <Text style={styles.heroStatNumber}>04</Text>
            <Text style={styles.heroStatLabel}>disponíveis agora</Text>
          </View>
        </View>

        {/* Search Card inside Hero */}
        <View style={styles.searchCard}>
          <Text style={styles.fieldLabel}>
            Pesquisar ferramenta ou tipo de trabalho
          </Text>
          <View style={styles.inputBox}>
            <SearchCircleIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Pesquisar ferramenta"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.fieldLabelSpaced]}>
            Data de levantamento
          </Text>
          <View style={styles.inputBox}>
            <CalendarIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={pickupDate}
              onChangeText={setPickupDate}
              placeholder="Selecionar data"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.fieldLabelSpaced]}>
            Data de devolução
          </Text>
          <View style={styles.inputBox}>
            <CalendarIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={returnDate}
              onChangeText={setReturnDate}
              placeholder="Selecionar data"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInput}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.searchButton}
          >
            <Text style={styles.searchButtonText}>Pesquisar</Text>
            <View style={styles.btnIconRight}>
              <ArrowRightIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Filters Card */}
        <View style={styles.filtersCard}>
          <View style={styles.filtersHeaderRow}>
            <Text style={styles.filtersTitle}>Filtros</Text>
            <TouchableOpacity activeOpacity={0.75} onPress={handleClearFilters}>
              <Text style={styles.clearLink}>Limpar</Text>
            </TouchableOpacity>
          </View>

          {/* Disponibilidade */}
          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Disponibilidade</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setAvailabilityFilter('all')}
              style={styles.checkboxRow}
            >
              <View
                style={[
                  styles.checkboxBase,
                  availabilityFilter === 'all' && styles.checkboxChecked,
                ]}
              >
                {availabilityFilter === 'all' && (
                  <CheckIcon size={13} color={COLOR_TEXT_LIGHT} strokeWidth={2.4} />
                )}
              </View>
              <Text style={styles.checkboxLabel}>Todas as ferramentas</Text>
              <Text style={styles.checkboxCount}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setAvailabilityFilter('available')}
              style={styles.checkboxRow}
            >
              <View
                style={[
                  styles.checkboxBase,
                  availabilityFilter === 'available' && styles.checkboxChecked,
                ]}
              >
                {availabilityFilter === 'available' && (
                  <CheckIcon size={13} color={COLOR_TEXT_LIGHT} strokeWidth={2.4} />
                )}
              </View>
              <Text style={styles.checkboxLabel}>Disponíveis agora</Text>
              <Text style={styles.checkboxCount}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setAvailabilityFilter('rented')}
              style={styles.checkboxRow}
            >
              <View
                style={[
                  styles.checkboxBase,
                  availabilityFilter === 'rented' && styles.checkboxChecked,
                ]}
              >
                {availabilityFilter === 'rented' && (
                  <CheckIcon size={13} color={COLOR_TEXT_LIGHT} strokeWidth={2.4} />
                )}
              </View>
              <Text style={styles.checkboxLabel}>Alugadas / sem estoque</Text>
              <Text style={styles.checkboxCount}>1</Text>
            </TouchableOpacity>
          </View>

          {/* Tipo de trabalho */}
          <View style={styles.filterSection}>
            <Text style={styles.filterSectionTitle}>Tipo de trabalho</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setCorteChecked(!corteChecked)}
              style={styles.checkboxRow}
            >
              <View
                style={[
                  styles.checkboxBase,
                  corteChecked && styles.checkboxChecked,
                ]}
              >
                {corteChecked && (
                  <CheckIcon size={13} color={COLOR_TEXT_LIGHT} strokeWidth={2.4} />
                )}
              </View>
              <Text style={styles.checkboxLabel}>Corte e serragem</Text>
              <Text style={styles.checkboxCount}>5</Text>
            </TouchableOpacity>

            <View style={styles.checkboxRow}>
              <View style={[styles.checkboxBase, styles.checkboxDisabled]} />
              <Text style={styles.checkboxLabelDisabled}>Perfuração</Text>
              <Text style={styles.checkboxCountDisabled}>0</Text>
            </View>

            <View style={styles.checkboxRow}>
              <View style={[styles.checkboxBase, styles.checkboxDisabled]} />
              <Text style={styles.checkboxLabelDisabled}>Desbaste</Text>
              <Text style={styles.checkboxCountDisabled}>0</Text>
            </View>

            <View style={styles.checkboxRow}>
              <View style={[styles.checkboxBase, styles.checkboxDisabled]} />
              <Text style={styles.checkboxLabelDisabled}>Trabalho manual</Text>
              <Text style={styles.checkboxCountDisabled}>0</Text>
            </View>
          </View>

          {/* Preço por dia */}
          <View style={styles.priceSection}>
            <Text style={styles.filterSectionTitle}>Preço por dia</Text>

            <View style={styles.minMaxRow}>
              <View style={[styles.minMaxCol, styles.minCol]}>
                <Text style={styles.minMaxLabel}>Mínimo</Text>
                <View style={styles.priceBox}>
                  <Text style={styles.priceBoxText}>€ 0</Text>
                </View>
              </View>

              <View style={styles.minMaxCol}>
                <Text style={styles.minMaxLabel}>Máximo</Text>
                <View style={styles.priceBox}>
                  <Text style={styles.priceBoxText}>€ 20</Text>
                </View>
              </View>
            </View>

            {/* Range Slider */}
            <View style={styles.sliderContainer}>
              <View style={styles.sliderThumb} />
              <View style={styles.sliderTrackActive} />
              <View style={styles.sliderThumb} />
            </View>

            {/* Caução Dropdown */}
            <Text style={styles.caucaoLabel}>Caução</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.selectBox}>
              <Text style={styles.selectBoxText}>Qualquer valor</Text>
              <ChevronDownIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </TouchableOpacity>

            {/* Info Box */}
            <View style={styles.infoCalloutBox}>
              <View style={styles.infoIconWrap}>
                <InfoCircleIcon size={17} color={COLOR_TEXT_PRIMARY} />
              </View>
              <View style={styles.infoTextWrap}>
                <Text style={styles.infoTitle}>Informação do aluguel</Text>
                <Text style={styles.infoDescription}>
                  Escolha as datas para consultar a disponibilidade no período do
                  seu projeto.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Results Header & Sorting */}
        <View style={styles.resultsHeaderBlock}>
          <Text style={styles.resultsCountTitle}>5 ferramentas</Text>
          <Text style={styles.resultsCountSub}>4 disponíveis · 1 alugada</Text>

          <Text style={styles.sortByLabel}>Ordenar por</Text>
          <View style={styles.sortControlsRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.sortDropdown}>
              <Text style={styles.sortDropdownText}>Relevância</Text>
              <ChevronDownIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </TouchableOpacity>

            <View style={styles.viewToggleGroup}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setViewMode('grid')}
                style={[
                  styles.viewToggleBtn,
                  viewMode === 'grid' && styles.viewToggleBtnActive,
                ]}
              >
                <GridIcon
                  size={15}
                  color={
                    viewMode === 'grid' ? COLOR_TEXT_LIGHT : COLOR_TEXT_PRIMARY
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setViewMode('list')}
                style={[
                  styles.viewToggleBtn,
                  viewMode === 'list' && styles.viewToggleBtnActive,
                ]}
              >
                <ListIcon
                  size={15}
                  color={
                    viewMode === 'list' ? COLOR_TEXT_LIGHT : COLOR_TEXT_PRIMARY
                  }
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.allToolsCaption}>Todas as ferramentas</Text>
          <Text style={styles.priceNoticeCaption}>
            Preço de aluguel por dia · Caução indicada à parte
          </Text>
        </View>

        {/* 5 Tool Unit Cards */}
        {TOOL_UNITS.map((unit) => (
          <View key={unit.id} style={styles.toolCard}>
            <View style={styles.toolImageContainer}>
              <View style={styles.unitBadge}>
                <Text style={styles.unitBadgeText}>{unit.badge}</Text>
              </View>
              <Image
                source={ticoTicoImg}
                style={[
                  styles.toolImage,
                  !unit.available && styles.toolImageDimmed,
                ]}
                resizeMode="contain"
              />
            </View>

            <View style={styles.toolCardBody}>
              <View style={styles.availabilityRow}>
                {unit.available ? (
                  <>
                    <CheckCircleOutlineIcon size={14} color={COLOR_TEXT_PRIMARY} />
                    <Text style={styles.availabilityText}>Disponível agora</Text>
                  </>
                ) : (
                  <>
                    <ClockCircleOutlineIcon size={14} color={COLOR_TEXT_PRIMARY} />
                    <Text style={styles.availabilityText}>
                      Alugada · Sem estoque
                    </Text>
                  </>
                )}
              </View>

              <Text style={styles.toolName}>Serra tico tico</Text>
              <Text style={styles.toolCategory}>Corte e serragem · Elétrica</Text>

              <View style={styles.priceRow}>
                <View style={styles.priceLeft}>
                  <Text style={styles.priceAmount}>€5</Text>
                  <Text style={styles.priceUnit}>/Dia</Text>
                </View>
                <Text style={styles.depositAmount}>€35 Caução</Text>
              </View>

              {unit.available ? (
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => onNavigate('DetalhesFerramenta')}
                  style={styles.verMaisButton}
                >
                  <Text style={styles.verMaisButtonText}>Ver mais</Text>
                  <View style={styles.btnIconRight}>
                    <ArrowUpRightIcon size={16} color={COLOR_TEXT_PRIMARY} />
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onNavigate('DetalhesFerramenta')}
                  style={styles.consultarDispButton}
                >
                  <Text style={styles.consultarDispButtonText}>
                    Consultar disponibilidade
                  </Text>
                  <View style={styles.btnIconRight}>
                    <BellIcon size={15} color={COLOR_TEXT_PRIMARY} />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}

        {/* Bottom Help Callout Card */}
        <View style={styles.nextProjectCard}>
          <Text style={styles.nextProjectTitle}>
            Qual é o seu próximo projeto?
          </Text>
          <Text style={styles.nextProjectSub}>
            Se precisa de ajuda para escolher a ferramenta ou esclarecer o
            aluguel, fale connosco.
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('ContactarNos')}
            style={styles.contactButton}
          >
            <Text style={styles.contactButtonText}>Contactar-nos</Text>
            <View style={styles.btnIconRight}>
              <ArrowUpRightIcon size={16} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>

          <Text style={styles.nextProjectSlogan}>
            Menos compras. Mais projetos.
          </Text>
        </View>

        {/* Pagination Row */}
        <View style={styles.paginationRow}>
          <Text style={styles.paginationInfoText}>
            A mostrar 5 de 5 ferramentas
          </Text>
          <View style={styles.pageNumberBox}>
            <Text style={styles.pageNumberText}>1</Text>
          </View>
        </View>
      </View>

      <Footer currentScreen="Ferramentas" onNavigate={onNavigate} />
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
    lineHeight: 34,
    marginTop: 12,
  },
  heroSubtitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    lineHeight: 19,
    marginTop: 10,
  },
  heroStatsRow: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 18,
  },
  heroStatCol: {
    flex: 1,
  },
  heroStatNumber: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 24,
    fontWeight: '700',
  },
  heroStatLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12,
    marginTop: 3,
  },
  searchCard: {
    backgroundColor: COLOR_BG_MAIN,
    borderRadius: 12,
    padding: 16,
  },
  fieldLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12.5,
    fontWeight: '700',
    marginBottom: 8,
  },
  fieldLabelSpaced: {
    marginTop: 14,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 44,
    paddingHorizontal: 14,
    backgroundColor: COLOR_BG_MAIN,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    paddingVertical: 0,
  },
  searchButton: {
    backgroundColor: COLOR_PRIMARY_ORANGE,
    borderRadius: 6,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  searchButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  btnIconRight: {
    marginLeft: 10,
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  filtersCard: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    padding: 20,
  },
  filtersHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
  },
  filtersTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '700',
  },
  clearLink: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  filterSection: {
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
  },
  filterSectionTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
    marginBottom: 14,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxBase: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    backgroundColor: COLOR_BG_MAIN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLOR_PRIMARY_DARK,
    borderColor: COLOR_PRIMARY_DARK,
  },
  checkboxDisabled: {
    borderColor: COLOR_BORDER_SOFT,
  },
  checkboxLabel: {
    flex: 1,
    marginLeft: 10,
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
  },
  checkboxCount: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13,
  },
  checkboxLabelDisabled: {
    flex: 1,
    marginLeft: 10,
    color: COLOR_TEXT_PLACEHOLDER,
    fontSize: 13.5,
  },
  checkboxCountDisabled: {
    color: COLOR_TEXT_DISABLED,
    fontSize: 13,
  },
  priceSection: {
    paddingTop: 16,
  },
  minMaxRow: {
    flexDirection: 'row',
  },
  minMaxCol: {
    flex: 1,
  },
  minCol: {
    marginRight: 12,
  },
  minMaxLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 6,
  },
  priceBox: {
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: 14,
    backgroundColor: COLOR_BG_MAIN,
  },
  priceBoxText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 16,
  },
  sliderThumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: COLOR_PRIMARY_DARK,
    backgroundColor: COLOR_BG_MAIN,
  },
  sliderTrackActive: {
    flex: 1,
    height: 3,
    backgroundColor: COLOR_PRIMARY_ORANGE,
  },
  caucaoLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12.5,
    fontWeight: '700',
    marginBottom: 8,
  },
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 44,
    paddingHorizontal: 14,
    backgroundColor: COLOR_BG_MAIN,
  },
  selectBoxText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
  },
  infoCalloutBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 8,
    padding: 14,
    marginTop: 16,
  },
  infoIconWrap: {
    marginTop: 1,
  },
  infoTextWrap: {
    flex: 1,
    marginLeft: 10,
  },
  infoTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13,
    fontWeight: '700',
  },
  infoDescription: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 4,
  },
  resultsHeaderBlock: {
    marginTop: 22,
  },
  resultsCountTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18.5,
    fontWeight: '700',
  },
  resultsCountSub: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13,
    marginTop: 5,
  },
  sortByLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12.5,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 6,
  },
  sortControlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortDropdown: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR_BG_MAIN,
    marginRight: 10,
  },
  sortDropdownText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
  },
  viewToggleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    padding: 3,
    height: 44,
    backgroundColor: COLOR_BG_MAIN,
  },
  viewToggleBtn: {
    width: 38,
    height: 36,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewToggleBtnActive: {
    backgroundColor: COLOR_PRIMARY_DARK,
  },
  allToolsCaption: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13,
    marginTop: 12,
  },
  priceNoticeCaption: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    marginTop: 4,
  },
  toolCard: {
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLOR_BG_MAIN,
    marginTop: 16,
  },
  toolImageContainer: {
    backgroundColor: COLOR_PRIMARY_DARK,
    height: 196,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  unitBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: COLOR_BADGE_DARK,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  unitBadgeText: {
    color: COLOR_TEXT_LIGHT,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  toolImage: {
    width: 142,
    height: 142,
  },
  toolImageDimmed: {
    opacity: 0.55,
  },
  toolCardBody: {
    padding: 20,
    backgroundColor: COLOR_BG_MAIN,
  },
  availabilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availabilityText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 6,
  },
  toolName: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18.5,
    fontWeight: '700',
    marginTop: 10,
  },
  toolCategory: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13,
    marginTop: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  priceLeft: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceAmount: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 22,
    fontWeight: '700',
  },
  priceUnit: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    marginLeft: 2,
  },
  depositAmount: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
  },
  verMaisButton: {
    backgroundColor: COLOR_PRIMARY_ORANGE,
    borderRadius: 6,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  verMaisButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  consultarDispButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  consultarDispButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  nextProjectCard: {
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 20,
    marginTop: 18,
  },
  nextProjectTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '700',
  },
  nextProjectSub: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    lineHeight: 19,
    marginTop: 8,
  },
  contactButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  contactButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  nextProjectSlogan: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12,
    marginTop: 12,
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  paginationInfoText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
  },
  pageNumberBox: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: COLOR_PRIMARY_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageNumberText: {
    color: COLOR_TEXT_LIGHT,
    fontSize: 13.5,
    fontWeight: '700',
  },
});
