import React from 'react'

function Contact() {
    return (
        <>
            <div className=' flex justify-between w-screen p-20'>
                <div className='flex flex-col  gap-3'>
                    <p className='text-sm text-blue-700 font-semibold'>Contact Us</p>
                    <h1 className='text-5xl font-semibold'>Get in touch today</h1>
                    <p className='text-gray-300'>We're here to help! Fill out the form below or find other ways to <br /> connect with us.</p>
                    <form action="submit" className='flex flex-col gap-6'>
                        <input type="text"  placeholder='Your Name'  className='border-1 border-gray-300 p-2'/>
                        <input type="email"  placeholder='Your Email' className='border-1 border-gray-300 px-4 py-2' />
                        <input type="tel"  placeholder='Your Phone Number' className='border-1 border-gray-300 px-4 py-2' />
                        <textarea  placeholder='Your message' rows="5" className='border-1 border-gray-300 p-1'></textarea>
                        <input type="button" value="Send message" className='bg-blue-700 text-white p-2 w-48 rounded-lg' />
                    </form>
                </div>
                {/* right */}
                <div className='flex flex-col  border-2 border-gray-300 rounded p-1 '>
                    <img className='w-lg h-86 object-cover rounded' 
                    src="https://cdn.visily.ai/text2design/images/1e2484d8-3480-4f61-997f-f30223745507.jpg" alt="contat-bg" />
                    <div className='flex flex-col  p-8 gap-2'>
                        <h1  className='text-lg font-semibold'>Our Location & Contact</h1>
                        <div className='flex  items-center gap-2'>
                            <div><img src="images/location.svg" alt="location" /></div>
                            <div>
                                <p>Our Office</p>
                                <p className='text-gray-400 text-sm'>village Shahar Malpur,Samalkha</p>
                            </div>
                        </div>
                        <div className='border-1 border-gray-300 '></div>
                        <div  className='flex  items-center gap-2'>
                        <div><img src="images/email.svg" alt="email" /></div>
                            <div>
                                <p>Email Us</p>
                                <p className='text-gray-400 text-sm'>support@travelwish.com</p>
                            </div>
                        </div>
                        <div className='border-1 border-gray-300 '></div>
                        <div  className='flex  items-center gap-2'>
                        <div><img src="images/fb.svg" alt="phone" /></div>
                            <div>
                                <p>Call Us</p>
                                <p className='text-gray-400 text-sm'>-91 8950925099</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
