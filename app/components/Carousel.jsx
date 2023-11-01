'use client'
import { Button } from '@nextui-org/react';
import Image from 'next/image'
import {AiTwotoneStar} from 'react-icons/ai'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class Carousel extends Component {
  render() {
    const settings = {
      
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows:true,
      swipe:true,
      dots: true,
      pauseOnHover: true
    };
    return (
      <div>
      

        <Slider {...settings}>
        <div className="w-full px-2 md:px-0">
          <div className=" relative container lg:mx-auto light-bg dark:dark-bg py-2 mt-5 lg:mt-10 rounded-xl border-4 border-slate-100 dark:border-slate-500 dark:shadow-2xl px-3 lg:px-10 ">


  <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:gap-10 items-center lg:h-[80vh]">
  <div className='max-w-4xl w-full '>
  <p className=' text-sm lg:text-lg  bg-yellow-100 dark:bg-yellow-800 px-4 py-1 my-5 w-fit rounded-xl border-l-8 border-yellow-300 text-yellow-600 dark:text-yellow-200'>Top Leading Company</p>
  <h1 className='text-base lg:text-5xl  uppercase font-bold mt-5'>Join the leading
software company</h1>
  <p className='text-xs lg:text-md text-slate-400 dark:text-slate-300 font-medium max-w-lg my-5'>Through a combination of lectures, readings, and discussions, students
will gain a solid foundation in educational psychology.</p>
 <Button className='shadow-xl ' color='primary' size='md' radius='sm'>
  All Courses
 </Button>
  </div>
  <Image className='max-w-xl mt-4 w-full xl:h-[500px] object-cover rounded-3xl' loading='lazy' object-fit='contain' height={600} width={1000}  src="/hero2.png" alt="image" />
  </div>
 
</div>
          </div>
          <div className="w-full px-2 md:px-0 ">
          <div className=" relative container lg:mx-auto light-bg dark:dark-bg py-2 mt-5 lg:mt-10 rounded-xl border-4 border-slate-100 dark:border-slate-500 dark:shadow-2xl px-3 lg:px-10 ">


  <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:gap-10 items-center lg:h-[80vh]">
  <div className='max-w-4xl w-full '>
  <p className=' text-sm lg:text-lg  bg-yellow-100 dark:bg-yellow-800 px-4 py-1 my-5 w-fit rounded-xl border-l-8 border-yellow-300 text-yellow-600 dark:text-yellow-200'>Good Environment</p>
  <h1 className='text-base lg:text-5xl  uppercase font-bold mt-5'>We provide the best <br />
work environment</h1>
  <p className='text-xs lg:text-md text-slate-400 dark:text-slate-300 font-medium max-w-lg my-5'>Through a combination of lectures, readings, and discussions, students
will gain a solid foundation in educational psychology.</p>
 <Button className='shadow-xl ' color='primary' size='md' radius='sm'>
  All Courses
 </Button>
  </div>
  <Image className='max-w-xl mt-4 w-full xl:h-[500px] object-cover rounded-3xl' loading='lazy' object-fit='contain' height={500} width={1000}  src="/hero3.png" alt="image" />
  </div>
 
</div>
          </div>
        <div className="w-full px-2 md:px-0">
          <div className=" relative container lg:mx-auto light-bg dark:dark-bg py-2 mt-5 lg:mt-10 rounded-xl border-4 border-slate-100 dark:border-slate-500 dark:shadow-2xl px-3 lg:px-10 ">
<div className="absolute top-64  left-52 lg:top-64 lg:left-96 animate-spin-slow">
<Image className='max-w-xs w-full h-full' loading='lazy' object-fit='contain' height={100} width={800}  src="/infoicon.png" alt="image" />
</div>

  <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-10 lg:h-[80vh]">
  <div className='max-w-4xl w-full '>
  <p className=' text-sm lg:text-lg  bg-yellow-100 dark:bg-yellow-800 px-4 py-1 my-5 w-fit rounded-xl border-l-8 border-yellow-300 text-yellow-600 dark:text-yellow-200'>Learn & Grow With Us</p>
  <h1 className='text-base lg:text-5xl  uppercase font-bold mt-5'>You don't just learn <br />
here, you grow</h1>
  <p className='text-xs lg:text-md text-slate-400 dark:text-slate-300 font-medium max-w-lg my-5'>Through a combination of lectures, readings, and discussions, students
will gain a solid foundation in educational psychology.</p>
 <Button className='shadow-xl ' color='primary' size='md' radius='sm'>
  All Courses
 </Button>
  </div>
  <Image className='max-w-xl mt-4 w-full xl:h-[500px] object-cover rounded-3xl' loading='lazy' object-fit='contain' height={500} width={1000}  src="/hero1.png" alt="image" />
  </div>
 
</div>
          </div>
       
        </Slider>
      </div>
    );
  }
}