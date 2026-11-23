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
  COLOR_PRIMARY_ORANGE,
  COLOR_BORDER,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_TEXT_PLACEHOLDER,
} from '../styles/color';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ChatBubbleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightSmallIcon,
  MailIcon,
  MapPinIcon,
  SendIcon,
} from '../components/Icons';

const TIPS = [
  'Indique a ferramenta a que se refere.',
  'Descreva a dúvida ou a alteração pretendida.',
  'Use as datas que constam no seu aluguel.',
];

export default function ContactarNosScreen({ onNavigate }) {
  const [fullName, setFullName] = useState('Pedro Silva');
  const [contactEmail, setContactEmail] = useState('');
  const [messageText, setMessageText] = useState('');

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header currentScreen="ContactarNos" onNavigate={onNavigate} />

      {/* Orange Hero Banner */}
      <View style={styles.heroSection}>
        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumbText}>Início</Text>
          <View style={styles.breadcrumbArrow}>
            <ChevronRightSmallIcon size={11} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.breadcrumbText}>Contactar-nos</Text>
        </View>

        <Text style={styles.heroTitle}>Como podemos ajudar?</Text>
        <Text style={styles.heroSubtitle}>
          Fale com a VETORA sobre um aluguel, uma ferramenta ou a sua conta.
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Card 1: Enviar uma mensagem */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Enviar uma mensagem</Text>
          <Text style={styles.cardSubtitle}>
            Os campos assinalados com * são obrigatórios.
          </Text>

          <Text style={[styles.fieldLabel, styles.mt16]}>Assunto *</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.selectBox}>
            <Text style={styles.selectBoxText}>Dúvida sobre um aluguel</Text>
            <ChevronDownIcon size={15} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>

          <Text style={[styles.fieldLabel, styles.mt14]}>Nome *</Text>
          <View style={styles.inputBox}>
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="Nome completo"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInputPlain}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>
            Email para contacto *
          </Text>
          <View style={styles.inputBox}>
            <MailIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={contactEmail}
              onChangeText={setContactEmail}
              placeholder="Introduza o seu email"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              keyboardType="email-address"
              style={styles.textInputWithIcon}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>
            Aluguel relacionado (opcional)
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.selectBox}>
            <Text style={styles.selectBoxPlaceholder}>
              Selecionar um aluguel da conta
            </Text>
            <ChevronDownIcon size={15} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>

          <Text style={[styles.fieldLabel, styles.mt14]}>Mensagem *</Text>
          <View style={styles.textAreaBox}>
            <TextInput
              value={messageText}
              onChangeText={setMessageText}
              placeholder="Descreva a sua dúvida. Se for sobre um aluguel, indique a ferramenta e a data informada no registro."
              placeholderTextColor={COLOR_TEXT_SECONDARY}
              multiline
              textAlignVertical="top"
              style={styles.textAreaInput}
            />
          </View>

          <Text style={styles.privacyNoticeText}>
            Inclua apenas as informações necessárias para tratar do seu pedido.
            Não partilhe palavras-passe ou outros dados sensíveis.
          </Text>

          <View style={styles.formDivider} />

          <Text style={styles.reviewEmailCaption}>
            Reveja o email antes de enviar.
          </Text>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.orangePrimaryButton}
          >
            <Text style={styles.orangePrimaryButtonText}>Enviar mensagem</Text>
            <View style={styles.btnIconRight}>
              <SendIcon size={16} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Card 2: A sua conta */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>A sua conta</Text>

          <View style={styles.accountRow}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>PS</Text>
            </View>
            <View style={styles.accountTextCol}>
              <Text style={styles.accountNameText}>Pedro Silva</Text>
              <Text style={styles.accountSubText}>
                Contacto a preencher no formulário
              </Text>
            </View>
          </View>

          <Text style={styles.accountContextParagraph}>
            Para uma dúvida sobre o aluguel em curso, pode selecionar a
            Furadeira elétrica como contexto da mensagem.
          </Text>
        </View>

        {/* Callout Card: Conte-nos o que precisa. */}
        <View style={styles.tipsCalloutCard}>
          <Text style={styles.cardTitle}>Conte-nos o que precisa.</Text>
          <Text style={styles.cardSubtitle}>
            Uma mensagem com contexto facilita a compreensão do pedido.
          </Text>

          <View style={styles.chatIconWrap}>
            <ChatBubbleIcon size={22} color={COLOR_TEXT_PRIMARY} />
          </View>

          {TIPS.map((tip) => (
            <View key={tip} style={styles.tipRow}>
              <CheckIcon size={14} color={COLOR_TEXT_PRIMARY} strokeWidth={2} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>

        {/* Location Card */}
        <View style={styles.locationCard}>
          <View style={styles.pinIconWrap}>
            <MapPinIcon size={18} color={COLOR_TEXT_PRIMARY} />
          </View>
          <View style={styles.locationTextCol}>
            <Text style={styles.locationTitle}>Localização VETORA</Text>
            <Text style={styles.locationAddress}>
              Setor Bueno, Rua 7, Nº15
            </Text>
          </View>
        </View>
      </View>

      <Footer currentScreen="ContactarNos" onNavigate={onNavigate} />
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
    marginBottom: 18,
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
  fieldLabel: {
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
  selectBoxPlaceholder: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
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
  textInputPlain: {
    flex: 1,
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    paddingVertical: 0,
  },
  textInputWithIcon: {
    flex: 1,
    marginLeft: 10,
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    paddingVertical: 0,
  },
  textAreaBox: {
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    minHeight: 116,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: COLOR_BG_MAIN,
  },
  textAreaInput: {
    flex: 1,
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    lineHeight: 19,
    minHeight: 90,
  },
  privacyNoticeText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 14,
  },
  formDivider: {
    height: 1,
    backgroundColor: COLOR_BORDER,
    marginVertical: 14,
  },
  reviewEmailCaption: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
  },
  orangePrimaryButton: {
    backgroundColor: COLOR_PRIMARY_ORANGE,
    borderRadius: 6,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  orangePrimaryButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  btnIconRight: {
    marginLeft: 10,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BORDER,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLOR_PRIMARY_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 15,
    fontWeight: '700',
  },
  accountTextCol: {
    flex: 1,
    marginLeft: 14,
  },
  accountNameText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 16,
    fontWeight: '700',
  },
  accountSubText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    marginTop: 4,
  },
  accountContextParagraph: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    lineHeight: 19,
    marginTop: 14,
  },
  tipsCalloutCard: {
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 20,
    marginBottom: 18,
  },
  chatIconWrap: {
    marginTop: 12,
    marginBottom: 10,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  tipText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    marginLeft: 10,
    flex: 1,
  },
  locationCard: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  pinIconWrap: {
    marginTop: 1,
  },
  locationTextCol: {
    flex: 1,
    marginLeft: 12,
  },
  locationTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  locationAddress: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
    marginTop: 4,
  },
  mt14: {
    marginTop: 14,
  },
  mt16: {
    marginTop: 16,
  },
});
