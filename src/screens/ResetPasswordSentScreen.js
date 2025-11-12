import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ResetPasswordSentScreen() {
  const navigation = useNavigation();

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

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Success Icon */}
      <View style={styles.successContainer}>
        <View style={styles.successOuter}>
          <View style={styles.successInner}>
            <Ionicons name="checkmark" size={48} color="#FFFFFF" />
          </View>
        </View>
      </View>

      {/* Success Message */}
      <Text style={styles.title}>
        Reset password{'\n'}link sent
      </Text>
      <Text style={styles.description}>
        We sent a message to <Text style={styles.emailBold}>Ric....@gmail.com</Text> with a link
      </Text>
      <Text style={styles.description}>
        to reset your password
      </Text>

      {/* Action Button */}
      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailButtonText}>Open email app</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  statusBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
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
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  successContainer: {
    marginBottom: 32,
  },
  successOuter: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2176FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 8,
    maxWidth: 300,
  },
  emailBold: {
    fontWeight: '600',
    color: '#000000',
  },
  emailButton: {
    backgroundColor: '#2176FF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginTop: 48,
    width: '100%',
    maxWidth: 300,
  },
  emailButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

