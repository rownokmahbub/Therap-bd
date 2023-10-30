import Image from 'next/image'
import React from 'react'

export default function ManagingDirector() {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center mt-10'>

        <Image src='/audio.png' className='w-20 h-20 ' width={400} height={400} alt='audio'/>
        <h3 className='text-2xl lg:text-5xl my-6 font-semibold'>Message from the Managing Director</h3>
        <div className='rounded-full overflow-hidden'>
        <Image src='/director.png' className='w-40 h-40 ' width={400} height={400} alt='audio'/>
        </div>
        <p className='text-2xl font-bold mt-3'>Richard Robbins</p>
      <p className='text-2xl text-slate-700 dark:text-slate-300 font-semibold text-center max-w-3xl w-full mt-2'>"Our organizational culture fosters creativity and innovation with
endless opportunities and rewards. At Therap, your ideas will
matter and make a difference."</p>


    </div>
  )
}
