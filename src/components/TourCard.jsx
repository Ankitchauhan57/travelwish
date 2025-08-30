import React from 'react'

const TourCard = (props) => {
    return (
        <>
            <div className='flex flex-col items-center  justify-center gap-3 border-1 border-gray-300 rounded p-1'>
                <img src={props.img} alt={props.name} className='w-96 h-48 rounded object-cover'/>
                <p className='text-center'>{props.name}</p>
                <div className='flex justify-start'>
                <img src="images/star.svg" alt="rating" />
                <img src="images/star.svg" alt="rating" />
                <img src="images/star.svg" alt="rating" />
                <img src="images/star.svg" alt="rating" />
                <img src="images/star.svg" alt="rating" />
                </div>
                <div className='flex justify-end items-center mb-3'>
                    <p className='text-red-600 pr-35 font-extrabold'>{props.price}</p>
                    <button className='text-white bg-blue-800 px-4 py-1 rounded-md'>Book Now</button>
                </div>
            </div>
        </>
    )
}

export default TourCard
