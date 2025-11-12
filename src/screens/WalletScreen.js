import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function WalletScreen() {
  const navigation = useNavigation();
  const [showBalance, setShowBalance] = useState(true);

  const transactions = [
    { type: 'Transfer', date: 'Tue, 19 Mar 2024', amount: '+₦1.79', isPositive: true },
    { type: 'Transfer', date: 'Tue, 19 Mar 2024', amount: '-₦1.79', isPositive: false },
    { type: 'Transfer', date: 'Tue, 19 Mar 2024', amount: '-₦1.79', isPositive: false },
    { type: 'Transfer', date: 'Tue, 19 Mar 2024', amount: '-$1.79', isPositive: false },
    { type: 'Withdrawal', date: 'Tue, 19 Mar 2024', amount: '-₦1.79', isPositive: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NGN Wallet</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Balance Section */}
        <View style={styles.balanceSection}>
          <View style={styles.balanceRow}>
            <Text style={styles.balance}>
              {showBalance ? '₦56,56.79' : '••••••'}
            </Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Ionicons
                name={showBalance ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.equivalent}>~ $1,635.00</Text>
          <TouchableOpacity style={styles.buyStocksButton}>
            <Text style={styles.buyStocksText}>Buy Stocks</Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="add" size={24} color="#2176FF" />
            <Text style={styles.actionButtonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="arrow-up" size={24} color="#2176FF" />
            <Text style={styles.actionButtonText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="remove" size={24} color="#2176FF" />
            <Text style={styles.actionButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* Request Statement */}
        <TouchableOpacity style={styles.statementCard}>
          <View style={styles.statementContent}>
            <Ionicons name="document-text-outline" size={24} color="#10B981" />
            <Text style={styles.statementText}>Request Account Statement</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Transaction History */}
        <View style={styles.transactionSection}>
          <Text style={styles.sectionTitle}>Transaction History</Text>
          <Text style={styles.sectionSubtitle}>March 2024</Text>
          
          <View style={styles.transactionsList}>
            {transactions.map((transaction, index) => (
              <View key={index} style={styles.transactionItem}>
                <View style={styles.transactionLeft}>
                  <View
                    style={[
                      styles.transactionIcon,
                      transaction.isPositive
                        ? styles.transactionIconPositive
                        : styles.transactionIconNegative,
                    ]}
                  >
                    <Ionicons
                      name={transaction.isPositive ? 'arrow-down' : 'arrow-up'}
                      size={20}
                      color={transaction.isPositive ? '#10B981' : '#EF4444'}
                    />
                  </View>
                  <View>
                    <Text style={styles.transactionType}>{transaction.type}</Text>
                    <Text style={styles.transactionDate}>{transaction.date}</Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.transactionAmount,
                    transaction.isPositive
                      ? styles.transactionAmountPositive
                      : styles.transactionAmountNegative,
                  ]}
                >
                  {transaction.amount}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  balanceSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
  },
  equivalent: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  buyStocksButton: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buyStocksText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingVertical: 12,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2176FF',
  },
  statementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 24,
  },
  statementContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statementText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  transactionSection: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  transactionsList: {
    gap: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionIconPositive: {
    backgroundColor: '#D1FAE5',
  },
  transactionIconNegative: {
    backgroundColor: '#FEE2E2',
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionAmountPositive: {
    color: '#10B981',
  },
  transactionAmountNegative: {
    color: '#EF4444',
  },
});

