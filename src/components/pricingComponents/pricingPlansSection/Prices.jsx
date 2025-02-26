export default function PricingCard() {
    return (
      <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg relative">
        {/* Top Section with Bitrix Logo */}
        <div className="flex items-center justify-between">
          <div className="px-2 py-1 bg-lime-300 text-black text-xs font-bold rounded">
            NO PER-USER PRICING
          </div>
          <div className="h-8 w-24">
            {/* Replace this with an actual Bitrix24 SVG logo */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 w-full h-full">
              <circle cx="12" cy="12" r="10" stroke="blue" strokeWidth="2" fill="none" />
              <text x="6" y="15" fontSize="8" fill="blue">Bitrix24</text>
            </svg>
          </div>
        </div>
  
        {/* Card Content */}
        <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-blue-500 text-2xl font-bold text-center">Flat pricing</h2>
          <p className="text-gray-600 mt-2 text-sm text-center">
            Each of our plans has a fixed price and a user limit. You can keep adding users within the plan limit
            and still pay the same amount of money monthly/annually.
          </p>
          <p className="mt-4 text-black text-lg font-bold text-center">
            <span className="text-blue-500 text-2xl">30x</span> better value than using a set of separate work tools
          </p>
          <p className="text-gray-600 mt-2 text-sm text-center">
            Bitrix24 comes with the full package of tools any business needs for remote work — all at a fixed price.
          </p>
        </div>
      </div>
    );
  }
  