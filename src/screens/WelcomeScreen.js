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

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Status Bar Simulation */}
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

      {/* Decorative Elements */}
      <View style={styles.decorativeContainer}>
        <View style={styles.starLeft} />
        <View style={styles.starRight} />
        <View style={styles.coinTop} />
        <View style={styles.coinCluster}>
          <View style={styles.coin} />
          <View style={styles.coin} />
          <View style={styles.coin} />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Welcome to{'\n'}ZakaCash Pilot
        </Text>
        <Text style={styles.subtitle}>
          Your business CFO, Simplified
        </Text>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={styles.paginationActive} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
      </View>

      {/* CTA Buttons */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Join')}
        >
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  statusTime: {
    color: '#FFFFFF',
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
    borderColor: '#FFFFFF',
    borderRadius: 2,
  },
  wifiIcon: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 2,
  },
  batteryIcon: {
    width: 32,
    height: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 2,
  },
  batteryFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  decorativeContainer: {
    position: 'absolute',
    top: 80,
    left: '50%',
    transform: [{ translateX: -50 }],
    alignItems: 'center',
  },
  starLeft: {
    position: 'absolute',
    top: -16,
    left: -32,
    width: 16,
    height: 16,
    backgroundColor: '#9CA3AF',
    transform: [{ rotate: '45deg' }],
  },
  starRight: {
    position: 'absolute',
    top: -16,
    right: -32,
    width: 16,
    height: 16,
    backgroundColor: '#9CA3AF',
    transform: [{ rotate: '45deg' }],
  },
  coinTop: {
    width: 64,
    height: 64,
    backgroundColor: '#FBBF24',
    borderRadius: 32,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  coinCluster: {
    flexDirection: 'row',
    gap: 4,
  },
  coin: {
    width: 48,
    height: 48,
    backgroundColor: '#FBBF24',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 120,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 18,
    color: '#D1D5DB',
    textAlign: 'center',
    marginBottom: 48,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 32,
  },
  paginationActive: {
    width: 32,
    height: 4,
    backgroundColor: '#2176FF',
    borderRadius: 2,
  },
  paginationDot: {
    width: 8,
    height: 8,
    backgroundColor: '#4B5563',
    borderRadius: 4,
  },
  ctaContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#2176FF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  loginLink: {
    color: '#2176FF',
    fontSize: 14,
    fontWeight: '500',
  },
});

