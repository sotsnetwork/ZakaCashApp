'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function TransactionPinPage() {
  const router = useRouter()
  const [pin, setPin] = useState<string[]>(['', '', '', ''])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNumberClick = (num: string) => {
    if (activeIndex < 4) {
      const newPin = [...pin]
      newPin[activeIndex] = num
      setPin(newPin)
      if (activeIndex < 3) {
        setActiveIndex(activeIndex + 1)
      } else {
        // PIN complete, navigate to confirm
        setTimeout(() => {
          router.push('/confirm-pin')
        }, 300)
      }
    }
  }

  const handleBackspace = () => {
    if (activeIndex > 0) {
      const newPin = [...pin]
      newPin[activeIndex - 1] = ''
      setPin(newPin)
      setActiveIndex(activeIndex - 1)
    } else if (activeIndex === 0 && pin[0]) {
      const newPin = [...pin]
      newPin[0] = ''
      setPin(newPin)
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
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">Transaction Pin</h1>
        <p className="text-gray-600 mb-8 text-center max-w-sm">
          Lorem ipsum dolor sit amet consectetur. Nec volutpat nunc lectus vivamus dolor. Dolor ultricies lacus
        </p>

        {/* PIN Input Fields */}
        <div className="flex gap-4 mb-8">
          {pin.map((digit, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${
                index === activeIndex && !digit
                  ? 'bg-green-100 border-2 border-green-400'
                  : digit
                  ? 'bg-green-100 border-2 border-green-400'
                  : 'bg-gray-100 border-2 border-gray-300'
              }`}
            >
              {digit ? '•' : ''}
            </div>
          ))}
        </div>

        {/* Login with Email Link */}
        <Link href="/login" className="text-primary mb-8 hover:underline">
          Login With Email
        </Link>

        {/* Numeric Keypad */}
        <div className="w-full max-w-xs">
          <div className="grid grid-cols-3 gap-3 mb-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="aspect-square bg-white border-2 border-gray-300 rounded-xl text-2xl font-semibold hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                {num}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div></div>
            <button
              onClick={() => handleNumberClick('0')}
              className="aspect-square bg-white border-2 border-gray-300 rounded-xl text-2xl font-semibold hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              0
            </button>
            <button
              onClick={handleBackspace}
              className="aspect-square bg-white border-2 border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

