import React from 'react'

function ReviewCard(props) {
    return (
        <>
            <div className='flex flex-col w-md border-1 border-gray-300 p-2 text-gray-700 shadow-md'>
                {/* profile */}
                <div className='flex gap-5 items-center'>
                    <img src={props.img} alt={props.name} className='w-14 h-14 rounded-full' />
                    <div className='flex flex-col'>
                        <p className='text-[14px]'>{props.name}</p>
                        <p className='text-[14px]'>{props.loc}</p>
                    </div>
                </div>
                <div className='pt-3'>
                    <p className='text-[16px]'>{props.review}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewCard
