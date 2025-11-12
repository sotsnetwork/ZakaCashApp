'use client'

import { FaPlus, FaEllipsisV } from 'react-icons/fa'

export default function RevenueTrackerPage() {
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
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-black">Revenue Tracker</h1>
          <button className="bg-blue-50 text-primary py-2 px-4 rounded-xl font-medium flex items-center gap-2">
            <FaPlus />
            <span>Sales Data</span>
          </button>
        </div>
      </div>

      {/* Revenue Chart Card */}
      <div className="bg-white mx-4 mt-4 p-4 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Revenue</h2>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1">
            <span className="text-sm">Month</span>
            <span className="text-xs">▼</span>
          </div>
        </div>
        
        {/* Chart Placeholder */}
        <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
          <div className="text-gray-400">Chart visualization</div>
        </div>
      </div>

      {/* Revenue Details Table */}
      <div className="flex-1 px-4 py-4">
        <div className="grid grid-cols-4 gap-2 mb-4 text-sm font-semibold text-gray-600">
          <div>Category</div>
          <div>Amount</div>
          <div>Type</div>
          <div>Due Date</div>
        </div>
        
        <div className="space-y-3">
          {[
            { category: 'Salary', frequency: 'Monthly', amount: '$198.59', type: 'Fixed', dueDate: '1st of Month' },
            { category: 'Tenants', frequency: 'Yearly', amount: '$198.59', type: 'Variable', dueDate: '1st of Month' },
            { category: 'Stipends', frequency: 'Hourly', amount: '$198.59', type: 'Fixed', dueDate: '1st of Month' },
            { category: 'Allowance', frequency: 'Monthly', amount: '$198.59', type: 'Fixed', dueDate: '1st of Month' },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 items-center py-3 border-b border-gray-200">
              <div>
                <div className="font-semibold text-black">{item.category}</div>
                <div className="text-xs text-gray-500">{item.frequency}</div>
              </div>
              <div className="text-green-600 font-semibold">{item.amount}</div>
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === 'Fixed' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.type}
                </span>
              </div>
              <div className="text-sm text-gray-600">{item.dueDate}</div>
              <div className="col-span-4 flex justify-end mt-2">
                <button className="text-gray-400">
                  <FaEllipsisV />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

