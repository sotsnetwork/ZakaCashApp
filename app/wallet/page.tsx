'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaEye, FaEyeSlash, FaPlus, FaArrowUp, FaMinus, FaFileAlt } from 'react-icons/fa'

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <button className="text-black">←</button>
          <h1 className="text-xl font-bold text-black">NGN Wallet</h1>
          <button className="text-black">⋯</button>
        </div>

        {/* Balance Section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-black">
              {showBalance ? '₦56,56.79' : '••••••'}
            </span>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              {showBalance ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
            </button>
          </div>
          <p className="text-gray-600">~ $1,635.00</p>
          <button className="mt-4 bg-success text-white py-2 px-6 rounded-xl font-semibold">
            Buy Stocks
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 flex flex-col items-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50">
            <FaPlus className="text-primary text-xl" />
            <span className="text-sm font-medium">Deposit</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50">
            <FaArrowUp className="text-primary text-xl" />
            <span className="text-sm font-medium">Transfer</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50">
            <FaMinus className="text-primary text-xl" />
            <span className="text-sm font-medium">Withdraw</span>
          </button>
        </div>
      </div>

      {/* Request Statement */}
      <div className="px-4 py-4 border-b border-gray-200">
        <Link href="/statement" className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
          <div className="flex items-center gap-3">
            <FaFileAlt className="text-green-600 text-xl" />
            <span className="font-medium text-black">Request Account Statement</span>
          </div>
          <span className="text-gray-400">→</span>
        </Link>
      </div>

      {/* Transaction History */}
      <div className="flex-1 px-4 py-4">
        <h2 className="text-xl font-bold text-black mb-4">Transaction History</h2>
        <p className="text-gray-600 mb-4">March 2024</p>
        
        <div className="space-y-4">
          {[
            { type: 'Transfer', date: 'Tue, 19 Mar 2024', amount: '+₦1.79', isPositive: true },
            { type: 'Transfer', date: 'Tue, 19 Mar 2024', amount: '-₦1.79', isPositive: false },
            { type: 'Transfer', date: 'Tue, 19 Mar 2024', amount: '-₦1.79', isPositive: false },
            { type: 'Transfer', date: 'Tue, 19 Mar 2024', amount: '-$1.79', isPositive: false },
            { type: 'Withdrawal', date: 'Tue, 19 Mar 2024', amount: '-₦1.79', isPositive: false },
          ].map((transaction, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  transaction.isPositive ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.isPositive ? (
                    <FaArrowUp className="text-green-600" />
                  ) : (
                    <FaMinus className="text-red-600" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-black">{transaction.type}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

