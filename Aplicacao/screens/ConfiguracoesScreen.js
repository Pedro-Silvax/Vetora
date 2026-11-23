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
  BellIcon,
  ChatBubbleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightSmallIcon,
  EyeOffIcon,
  InfoCircleIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  UserCircleDotIcon,
} from '../components/Icons';

export default function ConfiguracoesScreen({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('perfil');
  const [firstName, setFirstName] = useState('Pedro');
  const [lastName, setLastName] = useState('Silva');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [returnReminderPref, setReturnReminderPref] = useState(null);
  const [rentalUpdatePref, setRentalUpdatePref] = useState(null);

  const handleCancel = () => {
    setFirstName('Pedro');
    setLastName('Silva');
    setEmail('');
    setPhone('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setReturnReminderPref(null);
    setRentalUpdatePref(null);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Header currentScreen="Configuracoes" onNavigate={onNavigate} />

      {/* Orange Hero Banner */}
      <View style={styles.heroSection}>
        <View style={styles.breadcrumbRow}>
          <Text style={styles.breadcrumbText}>Início</Text>
          <View style={styles.breadcrumbArrow}>
            <ChevronRightSmallIcon size={11} color={COLOR_TEXT_PRIMARY} />
          </View>
          <Text style={styles.breadcrumbText}>Configurações</Text>
        </View>

        <Text style={styles.heroTitle}>Configurações da conta</Text>
        <Text style={styles.heroSubtitle}>
          Mantenha os seus dados atualizados e escolha como quer acompanhar os
          seus aluguéis.
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Account Banner Card */}
        <View style={styles.accountBannerCard}>
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarLargeText}>PS</Text>
          </View>
          <View style={styles.accountBannerTextCol}>
            <Text style={styles.accountNameText}>Pedro Silva</Text>
            <Text style={styles.accountSubText}>Informações da conta</Text>
          </View>
        </View>

        {/* 3 Section Jump Accordion Headers */}
        <View style={styles.sectionNavList}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActiveSection('perfil')}
            style={[
              styles.sectionNavItem,
              activeSection === 'perfil' && styles.sectionNavItemActive,
            ]}
          >
            <View style={styles.sectionNavLeft}>
              <UserCircleDotIcon size={16} color={COLOR_TEXT_PRIMARY} />
              <Text
                style={[
                  styles.sectionNavText,
                  activeSection === 'perfil' && styles.sectionNavTextActive,
                ]}
              >
                Perfil e contacto
              </Text>
            </View>
            <ChevronDownIcon size={14} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActiveSection('seguranca')}
            style={[
              styles.sectionNavItem,
              activeSection === 'seguranca' && styles.sectionNavItemActive,
            ]}
          >
            <View style={styles.sectionNavLeft}>
              <LockIcon size={16} color={COLOR_TEXT_PRIMARY} />
              <Text
                style={[
                  styles.sectionNavText,
                  activeSection === 'seguranca' && styles.sectionNavTextActive,
                ]}
              >
                Segurança
              </Text>
            </View>
            <ChevronDownIcon size={14} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setActiveSection('preferencias')}
            style={[
              styles.sectionNavItem,
              activeSection === 'preferencias' && styles.sectionNavItemActive,
            ]}
          >
            <View style={styles.sectionNavLeft}>
              <BellIcon size={16} color={COLOR_TEXT_PRIMARY} />
              <Text
                style={[
                  styles.sectionNavText,
                  activeSection === 'preferencias' &&
                    styles.sectionNavTextActive,
                ]}
              >
                Preferências
              </Text>
            </View>
            <ChevronDownIcon size={14} color={COLOR_TEXT_PRIMARY} />
          </TouchableOpacity>
        </View>

        {/* Card 1: Perfil e contacto */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Perfil e contacto</Text>
          <Text style={styles.cardSubtitle}>
            O nome está preenchido com os dados da conta. Complete os restantes
            campos se desejar.
          </Text>

          <Text style={[styles.fieldLabel, styles.mt16]}>Nome</Text>
          <View style={styles.inputBox}>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Nome"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInputPlain}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>Apelido</Text>
          <View style={styles.inputBox}>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Apelido"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              style={styles.textInputPlain}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>Email</Text>
          <View style={styles.inputBox}>
            <MailIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Adicionar email"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              keyboardType="email-address"
              style={styles.textInputWithIcon}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>
            Telefone (opcional)
          </Text>
          <View style={styles.inputBox}>
            <PhoneIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Adicionar telefone"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              keyboardType="phone-pad"
              style={styles.textInputWithIcon}
            />
          </View>

          <View style={styles.infoCalloutBox}>
            <View style={styles.infoIconWrap}>
              <InfoCircleIcon size={17} color={COLOR_TEXT_PRIMARY} />
            </View>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoTitle}>
                Dados de contacto por preencher
              </Text>
              <Text style={styles.infoDescription}>
                Não há email nem telefone informados. Adicione os seus contactos
                para completar o perfil.
              </Text>
            </View>
          </View>
        </View>

        {/* Card 2: Segurança */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Segurança</Text>
          <Text style={styles.cardSubtitle}>
            Altere a palavra-passe sem partilhar os seus dados de acesso.
          </Text>

          <Text style={[styles.fieldLabel, styles.mt16]}>
            Palavra-passe atual
          </Text>
          <View style={styles.inputBox}>
            <EyeOffIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Introduzir palavra-passe"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              secureTextEntry
              style={styles.textInputWithIcon}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>
            Nova palavra-passe
          </Text>
          <View style={styles.inputBox}>
            <EyeOffIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Criar nova palavra-passe"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              secureTextEntry
              style={styles.textInputWithIcon}
            />
          </View>

          <Text style={[styles.fieldLabel, styles.mt14]}>
            Confirmar nova palavra-passe
          </Text>
          <View style={styles.inputBox}>
            <EyeOffIcon size={16} color={COLOR_TEXT_PRIMARY} />
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Repetir nova palavra-passe"
              placeholderTextColor={COLOR_TEXT_PLACEHOLDER}
              secureTextEntry
              style={styles.textInputWithIcon}
            />
          </View>

          <Text style={styles.helperCaption}>
            Deixe estes campos vazios para manter a palavra-passe.
          </Text>

          <TouchableOpacity activeOpacity={0.8} style={styles.outlineButton}>
            <Text style={styles.outlineButtonText}>Alterar palavra-passe</Text>
            <View style={styles.btnIconRight}>
              <LockIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Card 3: Preferências de notificações */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Preferências de notificações</Text>
          <Text style={styles.cardSubtitle}>
            Selecione as opções que pretende guardar. As preferências atuais não
            foram informadas.
          </Text>

          {/* Lembretes de devolução */}
          <View style={styles.prefGroup}>
            <Text style={styles.prefGroupTitle}>Lembretes de devolução</Text>
            <Text style={styles.prefGroupSub}>
              Avisos relacionados com a data de devolução das ferramentas.
            </Text>

            <View style={styles.segmentedControl}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setReturnReminderPref('receber')}
                style={[
                  styles.segmentButton,
                  styles.segmentButtonLeft,
                  returnReminderPref === 'receber' && styles.segmentButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.segmentButtonText,
                    returnReminderPref === 'receber' &&
                      styles.segmentButtonTextActive,
                  ]}
                >
                  Receber
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setReturnReminderPref('nao_receber')}
                style={[
                  styles.segmentButton,
                  returnReminderPref === 'nao_receber' &&
                    styles.segmentButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.segmentButtonText,
                    returnReminderPref === 'nao_receber' &&
                      styles.segmentButtonTextActive,
                  ]}
                >
                  Não receber
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.prefDivider} />

          {/* Atualizações dos aluguéis */}
          <View style={styles.prefGroupNoTop}>
            <Text style={styles.prefGroupTitle}>Atualizações dos aluguéis</Text>
            <Text style={styles.prefGroupSub}>
              Informações sobre os seus aluguéis e agendamentos.
            </Text>

            <View style={styles.segmentedControl}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setRentalUpdatePref('receber')}
                style={[
                  styles.segmentButton,
                  styles.segmentButtonLeft,
                  rentalUpdatePref === 'receber' && styles.segmentButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.segmentButtonText,
                    rentalUpdatePref === 'receber' &&
                      styles.segmentButtonTextActive,
                  ]}
                >
                  Receber
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setRentalUpdatePref('nao_receber')}
                style={[
                  styles.segmentButton,
                  rentalUpdatePref === 'nao_receber' &&
                    styles.segmentButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.segmentButtonText,
                    rentalUpdatePref === 'nao_receber' &&
                      styles.segmentButtonTextActive,
                  ]}
                >
                  Não receber
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.prefFootnote}>
            Nenhuma opção selecionada nesta edição. As escolhas só são aplicadas
            ao guardar.
          </Text>
        </View>

        {/* Save & Cancel Actions */}
        <View style={styles.saveActionsBlock}>
          <Text style={styles.reviewCaption}>
            Reveja os dados antes de guardar as alterações.
          </Text>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.orangePrimaryButton}
          >
            <Text style={styles.orangePrimaryButtonText}>
              Guardar alterações
            </Text>
            <View style={styles.btnIconRight}>
              <CheckIcon size={15} color={COLOR_TEXT_PRIMARY} strokeWidth={2.1} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleCancel}
            style={styles.cancelOutlineButton}
          >
            <Text style={styles.outlineButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Help Box */}
        <View style={styles.helpCalloutCard}>
          <Text style={styles.helpCalloutText}>
            Precisa de ajuda para alterar os seus dados?
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onNavigate('ContactarNos')}
            style={styles.contactOutlineButton}
          >
            <Text style={styles.outlineButtonText}>Contactar-nos</Text>
            <View style={styles.btnIconRight}>
              <ChatBubbleIcon size={15} color={COLOR_TEXT_PRIMARY} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Footer currentScreen="Configuracoes" onNavigate={onNavigate} />
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
  accountBannerCard: {
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarLarge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLOR_PRIMARY_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLargeText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '700',
  },
  accountBannerTextCol: {
    marginLeft: 16,
    flex: 1,
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
  sectionNavList: {
    marginTop: 14,
  },
  sectionNavItem: {
    height: 44,
    borderRadius: 6,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  sectionNavItemActive: {
    backgroundColor: COLOR_BG_SECONDARY,
  },
  sectionNavLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionNavText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '400',
    marginLeft: 10,
  },
  sectionNavTextActive: {
    fontWeight: '700',
  },
  card: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 12,
    padding: 20,
    marginTop: 14,
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
  helperCaption: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 12,
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
    marginTop: 12,
  },
  outlineButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  btnIconRight: {
    marginLeft: 10,
  },
  prefGroup: {
    marginTop: 16,
  },
  prefGroupNoTop: {
    marginTop: 4,
  },
  prefGroupTitle: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
    fontWeight: '700',
  },
  prefGroupSub: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 6,
  },
  segmentedControl: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 42,
    overflow: 'hidden',
    marginTop: 12,
  },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_BG_MAIN,
  },
  segmentButtonLeft: {
    borderRightWidth: 1,
    borderRightColor: COLOR_BORDER,
  },
  segmentButtonActive: {
    backgroundColor: COLOR_BG_SECONDARY,
  },
  segmentButtonText: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: 13.5,
  },
  segmentButtonTextActive: {
    fontWeight: '700',
  },
  prefDivider: {
    height: 1,
    backgroundColor: COLOR_BORDER,
    marginVertical: 16,
  },
  prefFootnote: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 12,
  },
  saveActionsBlock: {
    marginTop: 18,
  },
  reviewCaption: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13,
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
  cancelOutlineButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  helpCalloutCard: {
    backgroundColor: COLOR_BG_SECONDARY,
    borderRadius: 12,
    padding: 20,
    marginTop: 18,
  },
  helpCalloutText: {
    color: COLOR_TEXT_SECONDARY,
    fontSize: 13.5,
  },
  contactOutlineButton: {
    backgroundColor: COLOR_BG_MAIN,
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    borderRadius: 6,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  mt14: {
    marginTop: 14,
  },
  mt16: {
    marginTop: 16,
  },
});
