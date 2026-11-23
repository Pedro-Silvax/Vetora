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
  COLOR_BG_DISABLED,
  COLOR_PRIMARY_DARK,
  COLOR_BADGE_DARK,
  COLOR_PRIMARY_ORANGE,
  COLOR_BORDER,
  COLOR_BORDER_DISABLED,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_PLACEHOLDER,
  COLOR_TEXT_LIGHT,
} from '../styles/color';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  ChevronRightSmallIcon,
  InfoCircleIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from '../components/Icons';

const ticoTicoImg = require('../../Imagens/Ferramentas/TicoTico.png');

const SPECS = [
  { label: 'Potência', value: '400W' },
  { label: 'Velocidade', value: '3000GPM' },
  { label: 'Voltagem', value: '220V' },
  { label: 'Corte em madeira', value: '65mm' },
  { label: 'Corte em aço', value: '5mm' },
];

const INCLUDED_ITEMS = [
  'Maleta de transporte',
  '2 lâminas para madeira',
  '1 lâmina para metal',
  'Chave de aperto',
];

export default function DetalhesFerramentaScreen({ onNavigate }) {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header currentScreen="DetalhesFerramenta" onNavigate={onNavigate} />

      {/* Orange Hero Banner */}
      <View style={styles.heroSection}>
        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumbText}>Início</Text>
          <View style={styles.breadcrumbArrow}>
            <ChevronRightSmallIcon size={11} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.breadcrumbText}>Ferramentas</Text>
          <View style={styles.breadcrumbArrow}>
            <ChevronRightSmallIcon size={11} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.breadcrumbText}>Detalhes da ferramenta</Text>
        </View>

        <Text style={styles.heroTitle}>Serra tico tico</Text>
        <Text style={styles.heroSubtitle}>
          Black+Decker (400W) · Corte e serragem ·{'\n'}Ferramenta elétrica
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => onNavigate('Ferramentas')}
          style={styles.heroBackButton}
        >
          <Text style={styles.heroBackButtonText}>Voltar ao catálogo</Text>
          <View style={styles.btnIconRight}>
            <ArrowLeftIcon size={16} color={COLOR_TEXT_PRIMARY} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Large Tool Image Showcase */}
        <View style={styles.showcaseBox}>
          <View style={styles.unitBadge}>
            <Text style={styles.unitBadgeText}>UNIDADE 01</Text>
          </View>
          <Image
            source={ticoTicoImg}
            style={styles.showcaseImage}
            resizeMode="contain"
          />
        </View>

        {/* Card: Prepare a sua reserva */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Prepare a sua reserva</Text>
          <Text style={styles.cardSubtitle}>
            Unidade 01 · Serra tico tico Black+Decker
          </Text>

          <View style={styles.availableBadge}>
            <Text style={styles.availableBadgeText}>Disponível agora</Text>
          </View>

          <View style={styles.priceComparisonRow}>
            <View style={styles.priceCol}>
              <Text style={styles.mainPriceText}>€5 / dia</Text>
              <Text style={styles.priceSubLabel}>Preço de aluguel</Text>
            </View>
            <View style={styles.priceCol}>
              <Text style={styles.depositPriceText}>€35</Text>
              <Text style={styles.priceSubLabel}>Caução · valor separado</Text>
            </View>
          </View>

          <Text style={styles.periodSectionTitle}>Selecione o período</Text>

          <Text style={styles.fieldLabel}>Levantamento</Text>
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
            Devolução
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

          <View style={styles.infoCalloutBox}>
            <View style={styles.infoIconWrap}>
              <InfoCircleIcon size={17} color={COLOR_TEXT_PRIMARY} />
            </View>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoTitle}>Período por selecionar</Text>
              <Text style={styles.infoDescription}>
                Escolha as duas datas para consultar a disponibilidade e o valor
                do aluguel. A caução é apresentada à parte.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('Alugueis')}
            style={styles.continueDisabledButton}
          >
            <Text style={styles.continueDisabledText}>
              Continuar para reserva
            </Text>
            <View style={styles.btnIconRight}>
              <ArrowRightIcon size={15} color={COLOR_TEXT_SECONDARY} />
            </View>
          </TouchableOpacity>

          <Text style={styles.reservationFootnote}>
            Nenhuma reserva foi efetuada. A disponibilidade será verificada para
            o período escolhido.
          </Text>
        </View>

        {/* Card: Retirada da ferramenta */}
        <View style={styles.pickupLocationCard}>
          <View style={styles.pinIconWrap}>
            <MapPinIcon size={18} color={COLOR_TEXT_PRIMARY} />
          </View>
          <View style={styles.pickupTextCol}>
            <Text style={styles.pickupTitle}>Retirada da ferramenta</Text>
            <Text style={styles.pickupAddress}>Setor Bueno, Rua 7, Nº15</Text>
          </View>
        </View>

        {/* Card: Especificações técnicas */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Especificações técnicas</Text>
          <View style={styles.specsList}>
            {SPECS.map((spec) => (
              <View key={spec.label} style={styles.specRow}>
                <Text style={styles.specLabel}>{spec.label}</Text>
                <Text style={styles.specValue}>{spec.value}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Card: O que acompanha */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>O que acompanha</Text>
          <View style={styles.includedList}>
            {INCLUDED_ITEMS.map((item) => (
              <View key={item} style={styles.includedRow}>
                <CheckIcon size={14} color={COLOR_TEXT_PRIMARY} strokeWidth={2} />
                <Text style={styles.includedText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Card: Segurança e EPIs */}
        <View style={styles.safetyCard}>
          <Text style={styles.cardTitle}>Segurança e EPIs</Text>
          <View style={styles.shieldWrap}>
            <ShieldCheckIcon size={24} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.safetyDescription}>
            Óculos de proteção e luvas são os EPIs recomendados para utilizar
            esta ferramenta.
          </Text>
          <View style={styles.safetyDivider} />
          <Text style={styles.safetyFooterText}>
            Consulte as instruções de utilização antes de iniciar o trabalho.
          </Text>
        </View>
      </View>

      <Footer currentScreen="DetalhesFerramenta" onNavigate={onNavigate} />
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
    flexWrap: 'wrap',
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
  heroBackButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderRadius: 6,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  heroBackButtonText: {
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
  showcaseBox: {
    backgroundColor: COLOR_PRIMARY_DARK,
    borderRadius: 12,
    height: 290,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  unitBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: COLOR_BADGE_DARK,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  unitBadgeText: {
    color: COLOR_TEXT_LIGHT,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  showcaseImage: {
    width: 215,
    height: 215,
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
    marginTop: 8,
  },
  availableBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLOR_BG_SECONDARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginTop: 12,
  },
  availableBadgeText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12,
    fontWeight: '700',
  },
  priceComparisonRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
  },
  priceCol: {
    flex: 1,
  },
  mainPriceText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 24,
    fontWeight: '700',
  },
  depositPriceText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '700',
  },
  priceSubLabel: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12,
    marginTop: 4,
  },
  periodSectionTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 12,
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
  continueDisabledButton: {
    backgroundColor: COLOR_BG_DISABLED,
    borderWidth: 1,
    borderColor: COLOR_BORDER_DISABLED,
    borderRadius: 6,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  continueDisabledText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  reservationFootnote: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 12,
  },
  pickupLocationCard: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    padding: 18,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  pinIconWrap: {
    marginTop: 1,
  },
  pickupTextCol: {
    flex: 1,
    marginLeft: 12,
  },
  pickupTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  pickupAddress: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    marginTop: 4,
  },
  specsList: {
    marginTop: 12,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  specLabel: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
  },
  specValue: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  includedList: {
    marginTop: 12,
  },
  includedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  includedText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    marginLeft: 10,
  },
  safetyCard: {
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
  },
  shieldWrap: {
    marginTop: 12,
    marginBottom: 12,
  },
  safetyDescription: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    lineHeight: 19,
  },
  safetyDivider: {
    height: 1,
    backgroundColor: COLOR_BORDER,
    marginVertical: 14,
  },
  safetyFooterText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 12.5,
    lineHeight: 18,
  },
});
