'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaUser, FaPhone, FaEnvelope, FaVenusMars, FaCalendar, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'

export default function CreateAccountPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const accountType = searchParams.get('type') || 'individual'
  
  const [formData, setFormData] = useState({
    firstName: 'Debbie',
    lastName: 'Adorable',
    phone: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    password: '',
    referralCode: '',
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [passwordRequirements, setPasswordRequirements] = useState({
    smallLetter: false,
    capitalLetter: false,
    number: false,
    specialChar: false,
    minLength: false,
  })
  const [errors, setErrors] = useState<{ phone?: string; password?: string }>({})

  useEffect(() => {
    // Check password requirements
    const password = formData.password
    setPasswordRequirements({
      smallLetter: /[a-z]/.test(password),
      capitalLetter: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      minLength: password.length >= 8,
    })
  }, [formData.password])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    if (accountType === 'sma') {
      router.push('/sma/create-profile')
    } else if (accountType === 'student') {
      router.push('/student/personal-info')
    } else {
      router.push('/dashboard')
    }
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
      <div className="flex-1 max-w-md mx-auto w-full">
        <h1 className="text-4xl font-bold text-black mb-4">Create Account</h1>
        <p className="text-gray-600 mb-8 text-sm">
          To facilitate your account creation process, kindly use details matching with your Government Issued ID.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 flex items-center">
                <span className="text-sm">🇺🇸</span>
                <span className="ml-2 text-sm text-gray-400">▼</span>
              </div>
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-24 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 ${
                  errors.phone ? 'border-error focus:ring-error' : 'border-gray-300 focus:ring-primary'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-2 text-sm text-error">Oh, snapp! Some error message.</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {formData.email && (
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, email: '' })}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Gender */}
          <div>
            <div className="relative">
              <FaVenusMars className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <div className="relative">
              <FaCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-error focus:ring-error' : 'border-gray-300 focus:ring-primary'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            
            {/* Password Requirements */}
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-2">
                {passwordRequirements.smallLetter ? (
                  <span className="text-primary">✓</span>
                ) : (
                  <span className="text-error">✗</span>
                )}
                <span>1 small letter</span>
              </div>
              <div className="flex items-center gap-2">
                {passwordRequirements.number ? (
                  <span className="text-primary">✓</span>
                ) : (
                  <span className="text-error">✗</span>
                )}
                <span>1 number</span>
              </div>
              <div className="flex items-center gap-2">
                {passwordRequirements.capitalLetter ? (
                  <span className="text-primary">✓</span>
                ) : (
                  <span className="text-error">✗</span>
                )}
                <span>1 capital letter</span>
              </div>
              <div className="flex items-center gap-2">
                {passwordRequirements.specialChar ? (
                  <span className="text-primary">✓</span>
                ) : (
                  <span className="text-error">✗</span>
                )}
                <span>1 special character</span>
              </div>
              <div className="flex items-center gap-2">
                {passwordRequirements.minLength ? (
                  <span className="text-primary">✓</span>
                ) : (
                  <span className="text-error">✗</span>
                )}
                <span>8 characters</span>
              </div>
            </div>
          </div>

          {/* Referral Code */}
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Referral code (optional)"
                value={formData.referralCode}
                onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                className="w-full pl-4 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <FaEyeSlash />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors mt-6"
          >
            Continue
          </button>

          {/* Consent Text */}
          <p className="text-xs text-gray-600 text-center mt-4">
            I confirm that I&apos;ve read and consent to{' '}
            <Link href="/privacy" className="text-primary">BullOne Privacy Policy</Link>
            {' '}and{' '}
            <Link href="/agreements" className="text-primary">agreements</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

