import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>

      <div className='p-2 w-full flex items-center justify-between'>
        {/* logo */}
        <div className=' flex items-center w-fit'>
          <img src="/images/logo.svg" alt="logo" className='w-15 h-10 block ' />
          <h2 className='text-xl font-bold'>TRAVELWISH</h2>
        </div>
        {/* navlinks */}
        <div className='flex justify-between gap-10 bg-white'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/packages">Packages</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
          <div className='border-gray-300 border-1 flex px-2 rounded-md'>
            <img src="images/search.svg" alt="search"/>
            <input type="text"  placeholder='Search for destitation' />
          </div>
        </div>
        {/* dashboard */}
        <div className=' flex gap-5'>
          <button>USER DASHBOARD</button>
          <button>VENDER DASHBOARD</button>
        </div>
      </div>

    </>
  )
}

export default Navbar
