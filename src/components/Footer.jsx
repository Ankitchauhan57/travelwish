import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center my-15'>
        <h2 className='text-3xl font-bold mb-10'>TRAVELWISH</h2>
        <p className='text-lg'>Stay Updated with TRAVELWISH</p>
        <div className='flex justify-center items-center gap-2'>
          <div className=' flex justify-around items-center gap-2 px-4 py-1 rounded-lg border border-gray-300 '>
            <img src="images/email.svg" alt="email" />
            <input type="text" placeholder='Enter your Email'  />
          </div>
          <input type="button" value="Subscribe" className='bg-blue-800 px-6 py-1 rounded-lg text-white text-center' />
        </div>
      </div>
        <div className='flex justify-around items-center mb-5'>
          <button className='bg-gray-200 rounded-sm text-gray-600 px-6 py-1'>English</button>
          <p>© 2020 TravelWish.</p>
          <div className='flex justify-center items-center gap-2 '>
            <img src="images/fb.svg" alt="facebook" />
          <img src="images/twiter.svg" alt="twitter" />
          <img src="images/insta.svg" alt="insta" />
          </div>
        </div>
    </>
  )
}

export default Footer
