import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RiArrowRightCircleFill} from 'react-icons/ri'
const Services = () => {
    const popularCategory= [
        {
            
            title:'Customers Serve',
            des:'From 2004 to till now we serve around 10000+ customer all over the world.Therap provides Software as a Service (SaaS) to government and private organizations globally.',
            exp:'10k+'
        },
        {
            
            title:'Years Of Experience',
            des:'Therap (BD) Ltd. is a US-based Software Company registered in Bangladesh, operating since 2004. We have our office in Dhaka, Bangladesh, and affiliate offices in the USA and Canada.',
            exp:'19+'
        },
      
        {
            
            title:'Across Countries',
            des:'Therap provides Software as a Service (SaaS) to government and private organizations globally that serve people with intellectual and developmental disabilities.',
            exp:'10+'
        },
        {
            
            title:'Team Members',
            des:'We are a global team of professionals who actively collaborate to develop solutions for individuals and service providers in order to make a difference in their lives.',
            exp:'300+'
        },
    ]
  return (
    <div className=''>
       <div className='container mx-auto  flex flex-col justify-center items-center mt-10 '>
       <h4 className='flex justify-center items-center text-md lg:text-lg  bg-yellow-100 dark:bg-yellow-800 px-4 py-1 my-5 w-fit rounded-lg border-t-4 border-yellow-300 text-yellow-600 dark:text-yellow-200'>Our Journey</h4>
    
    <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-5'>Therap BD Ltd. at a Glance</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 py-10 w-full">

    {
        popularCategory.map((ctg,i)=>{
            return(
                <div key={i} className="rounded-lg bg-slate-100 dark:bg-slate-800 flex gap-3 flex-col   w-full group overflow-hidden transition duration-400 shadow-xl shadow-slate-100 border-2 border-white dark:border-slate-600 dark:shadow-slate-900">
           
        <p className='text-lg font-semibold text-center  bg-gray-200 dark:bg-gray-900 rounded-md px-4 pb-10 pt-10'>{ctg.title}</p>
        <p className='mx-auto flex justify-center items-center -mt-10 bg-primary px-4 py-4 rounded-full w-16 h-16 text-lg font-semibold text-white shadow-xl shadow-yellow-100 dark:shadow-yellow-600'>{ctg.exp}</p>
        <div className="w-full px-4 pt-2 pb-4">
            <p className='text-center'>{ctg.des}</p>
           
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