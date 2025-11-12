'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'

export default function RecoverAccountPage() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-white flex flex-col px-4 py-8">
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-black text-sm font-medium">9:41</span>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 border border-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
          <div className="w-8 h-4 border border-black rounded-sm bg-black"></div>
        </div>
      </div>

      {/* Back Button */}
      <button onClick={() => window.history.back()} className="mb-4 text-black">
        ←
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">Recover Account</h1>
        <p className="text-gray-600 mb-8 text-center">
          Lorem ipsum dolor sit amet consectetur. Nec volutpat nunc lectus vivamus dolor. Dolor ultricies lacus
        </p>

        {/* Email Input */}
        <div className="relative mb-8">
          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {email && (
            <button
              type="button"
              onClick={() => setEmail('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              ×
            </button>
          )}
        </div>

        {/* Continue Button */}
        <Link
          href="/reset-password-sent"
          className="block w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-primary-dark transition-colors"
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

