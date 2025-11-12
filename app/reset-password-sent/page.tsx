'use client'

import Link from 'next/link'

export default function ResetPasswordSentPage() {
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

      {/* Back Button */}
      <button onClick={() => window.history.back()} className="absolute top-12 left-4 text-black">
        ←
      </button>

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
        Reset password
        <br />
        link sent
      </h1>
      <p className="text-gray-600 mb-2 text-center max-w-sm">
        We sent a message to <span className="font-semibold">Ric....@gmail.com</span> with a link
      </p>
      <p className="text-gray-600 mb-12 text-center max-w-sm">
        to reset your password
      </p>

      {/* Action Button */}
      <button className="w-full max-w-sm bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
        Open email app
      </button>
    </div>
  )
}

