import React from 'react'

const Features = () => {
  return (
    <section className="features text-white py-20 px-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Feature 1 */}
      <div className="p-8 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl text-center">
        <div className="mb-6 text-purple-500">
          <i className="fa-solid fa-arrow-right-arrow-left h-16 w-16 mx-auto"></i>
        </div>
        <h3 className="text-2xl font-semibold">No Delay</h3>
        <p className="mt-4">
          Experience lightning-fast payments with no delay—your earnings, delivered instantly.
        </p>
        <button className="pag mt-6 px-6 py-3 rounded-lg">
          Get Started →
        </button>
      </div>

      {/* Feature 2 */}
      <div className="p-8 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl text-center">
        <div className="mb-6 text-purple-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m9-11v10a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h10l4 4z" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold">Any Time Withdrawal</h3>
        <p className="mt-4">
          Enjoy the freedom to withdraw your earnings anytime, anywhere—your funds are always available.
        </p>
        <button className="pag mt-6 px-6 py-3 rounded-lg">
          Get Started →
        </button>
      </div>

      {/* Feature 3 */}
      <div className="p-8 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl text-center">
        <div className="mb-6 text-purple-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-3.866 1.79-7 4-7s4 3.134 4 7c0 1.038-.15 2.004-.418 2.832m-7.164 0c-.268-.828-.418-1.794-.418-2.832 0-3.866 1.79-7 4-7s4 3.134 4 7c0 1.038-.15 2.004-.418 2.832" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold">Secure Wallet</h3>
        <p className="mt-4">
          Keep your earnings safe and accessible with our secure wallet, designed to protect your funds.
        </p>
        <button className="pag mt-6 px-6 py-3 rounded-lg">
          Get Started →
        </button>
      </div>
    </div>
  </section>
  )
}

export default Features