import React from 'react'

const Header = () => {
  return (

    <header className="header flex justify-between items-center p-4 bg-gradient-to-r from-black to-gray-800 text-white">
      <div className="flex items-center">
        <img src="./nimbooNv.jpg" alt="Logo" className="logo h-10 w-auto mr-2" />
        {/* <h1 className="font-bold text-lg text-green-400">Nimbooo</h1> */}
      </div>
      <nav className="flex space-x-4 px-4 py-2 bg-gray-900 rounded-lg shadow-lg">
        <a href="#" className="hover:text-gray-300">All Pages <i class="fa fa-caret-down"></i></a>
        <a href="#" className="hover:text-gray-300">Integrations</a>
        <a href="#" className="hover:text-gray-300">Pricing</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </nav>
      <div className="flex space-x-4">
        <button className="text-sm px-4 py-2 border border-white rounded-lg hover:bg-gray-700">Sign In</button>
        <button className="text-sm px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">Sign Up</button>
      </div>
    </header>
    
   
  )
}

export default Header
