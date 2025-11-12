'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFingerprint } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

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

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">Login</h1>

        {/* Google Login Button */}
        <button className="w-full border border-gray-300 rounded-xl py-4 px-6 mb-6 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-gray-700">Login with Google</span>
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <div className="relative">
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
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:outline-none focus:ring-2 ${
                  error ? 'border-error focus:ring-error' : 'border-gray-300 focus:ring-primary'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-error">Oh, snapp! Some error message.</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <Link
          href="/recover-account"
          className="block text-center text-primary mt-4 hover:underline"
        >
          Forgot password?
        </Link>

        {/* Biometric Login */}
        <div className="flex justify-center mt-8">
          <button className="p-4 text-primary hover:bg-gray-50 rounded-full transition-colors">
            <FaFingerprint className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

