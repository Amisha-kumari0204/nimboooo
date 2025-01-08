import React from 'react'

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Freelancer</h3>
            <p className="text-2xl font-bold mb-4">$15/month</p>
            <ul className="text-left mb-4">
              <li>- 5 products</li>
              <li>- Up to 1,000 subscribers</li>
              <li>- Basic analytics</li>
              <li>- 48-hour support response time</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Get Started</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Startup</h3>
            <p className="text-2xl font-bold mb-4">$30/month</p>
            <ul className="text-left mb-4">
              <li>- 25 products</li>
              <li>- Up to 10,000 subscribers</li>
              <li>- Advanced analytics</li>
              <li>- 24-hour support response time</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Get Started</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-2xl font-bold mb-4">$48/month</p>
            <ul className="text-left mb-4">
              <li>- Unlimited products</li>
              <li>- Unlimited subscribers</li>
              <li>- Advanced analytics</li>
              <li>- 1-hour support response time</li>
            </ul>
            <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Get Started</button>
          </div>
        </div>
      </section>
  )
}

export default Pricing
