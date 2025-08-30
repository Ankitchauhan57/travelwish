import React from 'react'
import DestitationIcon from '../components/DestitationIcon'
import TourCard from '../components/TourCard'
import ReviewCard from '../components/ReviewCard'
import BlogCard from '../components/BlogCard'

function Home() {
  return (
    <>
      <div className='relative w-screen h-[650px]'>
        <img src="/images/bg.jpg" alt="bg" className='w-full h-full object-cover' />
        <div className='bg-white/60 opacity-40 w-screen  backdrop-blur-md absolute inset-0 z-10'></div>
        {/* content   */}
        <div className='absolute inset-0  z-20  flex flex-col  justify-center items-center gap-3'>
          <h2 className='text-black text-6xl font-bold'>Your Journey, Your Story</h2>
          <p className='text-center text-xl'>Discover incredible destinations and craft unforgettable travel experiences with TravelWsih.</p>
          <div className='w-fit  bg-white rounded-3xl flex items-center shadow-md'>
            <input type="text" placeholder='Search for destinations, packages, or interests...' className='bg-white rounded-3xl  p-2 px-4 outline-none w-90' />
            <button className='bg-blue-800 text-white rounded-3xl px-4 py-3 hover:bg-blue-900 transition-all'>Search Packages</button>
          </div>
        </div>
      </div>
      {/* top destitation */}
      <div className='m-5  p-6'>
        <h2 className='text-4xl font-bold mb-4 '>Top Destinations to Experience</h2>
        <div className='grid grid-cols-6 p-5'>
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/00fc2ce6-12a3-4590-ba49-43d9a6e7f7e8.jpg" name="China" />
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/4815918f-786f-4e44-90fb-154060850da5.jpg" name="Germany" />
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/1627f464-cf43-4b79-837e-e0f84427194f.jpg" name="Austria" />
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/78e339b0-b993-4028-8c83-cd84f9ca63af.jpg" name="Switzerland" />
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/51828219-e802-4800-8706-848af63c633e.jpg" name="United State" />
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/12fccd9e-1bf4-45aa-8866-119150009e1a.jpg" name="Japan" />
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/bd769d2c-0c8f-4cb0-8279-74148912e905.jpg" name="Nepal" />
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/951ddfee-8c6f-4c85-a979-7832bf28c232.jpg" name="Singapore" />
        <DestitationIcon image="https://cdn.visily.ai/text2design/images/22d64392-e242-4ee7-b085-3873d08ee2e2.jpg" name="Hong Kong" />
        </div>
        
      </div>
      {/* feature travel */}
      <div className=' m-5  p-6'>
        <h2 className='text-4xl font-bold mb-4'>Featured Travel Experiences</h2>
        <div className='flex gap-5 p-5'>
        <TourCard img="https://cdn.visily.ai/text2design/images/8d76d5f3-9439-4686-a774-12a046ccf099.jpg" name="Nepal: Sacred Temples and Himalayan Views" price="$1,800"/>
        <TourCard img="https://cdn.visily.ai/text2design/images/2da8b4ee-0aec-4984-9ec9-0b92414ea45f.jpg" name="Bhutan: Trekking to Tiger's Nest Monastery" price="$2,500" />
        <TourCard img="https://cdn.visily.ai/text2design/images/1f430f97-8325-47aa-83b1-aca54c88fc90.jpg" name="Patagonia: Glaciers and Wildlife Expedition" price="$3,200"/>
        <TourCard img="https://cdn.visily.ai/text2design/images/79e4358e-dd81-4a42-bdf6-5db66aea78c6.jpg" name="Egypt: Wonders of the Nile" price="$2,100" />
        </div>
      </div>
      {/* Best destitation */}
      <div className='m-5  p-6'>
      <h2 className='text-4xl font-bold mb-4'>Best Destinations in Asia</h2>
      <div className='grid grid-cols-3 p-5 gap-15'>
        <TourCard img="https://cdn.visily.ai/text2design/images/5da21f4b-b1e5-448a-91bc-91d82508c8d5.jpg" name="Kyoto: Cultural Heart of Japan" price="$1,500" />
        <TourCard img="https://cdn.visily.ai/text2design/images/173e3b92-a445-4747-bab6-5c2c90e8b24d.jpg" name="Jaipur: The Pink City" price="$950" />
        <TourCard img="https://cdn.visily.ai/text2design/images/7496d28f-adb5-407e-9040-0dd8d3dcab11.jpg" name="Hoi An: Place of Serenity" price="$800" />
        <TourCard img="https://cdn.visily.ai/text2design/images/6b13d1b0-bc15-4f75-860a-0ede7b686a7b.jpg" name="Bali: Island Paradise" price="$1,200" />
        <TourCard img="https://cdn.visily.ai/text2design/images/048e2cec-7b65-4c44-a176-638cb4001fba.jpg" name="Seoul: Dynamic Capital" price="$1,300" />
        <TourCard img="https://cdn.visily.ai/text2design/images/ad491ed0-6a7d-4da9-98b0-0732f37efbdf.jpg" name="Bangkok: City of Angels" price="$700" />

      </div>
      </div>
      {/* happy travel say */}
      <div className=' m-5 p-6'>
        <h2 className='text-4xl font-bold mb-4'>What Our Happy Travelers Say</h2>
        <div className='grid grid-cols-3 p-5'>
          <ReviewCard img="https://cdn.visily.ai/app/avatars/v1/big-size/G.png" name="Sarah J." loc="London, UK" review='"Timeless Travels made our dream trip to Japan a reality! Every detail was meticulously planned, and the recommendations were spot on. Highly recommend!"' />
          <ReviewCard img="https://cdn.visily.ai/app/avatars/v1/big-size/B.png" name="David M." loc="New York, USA" review='"The seamless booking process and excellent customer support truly set Timeless Travels apart. Our family vacation to the Maldives was unforgettable."' />
          <ReviewCard img="https://cdn.visily.ai/app/avatars/v1/big-size/C.png" name="Emily R." loc="Sydney, Australia" review='"I have never experienced such personalized travel planning. The itinerary for our European adventure was perfect for us. We are already planning our next trip!"' />
        </div>
      </div>
      {/* banner */}
      <div className='my-8 relative'>
      <img src="images/banner.jpg" alt="banner" className='w-fit h-96' />
      <div className='absolute inset-0 bg-white opacity-50'>
      </div>
      <div className='absolute inset-0 flex flex-col gap-4 justify-center items-center text-center'>
        <h2 className='text-4xl font-bold'>Ready to Plan Your Dream Trip?</h2>
        <p className='text-xl max-w-2xl'>Our intuitive trip planner helps you create personalized itineraries tailored to your desires.</p>
        <button className='text-lg bg-blue-800 px-10 py-2 rounded-2xl text-white font-semibold'>Start Planning Now</button>
      </div>
      </div>
      {/*expolre blog  */}
      <div className=' m-5 p-6'>
        <h2 className='text-4xl font-bold'>Explore Our Latest Blog Posts</h2>
        <div className='grid grid-cols-3 gap-10 p-5'>
          <BlogCard img="https://cdn.visily.ai/text2design/images/12838c43-f785-4bb4-ad3b-d6277982ee1b.jpg" name="October: Festive Seasons Across the Globe" time="7 min read" />
          <BlogCard img="https://cdn.visily.ai/text2design/images/438c2298-15ba-41ca-bbd8-7de269cd3cdb.jpg" name="Hidden Gems of European Cities" time="9 min read" />
          <BlogCard img="https://cdn.visily.ai/text2design/images/4c769d8a-db55-49df-abef-d10604156382.jpg" name="The Joys of Solo Travel: A Guide" time="6 min read" />
          <BlogCard img="https://cdn.visily.ai/text2design/images/1848b364-6349-4fde-9ae7-d8e82c8922f3.jpg" name="Sustainable Travel: Making a Difference" time="8 min read" />
        </div>
        <button className='rounded-xl px-10 py-2 border-1 border-gray-300 ml-150'>View All Blog Posts</button>
      </div>
      
    </>
  )
}

export default Home
