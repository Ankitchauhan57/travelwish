import React from 'react'

function JourneyCard(props) {
  return (
    <>
    <div className='flex flex-col  border-1 border-gray-300 p-4 shadow-md'>
                        <p className='text-xl text-blue-800 font-bold'>{props.name}</p>
                        <p className='text-xl font-bold'>{props.loc}</p>
                    <p className='text-sm text-gray-400'>{props.review}</p>
                
            </div>
    </>
  )
}

export default JourneyCard
