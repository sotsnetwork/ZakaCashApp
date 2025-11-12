import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function CreateAccountScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const accountType = route.params?.type || 'individual';

  const [formData, setFormData] = useState({
    firstName: 'Debbie',
    lastName: 'Adorable',
    phone: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    password: '',
    referralCode: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    smallLetter: false,
    capitalLetter: false,
    number: false,
    specialChar: false,
    minLength: false,
  });
  const [errors, setErrors] = useState({});

  const checkPasswordRequirements = (password) => {
    setPasswordRequirements({
      smallLetter: /[a-z]/.test(password),
      capitalLetter: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      minLength: password.length >= 8,
    });
  };

  const handlePasswordChange = (text) => {
    setFormData({ ...formData, password: text });
    checkPasswordRequirements(text);
  };

  const handleSubmit = () => {
    if (accountType === 'sma') {
      navigation.navigate('Dashboard');
    } else if (accountType === 'student') {
      navigation.navigate('Dashboard');
    } else {
      navigation.navigate('Dashboard');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalIcon} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon}>
            <View style={styles.batteryFill} />
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.description}>
          To facilitate your account creation process, kindly use details matching with your Government Issued ID.
        </Text>

        {/* First Name */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#9CA3AF"
            value={formData.firstName}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
          />
        </View>

        {/* Last Name */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#9CA3AF"
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
          />
        </View>

        {/* Phone Number */}
        <View style={[styles.inputContainer, errors.phone && styles.inputError]}>
          <Ionicons name="call-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
          <Text style={styles.flag}>🇺🇸</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="#9CA3AF"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            keyboardType="phone-pad"
          />
          <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
        </View>
        {errors.phone && <Text style={styles.errorText}>Oh, snapp! Some error message.</Text>}

        {/* Email */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            placeholderTextColor="#9CA3AF"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {formData.email.length > 0 && (
            <TouchableOpacity onPress={() => setFormData({ ...formData, email: '' })}>
              <Ionicons name="close-circle" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>

        {/* Gender */}
        <View style={styles.inputContainer}>
          <Ionicons name="people-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            placeholderTextColor="#9CA3AF"
            value={formData.gender}
            onChangeText={(text) => setFormData({ ...formData, gender: text })}
          />
          <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
        </View>

        {/* Date of Birth */}
        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            placeholderTextColor="#9CA3AF"
            value={formData.dateOfBirth}
            onChangeText={(text) => setFormData({ ...formData, dateOfBirth: text })}
          />
          <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
        </View>

        {/* Password */}
        <View style={[styles.inputContainer, errors.password && styles.inputError]}>
          <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={formData.password}
            onChangeText={handlePasswordChange}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Password Requirements */}
        <View style={styles.passwordRequirements}>
          <View style={styles.requirementRow}>
            <Text style={[styles.requirementText, passwordRequirements.smallLetter && styles.requirementMet]}>
              {passwordRequirements.smallLetter ? '✓' : '✗'} 1 small letter
            </Text>
            <Text style={[styles.requirementText, passwordRequirements.number && styles.requirementMet]}>
              {passwordRequirements.number ? '✓' : '✗'} 1 number
            </Text>
            <Text style={[styles.requirementText, passwordRequirements.capitalLetter && styles.requirementMet]}>
              {passwordRequirements.capitalLetter ? '✓' : '✗'} 1 capital letter
            </Text>
          </View>
          <View style={styles.requirementRow}>
            <Text style={[styles.requirementText, passwordRequirements.specialChar && styles.requirementMet]}>
              {passwordRequirements.specialChar ? '✓' : '✗'} 1 special character
            </Text>
            <Text style={[styles.requirementText, passwordRequirements.minLength && styles.requirementMet]}>
              {passwordRequirements.minLength ? '✓' : '✗'} 8 characters
            </Text>
          </View>
        </View>

        {/* Referral Code */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Referral code (optional)"
            placeholderTextColor="#9CA3AF"
            value={formData.referralCode}
            onChangeText={(text) => setFormData({ ...formData, referralCode: text })}
          />
          <Ionicons name="eye-off-outline" size={20} color="#9CA3AF" />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Consent Text */}
        <Text style={styles.consentText}>
          I confirm that I've read and consent to{' '}
          <Text style={styles.consentLink}>BullOne Privacy Policy</Text>
          {' '}and{' '}
          <Text style={styles.consentLink}>agreements</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  statusTime: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  signalIcon: {
    width: 24,
    height: 16,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  wifiIcon: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  batteryIcon: {
    width: 32,
    height: 16,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  batteryFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  inputError: {
    borderColor: '#EF4444',
  },
  inputIcon: {
    marginRight: 12,
  },
  flag: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 14,
    marginTop: -12,
    marginBottom: 16,
  },
  passwordRequirements: {
    marginBottom: 16,
  },
  requirementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  requirementText: {
    fontSize: 12,
    color: '#EF4444',
  },
  requirementMet: {
    color: '#2176FF',
  },
  submitButton: {
    backgroundColor: '#2176FF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  consentText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
  consentLink: {
    color: '#2176FF',
  },
});

