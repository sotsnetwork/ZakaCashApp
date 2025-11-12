import Link from 'next/link'

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#EBF4FA] flex flex-col px-4 py-8">
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
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-black mb-2">
          Join
        </h1>
        <h2 className="text-4xl font-bold text-black mb-6">
          ZakaCash Pilot
        </h2>
        
        <p className="text-gray-700 mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Nec volutpat nunc lectus vivamus dolor. Dolor ultricies lacus volutpat nibh. Fermentum sit enim maecenas tincidunt
        </p>

        {/* User Type Selection */}
        <div className="space-y-4 mb-8">
          <Link
            href="/create-account?type=student"
            className="block w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-primary-dark transition-colors"
          >
            I&apos;m a Student
          </Link>
          
          <Link
            href="/create-account?type=sma"
            className="block w-full border-2 border-primary text-primary bg-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-primary hover:text-white transition-colors"
          >
            I&apos;m an SMA
          </Link>
          
          <Link
            href="/create-account?type=individual"
            className="block w-full text-primary py-4 px-6 rounded-xl font-semibold text-center hover:underline"
          >
            I&apos;m an Individual
          </Link>
        </div>
      </div>
    </div>
  )
}

