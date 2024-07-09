import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* AVATAR */}
      <Image src="https://t4.ftcdn.net/jpg/05/61/14/81/360_F_561148117_gtEwt3nIjA2cy5OA1cJbBnT5cyv45FAH.jpg" width={48} height={48} alt="" className='w-12 h-12 object-cover rounded-full'/>
      {/* POST */}
      <div className='flex-1'>
        {/* TEXT INPUT */}
        <div className='flex gap-4'>
          <textarea placeholder="What's on your mind?" className='flex-1 p-2 bg-slate-100 rounded-lg'></textarea>
          <Image src="/emoji.png" width={20} height={20} alt="" className='w-5 h-5 cursor-pointer self-end'/>
        </div>
        {/* POST OPTIONS */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addimage.png" width={20} height={20} alt="" />
           Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addVideo.png" width={20} height={20} alt="" />
           Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/poll.png" width={20} height={20} alt="" />
           Poll
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/events.png" width={20} height={20} alt="" />
           Event
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddPost