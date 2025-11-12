'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PinCreatedPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2">
        <span className="text-black text-sm font-medium">9:41</span>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 border border-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
          <div className="w-8 h-4 border border-black rounded-sm bg-black"></div>
        </div>
      </div>

      {/* Success Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <h1 className="text-3xl font-bold text-black mb-4 text-center">
        Transaction Pin
        <br />
        Created successfully
      </h1>
      <p className="text-gray-600 mb-4 text-center max-w-sm">
        Lorem ipsum dolor sit amet consectetur. Nec volutpat nunc lectus vivamus dolor. Dolor ultricies lacus
      </p>
      <p className="text-gray-600 mb-12 text-center max-w-sm">
        Lorem ipsum dolor sit amet consectetur. Nec volutpat nunc lectus vivamus dolor. Dolor ultricies lacus
      </p>

      {/* Action Buttons */}
      <div className="w-full max-w-sm space-y-4">
        <button
          onClick={() => router.push('/kyc')}
          className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
        >
          Proceed KYC
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className="w-full text-primary py-4 px-6 rounded-xl font-semibold hover:underline"
        >
          Perhaps at a later time
        </button>
      </div>
    </div>
  )
}

