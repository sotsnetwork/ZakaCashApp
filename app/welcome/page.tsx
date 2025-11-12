import Link from 'next/link'

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-2 text-white text-sm z-10">
        <span>9:41</span>
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 border border-white rounded-sm flex items-center justify-center">
            <div className="w-4 h-2 bg-white rounded-sm"></div>
          </div>
          <div className="w-6 h-3 border border-white rounded-sm"></div>
          <div className="w-8 h-4 border border-white rounded-sm">
            <div className="w-full h-full bg-white"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          {/* Stars */}
          <div className="absolute -top-4 -left-8 w-4 h-4 bg-gray-400 transform rotate-45"></div>
          <div className="absolute -top-4 -right-8 w-4 h-4 bg-gray-400 transform rotate-45"></div>
          
          {/* Coins */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-200 rounded-full"></div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-md"></div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-md"></div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-32 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Welcome to
          <br />
          ZakaCash Pilot
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-sm">
          Your business CFO, Simplified
        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-1 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </div>

      {/* CTA Buttons */}
      <div className="w-full max-w-sm space-y-4">
        <Link
          href="/join"
          className="block w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-primary-dark transition-colors"
        >
          Get Started
        </Link>
        <p className="text-center text-gray-400 text-sm">
          Have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

