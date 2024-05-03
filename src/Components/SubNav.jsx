import React from 'react'

export default function SubNav() {
  return (
    <div className="flex flex-wrap gap-4 ms-2 border-b">
    <button className='border-0 outline-0 font-bold text-sm text-gray-500 border-b-2 border-blue-600'>Description</button>
    <button className='border-0 outline-0 font-bold text-sm text-gray-500'>What's Coverd</button>
    <button className='border-0 outline-0 font-bold text-sm text-gray-500'>Meeting Up</button>
    <button className='border-0 outline-0 font-bold text-sm text-gray-500'>Iterlity Breakdown</button>
    <button className='border-0 outline-0 font-bold text-sm text-gray-500'>Policies</button>
    <button className='border-0 outline-0 font-bold text-sm text-gray-500'>Reviews</button>
    <button className='border-0 outline-0 font-bold text-sm text-gray-500'>FQAs</button>    
     </div>
  )
}
