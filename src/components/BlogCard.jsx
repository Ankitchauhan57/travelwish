import React from 'react'

function BlogCard(props) {
  return (
    <>
      <div className='flex flex-col  justify-center gap-3 border-1 border-gray-300 rounded p-3'>
        <img src={props.img} alt={props.name} className='w-md h-52 rounded object-cover' />
        <p>{props.name}</p>
        <p className='text-gray-600'>{props.time}</p>
        <a href="#" className='my-3'>Read more</a>
      </div>
    </>
  )
}

export default BlogCard
