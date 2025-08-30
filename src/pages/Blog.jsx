import React from 'react';
import BlogCard from '../components/BlogCard';

function Blog() {
  return (
    <>
      <div className='text-center p-10'>
        <p className='text-blue-700 text-5xl font-bold mb-5'>Travel Blog</p>
        <p className='text-2xl'>Your daily dose of wanderlust, travel tips, and inspiring stories from <br /> around the globe.</p>
      </div>
      {/* main blog */}
      <div className='border-1 border-gray-300 m-10 flex items-center justify-between rounded-xl mb-20'>
        <div><img src="https://cdn.visily.ai/text2design/images/516acca1-b2df-4bad-989f-7b234f6a9f4a.jpg" alt="blog-main" className='w-xl h-80 object-cover rounded-xl' /></div>
        <div className='flex flex-col w-1/2 justify-center gap-4'>
          <h2 className='text-3xl font-semibold'>The Art of Sustainable Travel: <br /> Exploring Eco-Friendly Destinations</h2>
          <p>Discover how to minimize your environmental footprint while maximizing your travel experience. From responsible tourism practices to supporting local communities, we delve into the core principles of eco-conscious adventures.</p>
          <p className='text-sm text-gray-400'>March 26, 2025</p>
        </div>
      </div>
      {/* blog */} 
      <div className=' rounded-xl grid grid-cols-3 m-10 gap-10'>
        <BlogCard img="https://cdn.visily.ai/text2design/images/ec67177a-695d-492d-a630-f3ace6f38fb9.jpg" name="Unearthing Ancient Wonders: A Journey Through Greece's History" time="Explore the timeless beauty of Greece, from the Acropolis to the hidden gems of the Peloponnese. A deep dive into history and mythology."/>
        <BlogCard img="https://cdn.visily.ai/text2design/images/1d46a35b-f8de-412c-b217-9dbd2df88782.jpg" name="A Culinary Journey Through Southeast Asia: Must-Try Dishes" time="Embark on a gastronomic adventure! From the bustling street food of Bangkok to the fragrant curries of Vietnam, discover the authentic flavors of Southeast Asia."/>
        <BlogCard img="https://cdn.visily.ai/text2design/images/28128d76-99c1-43a7-8b83-448faa0d27ce.jpg" name="Conquering the Peaks: Top Hiking Trails for Every Adventurer" time="Whether you're a beginner or an experienced trekker, find your next challenge among these breathtaking hiking trails. Tips for preparation and safety included."/>
        <BlogCard img="https://cdn.visily.ai/text2design/images/96e74834-7c8d-4349-be4e-291ed0e1d93d.jpg" name="Indulge in Opulence: The World's Most Exclusive Luxury Resorts" time="Dreaming of lavish getaways? Discover a selection of the most exquisite luxury resorts offering unparalleled service, privacy, and breathtaking views."/>
        <BlogCard img="https://cdn.visily.ai/text2design/images/753ade52-96ed-4dae-9232-42e6f7120c2f.jpg" name="Budget Travel Hacks: Explore More Without Breaking the Bank" time="Unlock the secrets to affordable travel. Learn how to save on flights, accommodation, and activities without compromising on your adventure."/>
        <BlogCard img="https://cdn.visily.ai/text2design/images/90214f99-fad3-4c73-aaef-3ce3fc0e60f3.jpg" name="Into the Wild: A Guide to Unforgettable Wildlife Safaris" time="Prepare for an encounter with nature's wonders. Our guide covers everything you need to know for a responsible and thrilling wildlife safari."/>

      </div>
      {/* pink bg */}
      <div className='bg-pink-500 flex items-center justify-between p-10 rounded-xl m-20'>
        <div className='flex flex-col w-1/2 text-white justify-center gap-5'>
          <p className='text-4xl font-bold'>Looking for something more?</p>
          <p className='w-lg'>Subscribe to our newsletter for exclusive travel tips, new package announcements, and inspiring stories directly to your inbox.</p>
          <div>
          <input type="email" name="email" placeholder='Your email address...' className='border-gray-300 border-1 outline-none rounded-lg px-6 py-2 mr-3' />
          <button className='bg-white text-black w-32 p-2 rounded-lg'>Subscribe</button>
          </div>
        </div>
        <div>
          <img  className="w-98 h-60 rounded-xl object-cover"
          src="https://cdn.visily.ai/text2design/images/5053dd60-8fb3-4581-b02b-9d0c8dec072d.jpg" alt="pink-img" />
        </div>
        </div>
    </>
  )
}

export default Blog
