import React from 'react'

function Packages() {
  return (
    <>
      <div className='relative w-screen h-[500px]'>
        <img src="/images/bg-package.jpg" alt="bg" className='w-full h-full object-cover' />
        <div className='bg-white/60 opacity-40 w-screen  backdrop-blur-md absolute inset-0 z-10'></div>
        {/* content */}
        <div className='absolute inset-0  z-20  flex flex-col  justify-center items-center gap-3'>
          <h2 className='text-black text-6xl font-bold'>Discover Your Next Adventure</h2>
          <p className='text-center text-xl'>Explore our handpicked collection of travel packages and find the <br /> perfect journey that awaits you.</p>
            <button className='bg-blue-800 text-white rounded-3xl px-6 py-3 hover:bg-blue-900 transition-all'>Plan Your Trip Now </button>
          
        </div>
        </div>
    </>
  )
}

export default Packages
