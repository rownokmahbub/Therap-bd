import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RiArrowRightCircleFill} from 'react-icons/ri'
const PopularCategory = () => {
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
    <div className='container mx-auto flex flex-col justify-center items-center mt-10'>
       
        <h4 className='flex justify-center items-center text-md lg:text-lg  bg-sky-100 dark:bg-sky-800 px-4 py-1 my-5 w-fit rounded-lg border-t-4 border-sky-300 text-sky-600 dark:text-sky-200'>Browse Categories</h4>
    
        <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-5'>Popular Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 py-10 w-full">

        {
            popularCategory.map((ctg,i)=>{
                return(
                    <div key={i} className="px-4 py-4 rounded-lg bg-slate-100 dark:bg-slate-800 flex gap-3 flex-col group overflow-hidden transition duration-400 shadow-xl shadow-slate-50 dark:shadow-slate-900">
            <Image className='max-w-xl w-full h-full rounded-md shadow-xl shadow-slate-200 dark:shadow-slate-900' loading='lazy' object-fit='contain' height={100} width={1000}  src={ctg.image} alt="image"/>
            <p className='text-lg font-semibold'>{ctg.title}</p>
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
  )
}

export default PopularCategory