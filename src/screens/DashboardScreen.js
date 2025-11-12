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

export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Debbie</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#374151" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={24} color="#374151" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Alert Banner */}
        <View style={styles.alertBanner}>
          <Text style={styles.alertText}>Your overspending on Feeding this month.</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="add" size={20} color="#2176FF" />
            <Text style={styles.actionButtonText}>Add Income</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="trending-up-outline" size={20} color="#2176FF" />
            <Text style={styles.actionButtonText}>Log Expense</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.perksButton}>
          <Ionicons name="star" size={20} color="#FFFFFF" />
          <Text style={styles.perksButtonText}>Check Perks</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>

        {/* Cashflow Summary */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Cashflow Summary</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryAmount}>$234,097</Text>
              <Text style={styles.summaryLabel}>Total Saved</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryAmount}>92%</Text>
              <Text style={styles.summaryLabel}>Savings Progress</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryAmount}>3</Text>
              <Text style={styles.summaryLabel}>Badges Earned</Text>
            </View>
          </View>
        </View>

        {/* AI Insight Panel */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI Insight Panel</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.insightsContainer}>
            <View style={styles.insightCard}>
              <Text style={styles.insightText}>
                Your profit margin dropped by 7% this week.
              </Text>
            </View>
            <View style={styles.insightCard}>
              <Text style={styles.insightText}>
                Reducing logistics by 10% could improve net profit by $120,000.
              </Text>
            </View>
          </View>
        </View>

        {/* Savings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Savings</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.savingsGrid}>
            <View style={styles.savingsCard}>
              <Text style={styles.savingsAmount}>$67,000</Text>
              <Text style={styles.savingsLabel}>Study Abroad Fund</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '65%' }]} />
              </View>
            </View>
            <View style={styles.savingsCard}>
              <Text style={styles.savingsAmount}>$67,000</Text>
              <Text style={styles.savingsLabel}>Study Abroad Fund</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '65%' }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.achievementsGrid}>
            {[1, 2, 3, 4].map((i) => (
              <View
                key={i}
                style={[styles.achievementCard, i === 1 && styles.achievementCardActive]}
              >
                <Text style={styles.achievementIcon}>🏆</Text>
                <Text
                  style={[
                    styles.achievementText,
                    i === 1 && styles.achievementTextActive,
                  ]}
                >
                  First Save
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Student Perks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Student Perks</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.perksContainer}>
            {[
              { name: 'Spotify', category: 'Music', days: '2 days left' },
              { name: 'Airline', category: 'Travels', days: '2 days' },
              { name: 'Netflix', category: 'Entertainment', days: '2 days left' },
            ].map((perk, i) => (
              <View key={i} style={styles.perkCard}>
                <View style={styles.perkIcon}>
                  <Text style={styles.perkIconText}>{perk.name[0]}</Text>
                </View>
                <View style={styles.perkInfo}>
                  <Text style={styles.perkName}>{perk.name}</Text>
                  <Text style={styles.perkCategory}>{perk.category}</Text>
                </View>
                <Text style={styles.perkDays}>{perk.days}</Text>
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
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  alertBanner: {
    backgroundColor: '#DBEAFE',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  alertText: {
    fontSize: 14,
    color: '#1F2937',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: '#2176FF',
    borderRadius: 12,
    paddingVertical: 12,
  },
  actionButtonText: {
    color: '#2176FF',
    fontSize: 16,
    fontWeight: '500',
  },
  perksButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#2176FF',
    borderRadius: 12,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 24,
    position: 'relative',
  },
  perksButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#2176FF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  viewMore: {
    color: '#2176FF',
    fontSize: 14,
  },
  summaryGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  summaryAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  insightsContainer: {
    gap: 12,
  },
  insightCard: {
    backgroundColor: '#DBEAFE',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 12,
    padding: 16,
  },
  insightText: {
    fontSize: 14,
    color: '#1F2937',
  },
  savingsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  savingsCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  savingsAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  savingsLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 12,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2176FF',
    borderRadius: 4,
  },
  achievementsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  achievementCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  achievementCardActive: {
    backgroundColor: '#2176FF',
    borderColor: '#2176FF',
  },
  achievementIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  achievementText: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  achievementTextActive: {
    color: '#FFFFFF',
  },
  perksContainer: {
    gap: 12,
  },
  perkCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  perkIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  perkIconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
  },
  perkInfo: {
    flex: 1,
  },
  perkName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  perkCategory: {
    fontSize: 12,
    color: '#6B7280',
  },
  perkDays: {
    fontSize: 12,
    color: '#6B7280',
  },
});

