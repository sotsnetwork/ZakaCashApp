import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './src/screens/WelcomeScreen';
import JoinScreen from './src/screens/JoinScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import TransactionPinScreen from './src/screens/TransactionPinScreen';
import ConfirmPinScreen from './src/screens/ConfirmPinScreen';
import PinCreatedScreen from './src/screens/PinCreatedScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import WalletScreen from './src/screens/WalletScreen';
import RevenueTrackerScreen from './src/screens/RevenueTrackerScreen';
import ExpensesTrackerScreen from './src/screens/ExpensesTrackerScreen';
import RecoverAccountScreen from './src/screens/RecoverAccountScreen';
import ResetPasswordSentScreen from './src/screens/ResetPasswordSentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Join" component={JoinScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="TransactionPin" component={TransactionPinScreen} />
        <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
        <Stack.Screen name="PinCreated" component={PinCreatedScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="RevenueTracker" component={RevenueTrackerScreen} />
        <Stack.Screen name="ExpensesTracker" component={ExpensesTrackerScreen} />
        <Stack.Screen name="RecoverAccount" component={RecoverAccountScreen} />
        <Stack.Screen name="ResetPasswordSent" component={ResetPasswordSentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

