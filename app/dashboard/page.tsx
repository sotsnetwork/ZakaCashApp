'use client'

import Link from 'next/link'
import { FaBell, FaCog, FaPlus, FaChartLine, FaStar } from 'react-icons/fa'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <span className="text-black text-sm font-medium">9:41</span>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 border border-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
          <div className="w-8 h-4 border border-black rounded-sm bg-black"></div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-black">Hello, Debbie</h1>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaBell className="text-xl text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaCog className="text-xl text-gray-700" />
            </button>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-800">
            Your overspending on Feeding this month.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-3 px-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors">
            <FaPlus />
            <span>Add Income</span>
          </button>
          <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-3 px-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors">
            <FaChartLine />
            <span>Log Expense</span>
          </button>
        </div>
        <button className="w-full bg-primary text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors relative">
          <FaStar />
          <span>Check Perks</span>
          <span className="absolute -top-2 -right-2 bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            3
          </span>
        </button>
      </div>

      {/* Cashflow Summary */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Cashflow Summary</h2>
          <Link href="/cashflow" className="text-primary text-sm">View more</Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-black mb-1">$234,097</div>
            <div className="text-sm text-gray-600">Total Saved</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-black mb-1">92%</div>
            <div className="text-sm text-gray-600">Savings Progress</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-black mb-1">3</div>
            <div className="text-sm text-gray-600">Badges Earned</div>
          </div>
        </div>
      </div>

      {/* AI Insight Panel */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">AI Insight Panel</h2>
          <Link href="/insights" className="text-primary text-sm">View more</Link>
        </div>
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-gray-800">
              Your profit margin dropped by 7% this week.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-gray-800">
              Reducing logistics by 10% could improve net profit by $120,000.
            </p>
          </div>
        </div>
      </div>

      {/* Savings */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Savings</h2>
          <Link href="/savings" className="text-primary text-sm">View more</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-black mb-2">$67,000</div>
            <div className="text-sm text-gray-600 mb-3">Study Abroad Fund</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl font-bold text-black mb-2">$67,000</div>
            <div className="text-sm text-gray-600 mb-3">Study Abroad Fund</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Achievements</h2>
          <Link href="/achievements" className="text-primary text-sm">View more</Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`rounded-xl p-4 text-center ${
                i === 1 ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-400'
              }`}
            >
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-xs">First Save</div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Perks */}
      <div className="px-4 py-4 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Student Perks</h2>
          <Link href="/perks" className="text-primary text-sm">View more</Link>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Spotify', category: 'Music', days: '2 days left' },
            { name: 'Airline', category: 'Travels', days: '2 days' },
            { name: 'Netflix', category: 'Entertainment', days: '2 days left' },
          ].map((perk, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  {perk.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-black">{perk.name}</div>
                  <div className="text-sm text-gray-600">{perk.category}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">{perk.days}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

