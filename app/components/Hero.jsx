'use client'
import { Button } from '@nextui-org/react';
import Image from 'next/image'
import {AiTwotoneStar} from 'react-icons/ai'

const Hero = () => {
  return (
<>
<div className=" relative container lg:mx-auto light-bg dark:dark-bg py-10 lg:py-2 mt-10 rounded-xl border-4 border-slate-100 dark:border-slate-500 dark:shadow-2xl px-10 ">
<div className="absolute top-64  left-52 lg:top-64 lg:left-96 animate-spin-slow">
<Image className='max-w-xs w-full h-full' loading='lazy' object-fit='contain' height={100} width={800}  src="/infoicon.png" alt="image" />
</div>
<div className="absolute bottom-28 lg:top-10 right-10">
  <div className=" dark:bg-slate-700 px-4 py-4 space-y-1  rounded-xl shadow-lg dark:shadow-2xl animate-bounce-slow duration-500">
      <div className="flex items-center gap-2 text-sm">
        <AiTwotoneStar className='text-amber-300'/>
        4.5 (534k Reviews)
      </div>
      <p className='text-lg font-semibold text-center'>Congratulations</p>
  </div>
</div>
  <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:h-[80vh]">
  <div className='max-w-4xl w-full '>
  <p className=' text-sm lg:text-lg  bg-sky-100 dark:bg-sky-800 px-4 py-1 my-5 w-fit rounded-xl border-l-8 border-sky-300 text-sky-600 dark:text-sky-200'>Online/ Offline Learning Platform</p>
  <h1 className='text-2xl lg:text-5xl  capitalize font-bold mt-5'>Master The Skills<br /> Drive Your Career.</h1>
  <p className='text-sm lg:text-md text-slate-400 dark:text-slate-300 font-medium max-w-lg my-5'>Through a combination of lectures, readings, and discussions, students
will gain a solid foundation in educational psychology.</p>
 <Button className='shadow-xl ' color='primary' size='lg' radius='sm'>
  All Courses
 </Button>
  </div>
  <Image className='max-w-4xl w-full' loading='lazy' object-fit='contain' height={500} width={1000}  src="/banner-img.png" alt="image" />
  </div>
 
</div>
</>
  );
}

export default Hero