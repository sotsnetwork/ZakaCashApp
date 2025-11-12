import React from 'react';
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

export default function ExpensesTrackerScreen() {
  const navigation = useNavigation();

  const expenseItems = [
    { category: 'Utilities', frequency: 'Monthly', amount: '$198.59', type: 'Fixed', dueDate: '1st of Month' },
    { category: 'Rent', frequency: 'Yearly', amount: '$198.59', type: 'Variable', dueDate: '1st of Month' },
    { category: 'Marketing', frequency: 'Monthly', amount: '$198.59', type: 'Fixed', dueDate: '1st of Month' },
    { category: 'Insurance', frequency: 'Yearly', amount: '$198.59', type: 'Fixed', dueDate: '1st of Month' },
    { category: 'Wardrobe', frequency: 'Monthly', amount: '$198.59', type: 'Fixed', dueDate: '1st of Month' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Expenses Tracker</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#2176FF" />
          <Text style={styles.addButtonText}>Expenses</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Expenses Chart Card */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Expenses</Text>
            <View style={styles.dropdown}>
              <Text style={styles.dropdownText}>Month</Text>
              <Ionicons name="chevron-down" size={16} color="#6B7280" />
            </View>
          </View>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartPlaceholderText}>Chart visualization</Text>
          </View>
        </View>

        {/* Expenses List */}
        <View style={styles.tableSection}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Category</Text>
            <Text style={styles.tableHeaderText}>Amount</Text>
            <Text style={styles.tableHeaderText}>Type</Text>
            <Text style={styles.tableHeaderText}>Due Date</Text>
          </View>
          
          <View style={styles.tableBody}>
            {expenseItems.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellBold}>{item.category}</Text>
                  <Text style={styles.tableCellSmall}>{item.frequency}</Text>
                </View>
                <Text style={styles.tableCellAmount}>{item.amount}</Text>
                <View style={styles.tableCell}>
                  <View
                    style={[
                      styles.typeBadge,
                      item.type === 'Fixed' ? styles.typeBadgeFixed : styles.typeBadgeVariable,
                    ]}
                  >
                    <Text
                      style={[
                        styles.typeBadgeText,
                        item.type === 'Fixed'
                          ? styles.typeBadgeTextFixed
                          : styles.typeBadgeTextVariable,
                      ]}
                    >
                      {item.type}
                    </Text>
                  </View>
                </View>
                <Text style={styles.tableCellDate}>{item.dueDate}</Text>
                <TouchableOpacity style={styles.moreButton}>
                  <Ionicons name="ellipsis-vertical" size={16} color="#9CA3AF" />
                </TouchableOpacity>
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
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#DBEAFE',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  addButtonText: {
    color: '#2176FF',
    fontSize: 14,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  dropdownText: {
    fontSize: 14,
    color: '#000000',
  },
  chartPlaceholder: {
    height: 192,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartPlaceholderText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  tableSection: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    flex: 1,
  },
  tableBody: {
    gap: 12,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tableCell: {
    flex: 1,
  },
  tableCellBold: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  tableCellSmall: {
    fontSize: 12,
    color: '#6B7280',
  },
  tableCellAmount: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
  },
  tableCellDate: {
    flex: 1,
    fontSize: 14,
    color: '#6B7280',
  },
  typeBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  typeBadgeFixed: {
    backgroundColor: '#DBEAFE',
  },
  typeBadgeVariable: {
    backgroundColor: '#FEF3C7',
  },
  typeBadgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  typeBadgeTextFixed: {
    color: '#1E40AF',
  },
  typeBadgeTextVariable: {
    color: '#92400E',
  },
  moreButton: {
    padding: 4,
  },
});

