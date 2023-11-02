'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export default function SoftwareDevelopment() {
  return (
    <div className='container mx-auto px-4 md:px-0 flex flex-col justify-center items-center'>
    <h3 className='text-xl lg:text-4xl font-semibold text-center mt-10'>Software Development</h3>
    <h3 className='text-sm lg:text-xl text-justify my-5'>Theraps Development team is responsible for implementing and maintaining the services that the company has to offer, making the lives of people around the world with Developmental Disabilities a little more easier at every step. The team comprises some of the brightest minds, who are passionate about coding and strive to enhance their skills at every opportunity that they get. <br /> <br />

The team offers a friendly environment with a flavor of professionalism that one would expect from a global organization. We work with state-of-the-art Java/Java EE technologies, along with various web-development frameworks, which allow for a fluid user experience while keeping the application secure to the very core. We work closely with the other teams as well, playing an important role in the software development life-cycle, ensuring that the services provided to the users are always immaculate. The junior programmers also get the learning opportunity to hone their skills and bring out the best in them.
<br /> <br />

All passionate programmers are welcome to join the team, regardless of their choice of favorite programming language. Whether you are experienced in C, C++, C# or Python, if you have a knack for solving programming problems, have a solid grasp of object-oriented programming concepts, and consider it as a craft, you will always find a home in Theraps Development team!</h3>
<Button className='mb-10' color='primary' variant='shadow'>
    Apply Now
</Button>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-10 items-center">
            <div className="bg-slate-50 dark:bg-slate-700 px-4 py-4 rounded-lg border border-slate-200 h-full dark:border-slate-500">
                <div>
                    <Image className='w-full rounded-lg' src='https://thbdcareer.wpengine.com/images/team/software-dev-nazrul-220802-hover.jpg' alt='image' width={1000} height={1000}/>
                </div>
                <h3 className='text-2xl font-medium mt-3'>Director of Software Operations</h3>
                <h3 className='text-lg font-medium mt-1'>North South University | NSU</h3>
                <p className='mt-2 text-base'>At Therap, we are committed to innovation and bringing about new
changes. Here, we don't just appreciate talent, we nurture it.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 px-4 py-4 rounded-lg border border-slate-200 dark:border-slate-500">
                <div>
                    <Image className='w-full rounded-lg' src='https://thbdcareer.wpengine.com/images/team/software-dev-sharif-210824-hover.jpg' alt='image' width={1000} height={1000}/>
                </div>
                <h3 className='text-2xl font-medium mt-3'>Senior Software Engineer II</h3>
                <h3 className='text-lg font-medium mt-1'>University of Dhaka</h3>
                <p className='mt-2 text-base'>Therap is a very good starting point for every fresh software graduate.
Working on our large scale production app will lead them to achieve a
noticeable level of experience and exposure which will certainly give them
a very solid foundation in their careers. 99</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 px-4 py-4 rounded-lg border lg:col-span-2 border-slate-200 dark:border-slate-500">
                <div>
                    <Image className='w-full rounded-lg' src='https://thbdcareer.wpengine.com/images/team/software-dev-zoha-210823-hover.jpg' alt='image' width={1000} height={1000}/>
                </div>
                <h3 className='text-2xl font-medium mt-3'>Senior Software Engineer</h3>
                <h3 className='text-lg font-medium mt-1'>BRAC University</h3>
                <p className='mt-2 text-base'>The best part about being a part of Therap is that you evolve with every passing day.
The people you would meet here are some of the brightest minds there are, and they
would always bring out the best in you either through collaboration or mentorship.
Not to mention, you get to tinker with the best and latest technology there is! Also, at
the end of the day, the work we do is always gratifying, since we focus on helping the
community at every single step, everyday. "</p>
            </div>
        </div>
    </div>
  )
}
