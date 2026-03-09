
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between bg-purple-900 text-white w-auto h-auto">
        <div className="logo">
            <span className="font-bold text-xl mx-18">iTask</span>
        </div>
        <ul className="flex gap-8 mx-8">
            <li>Home</li>
            <li>Your Task</li>
        </ul>

    </nav>
        
      
    </>
  )
}

export default Navbar;
