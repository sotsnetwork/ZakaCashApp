import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TransactionPinScreen() {
  const navigation = useNavigation();
  const [pin, setPin] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNumberClick = (num) => {
    if (activeIndex < 4) {
      const newPin = [...pin];
      newPin[activeIndex] = num;
      setPin(newPin);
      if (activeIndex < 3) {
        setActiveIndex(activeIndex + 1);
      } else {
        setTimeout(() => {
          navigation.navigate('ConfirmPin');
        }, 300);
      }
    }
  };

  const handleBackspace = () => {
    if (activeIndex > 0) {
      const newPin = [...pin];
      newPin[activeIndex - 1] = '';
      setPin(newPin);
      setActiveIndex(activeIndex - 1);
    } else if (activeIndex === 0 && pin[0]) {
      const newPin = [...pin];
      newPin[0] = '';
      setPin(newPin);
    }
  };

  const renderKeypad = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <View style={styles.keypad}>
        <View style={styles.keypadRow}>
          {numbers.slice(0, 3).map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.keypadButton}
              onPress={() => handleNumberClick(num.toString())}
            >
              <Text style={styles.keypadText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keypadRow}>
          {numbers.slice(3, 6).map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.keypadButton}
              onPress={() => handleNumberClick(num.toString())}
            >
              <Text style={styles.keypadText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keypadRow}>
          {numbers.slice(6, 9).map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.keypadButton}
              onPress={() => handleNumberClick(num.toString())}
            >
              <Text style={styles.keypadText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keypadRow}>
          <View style={styles.keypadButton} />
          <TouchableOpacity
            style={styles.keypadButton}
            onPress={() => handleNumberClick('0')}
          >
            <Text style={styles.keypadText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={handleBackspace}>
            <Text style={styles.keypadText}>⌫</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Transaction Pin</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Nec volutpat nunc lectus vivamus dolor. Dolor ultricies lacus
        </Text>

        {/* PIN Input Fields */}
        <View style={styles.pinContainer}>
          {pin.map((digit, index) => (
            <View
              key={index}
              style={[
                styles.pinBox,
                index === activeIndex && !digit && styles.pinBoxActive,
                digit && styles.pinBoxFilled,
              ]}
            >
              {digit ? <Text style={styles.pinDot}>•</Text> : null}
            </View>
          ))}
        </View>

        {/* Login with Email Link */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.emailLink}>Login With Email</Text>
        </TouchableOpacity>

        {/* Numeric Keypad */}
        {renderKeypad()}
      </View>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 300,
  },
  pinContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  pinBox: {
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinBoxActive: {
    borderColor: '#10B981',
    backgroundColor: '#D1FAE5',
  },
  pinBoxFilled: {
    borderColor: '#10B981',
    backgroundColor: '#D1FAE5',
  },
  pinDot: {
    fontSize: 32,
    color: '#000000',
  },
  emailLink: {
    color: '#2176FF',
    fontSize: 16,
    marginBottom: 32,
  },
  keypad: {
    width: '100%',
    maxWidth: 300,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  keypadButton: {
    width: 80,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keypadText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
});

