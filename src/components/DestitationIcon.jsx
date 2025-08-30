import React from 'react'

function DestitationIcon(props) {
  return (
    <>
      <div className='flex flex-col gap-3 items-center justify-center mb-6'>
        <img src={props.image} alt={props.name} className='h-40 w-40 rounded-full object-cover' />
        <p className='text-xl pb-2'>{props.name}</p>
      </div>
    </>
  )
}

export default DestitationIcon
