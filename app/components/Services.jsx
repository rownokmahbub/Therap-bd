import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RiArrowRightCircleFill} from 'react-icons/ri'
const Services = () => {
    const popularCategory= [
        {
            image:'/1.jpg',
            title:'It & Software',
            href:'/it'
        },
        {
            image:'/2.jpg',
            title:'It & Software',
            href:'/it'
        },
        {
            image:'/3.jpg',
            title:'It & Software',
            href:'/it'
        },
        {
            image:'/4.jpg',
            title:'It & Software',
            href:'/it'
        },
    ]
  return (
    <div className='light-bg dark:dark-bg'>
       <div className='container mx-auto  flex flex-col justify-center items-center mt-10 '>
       <h4 className='flex justify-center items-center text-md lg:text-lg  bg-yellow-100 dark:bg-yellow-800 px-4 py-1 my-5 w-fit rounded-lg border-t-4 border-yellow-300 text-yellow-600 dark:text-yellow-200'>Our Journey</h4>
    
    <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-5'>Therap BD Ltd. at a Glance</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 py-10 w-full">

    {
        popularCategory.map((ctg,i)=>{
            return(
                <div key={i} className="rounded-lg bg-slate-100 dark:bg-slate-800 flex gap-3 flex-col group overflow-hidden transition duration-400 shadow-xl shadow-slate-50 dark:shadow-slate-900">
       
        <p className='text-lg font-semibold  bg-gray-400 dark:bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>{ctg.title}</p>
        <div className="flex justify-between items-center">
            <p>View Demo</p>
            <Link className='group-hover:scale-90' href={ctg.href}>
                <RiArrowRightCircleFill className='text-4xl text-slate-500 dark:text-slate-200'/>
            </Link>
        </div>
        </div>
            )
        })
    }
       
    </div>
       </div>
     
    </div>
  )
}

export default Services