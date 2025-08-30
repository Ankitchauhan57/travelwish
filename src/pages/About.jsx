import React from 'react'
import ReviewCard from '../components/ReviewCard'
import JourneyCard from '../components/JourneyCard'

function About() {
  return (
    <>
      {/* main banner */}
      <div className='flex items-center justify-between w-full  p-10 '>
        <div className='flex flex-col gap-5  '>
          <h1 className='text-6xl font-bold '>Your Journey Starts <br></br>Here, With Our Story</h1>
          <p className='text-lg text-gray-400'>At TRAVELWISH, we believe every journey tells a unique story.<br></br> Founded on a passion for exploration and a commitment to <br></br>unforgettable experiences, we craft bespoke adventures<br></br> tailored to your dreams.</p>
          <button className='bg-blue-800 text-white  py-1 w-52 rounded'>Discover Our Journey</button>
        </div>
        <div >
          <img src="https://cdn.visily.ai/text2design/images/411614d9-ad7d-42b4-9a96-60f4daa72075.jpg" alt="main-banner" className='w-2xl h-96 object-cover' />
        </div>
      </div>
      {/* blue banner */}
      <div className='py-20 px-80 bg-blue-100 my-10'>
        <p className='text-4xl text-center font-bold'>Our mission is to unlock the world's wonders, one personalized journey at a time, creating memories that last a lifetime.</p>
      </div>

      {/* our principle */}
      <div className='flex justify-between p-10 '>
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl font-bold'>Who We Are: Our Guiding Principles</h2>
          <details>
            <summary>Passion for Exploration</summary>
            <ul>
              <li>Japan Tour</li>
              <li>Maldives Vacation</li>
              <li>European Adventure</li>
            </ul>
          </details>
          <div className='border-1 border-gray-200 w-80'></div>

          <details>
            <summary>Commitment to Excellence</summary>
            <ul>
              <li>Japan Tour</li>
              <li>Maldives Vacation</li>
              <li>European Adventure</li>
            </ul>
          </details>
          <div className='border-1 border-gray-200 w-80'></div>

          <details>
            <summary>Sustainable Travel</summary>
            <ul>
              <li>Japan Tour</li>
              <li>Maldives Vacation</li>
              <li>European Adventure</li>
            </ul>
          </details>
          <div className='border-1 border-gray-200 w-80'></div>

          <details>
            <summary>Customer-Centric Approach</summary>
            <ul>
              <li>Japan Tour</li>
              <li>Maldives Vacation</li>
              <li>European Adventure</li>
            </ul>
          </details>
          <div className='border-1 border-gray-200 w-80'></div>

          <details>
            <summary>Innovation in Travel</summary>
            <ul>
              <li>Japan Tour</li>
              <li>Maldives Vacation</li>
              <li>European Adventure</li>
            </ul>
          </details>
          <div className='border-1 border-gray-200 w-80'></div>
        </div>
        <div className='grid grid-cols-2 gap-1 rounded'>
          <img src="https://cdn.visily.ai/text2design/images/84199324-0934-47bb-a4c8-a6a76be5e310.jpg" alt="bg-1" className='w-60 h-40 rounded'/>
          <img src="https://cdn.visily.ai/text2design/images/23763425-0d25-4d02-9659-b0197b104b11.jpg" alt="bg-2" className='w-60 h-40 rounded'/>
          <img src="https://cdn.visily.ai/text2design/images/4f497563-076d-4bca-9112-e78761891dcf.jpg" alt="bg-3" className='w-60 h-40 rounded'/>
          <img src="https://cdn.visily.ai/text2design/images/7dbd37ea-db64-40b1-baec-529eac8abaa2.jpg" alt="bg-4" className='w-60 h-40 rounded'/>
        </div>
      </div>

      {/* our journay*/}
      <div className=' p-15'>
        <h2 className='text-4xl font-bold text-center mb-10' >Our Journey: Milestones of Growth</h2>
        <div className='grid grid-cols-3  gap-4'>
          <JourneyCard name="2010" loc="Founded Timeless Travels" review="Started as a small, passionate team dedicated to crafting unique travel experiences for discerning explorers." />
          <JourneyCard name="2010" loc="Founded Timeless Travels" review="Started as a small, passionate team dedicated to crafting unique travel experiences for discerning explorers." />
          <JourneyCard name="2010" loc="Founded Timeless Travels" review="Started as a small, passionate team dedicated to crafting unique travel experiences for discerning explorers." />
          <JourneyCard name="2010" loc="Founded Timeless Travels" review="Started as a small, passionate team dedicated to crafting unique travel experiences for discerning explorers." />
          <JourneyCard name="2010" loc="Founded Timeless Travels" review="Started as a small, passionate team dedicated to crafting unique travel experiences for discerning explorers." />
          <JourneyCard name="2010" loc="Founded Timeless Travels" review="Started as a small, passionate team dedicated to crafting unique travel experiences for discerning explorers." />
        </div>
      </div>
      {/* pink bg */}
        <div className='bg-pink-500 flex items-center justify-between p-10 rounded-xl m-10'>
        <div className='flex flex-col w-1/2 text-white justify-center gap-5'>
          <p className='text-4xl font-bold'>Join Our Growing Team</p>
          <p className='w-lg'>Are you passionate about travel and creating unforgettable experiences? Explore exciting career opportunities with TravelWish and help us shape the future of global exploration.</p>
          <button className='bg-white text-black w-56 p-2 rounded-xl'>View Open Positions</button>
        </div>
        <div>
          <img  className="w-98 h-60 rounded-xl object-cover"
          src="https://cdn.visily.ai/text2design/images/d4921964-d74d-435a-adca-f83e310c1fb5.jpg" alt="pink-img" />
        </div>
        </div>

      {/* <div style={{ fontSize: "2rem", color: "gold" }}>
      &#9733; &#9734; &#9733; &#9734; &#9733;
    </div> */}

    </>
  )
}

export default About
