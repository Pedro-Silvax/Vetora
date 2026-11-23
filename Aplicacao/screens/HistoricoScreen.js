import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
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
  COLOR_TEXT_PLACEHOLDER,
  COLOR_TEXT_LIGHT,
} from '../styles/color';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightSmallIcon,
  DrillIcon,
  InfoCircleIcon,
  SearchCircleIcon,
  SlidersIcon,
  WrenchIcon,
} from '../components/Icons';

const HISTORY_RECORDS = [
  {
    id: '1',
    name: 'Rebarbadora elétrica',
    iconType: 'wrench',
    date: '31/10/2026',
    period: 'Não informado',
    status: 'Não informado',
  },
  {
    id: '2',
    name: 'Furadeira elétrica',
    iconType: 'drill',
    date: '31/10/2026',
    period: 'Não informado',
    status: 'Não informado',
  },
];

export default function HistoricoScreen({ onNavigate }) {
  const [toolFilter, setToolFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleClear = () => {
    setToolFilter('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header currentScreen="Historico" onNavigate={onNavigate} />

      {/* Orange Hero Banner */}
      <View style={styles.heroSection}>
        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumbText}>Início</Text>
          <View style={styles.breadcrumbArrow}>
            <ChevronRightSmallIcon size={11} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.breadcrumbText}>Histórico</Text>
        </View>

        <Text style={styles.heroTitle}>Histórico de aluguéis</Text>
        <Text style={styles.heroSubtitle}>
          Consulte os registros dos aluguéis que já fez e encontre os detalhes
          disponíveis.
        </Text>

        <Text style={styles.heroCountText}>02 registros na sua conta</Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => onNavigate('Ferramentas')}
          style={styles.heroButton}
        >
          <Text style={styles.heroButtonText}>Voltar ao catálogo</Text>
          <View style={styles.btnIconRight}>
            <ArrowRightIcon size={15} color={COLOR_TEXT_PRIMARY} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Card: Filtros do histórico */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Filtros do histórico</Text>

          <Text style={[styles.fieldLabel, styles.mt14]}>Ferramenta</Text>
          <View style={styles.inputBox}>
            <SearchCircleIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={toolFilter}
              onChangeText={setToolFilter}
              placeholder="Pesquisar por nome"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>
            Período do registro
          </Text>
          <View style={styles.inputBox}>
            <CalendarIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={startDate}
              onChangeText={setStartDate}
              placeholder="Data inicial"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>Até</Text>
          <View style={styles.inputBox}>
            <CalendarIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={endDate}
              onChangeText={setEndDate}
              placeholder="Data final"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>Estado</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.selectBox}>
            <Text style={styles.selectBoxText}>Todos os estados</Text>
            <ChevronDownIcon size={15} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.orangePrimaryButton}
          >
            <Text style={styles.orangePrimaryButtonText}>Aplicar filtros</Text>
            <View style={styles.btnIconRight}>
              <SlidersIcon size={16} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>

          <Text style={styles.filtersSummaryText}>
            Todos os períodos · Todos os estados
          </Text>

          <TouchableOpacity
            activeOpacity={0.75}
            onPress={handleClear}
            style={styles.clearLinkButton}
          >
            <Text style={styles.clearLinkText}>Limpar filtros</Text>
          </TouchableOpacity>
        </View>

        {/* Results Header & Sorting */}
        <View style={styles.resultsHeaderBlock}>
          <Text style={styles.resultsCountTitle}>2 registros encontrados</Text>

          <Text style={styles.sortByLabel}>Ordenar por</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.selectBox}>
            <Text style={styles.selectBoxText}>Data mais recente</Text>
            <ChevronDownIcon size={15} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>
        </View>

        {/* History Record Cards */}
        {HISTORY_RECORDS.map((record) => (
          <View key={record.id} style={styles.recordCard}>
            <View style={styles.recordHeaderRow}>
              <View style={styles.recordIconBox}>
                {record.iconType === 'wrench' ? (
                  <WrenchIcon size={18} color={COLOR_TEXT_PRIMARY} />
                ) : (
                  <DrillIcon size={18} color={COLOR_TEXT_PRIMARY} />
                )}
              </View>
              <Text style={styles.recordToolTitle}>{record.name}</Text>
            </View>

            <View style={styles.recordFieldBlock}>
              <Text style={styles.recordMetaCaption}>
                DATA INFORMADA · Data do registro
              </Text>
              <Text style={styles.recordDateValue}>{record.date}</Text>
            </View>

            <View style={styles.recordFieldBlock}>
              <Text style={styles.recordMetaCaption}>PERÍODO DE ALUGUEL</Text>
              <Text style={styles.recordPeriodValue}>{record.period}</Text>
            </View>

            <View style={styles.recordFieldBlock}>
              <Text style={styles.recordMetaCaption}>ESTADO</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>{record.status}</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onNavigate('DetalhesFerramenta')}
              style={styles.detailsOutlineButton}
            >
              <Text style={styles.detailsOutlineButtonText}>
                Consultar detalhes
              </Text>
              <View style={styles.btnIconRight}>
                <ArrowUpRightIcon size={16} color={COLOR_TEXT_PRIMARY} />
              </View>
            </TouchableOpacity>
          </View>
        ))}

        {/* Pagination Row */}
        <View style={styles.paginationRow}>
          <Text style={styles.paginationInfoText}>
            A mostrar 2 de 2 registros
          </Text>
          <View style={styles.pageNumberBox}>
            <Text style={styles.pageNumberText}>1</Text>
          </View>
        </View>

        {/* Info Callout: Como ler estes registros */}
        <View style={styles.howToReadBox}>
          <View style={styles.infoIconWrap}>
            <InfoCircleIcon size={17} color={COLOR_TEXT_PRIMARY} />
          </View>
          <View style={styles.infoTextWrap}>
            <Text style={styles.infoTitle}>Como ler estes registros</Text>
            <Text style={styles.infoDescription}>
              A data é a que consta no histórico da conta. O período e a
              conclusão dos aluguéis não foram informados; por isso, estes
              registros não são apresentados como concluídos.
            </Text>
          </View>
        </View>

        {/* Bottom CTA Card: Um novo projeto em vista? */}
        <View style={styles.newProjectCard}>
          <Text style={styles.cardTitle}>Um novo projeto em vista?</Text>
          <Text style={styles.newProjectSub}>
            Consulte as ferramentas e escolha o período de que precisa.
          </Text>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => onNavigate('Ferramentas')}
            style={[styles.orangePrimaryButton, styles.mt14]}
          >
            <Text style={styles.orangePrimaryButtonText}>
              Explorar ferramentas
            </Text>
            <View style={styles.btnIconRight}>
              <ArrowRightIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Footer currentScreen="Historico" onNavigate={onNavigate} />
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
  heroCountText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
    marginTop: 14,
  },
  heroButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderRadius: 6,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  heroButtonText: {
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
  card: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    padding: 20,
  },
  cardTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18.5,
    fontWeight: '700',
  },
  fieldLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12.5,
    fontWeight: '700',
    marginBottom: 8,
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
  filtersSummaryText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    marginTop: 14,
  },
  clearLinkButton: {
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  clearLinkText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  resultsHeaderBlock: {
    marginTop: 22,
  },
  resultsCountTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18.5,
    fontWeight: '700',
  },
  sortByLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12.5,
    fontWeight: '700',
    marginTop: 14,
    marginBottom: 8,
  },
  recordCard: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
  },
  recordHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
  },
  recordIconBox: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: COLOR_BG_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recordToolTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 14,
  },
  recordFieldBlock: {
    marginTop: 14,
  },
  recordMetaCaption: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 11.5,
  },
  recordDateValue: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },
  recordPeriodValue: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    marginTop: 4,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLOR_BG_SECONDARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginTop: 6,
  },
  statusBadgeText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: '700',
  },
  detailsOutlineButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  detailsOutlineButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
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
  howToReadBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 16,
    marginTop: 18,
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
  newProjectCard: {
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 20,
    marginTop: 18,
  },
  newProjectSub: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    lineHeight: 19,
    marginTop: 8,
  },
  mt14: {
    marginTop: 14,
  },
});
