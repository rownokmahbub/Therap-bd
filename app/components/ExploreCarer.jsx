'use client'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightSquareFill } from 'react-icons/bs'
import { HiPresentationChartLine } from 'react-icons/hi2'

export default function ExploreCarer() {
    const careers=[
        {
            career:'Software Developer',
            href:'/sd'
        },
        {
            career:'Software Quality Assurance',
            href:'/sd'
        },
        {
            career:'Database Administration',
            href:'/sd'
        },
        {
            career:'System Operations',
            href:'/sd'
        },
        {
            career:'Application Operations',
            href:'/sd'
        },
        {
            career:'Training & Content',
            href:'/sd'
        },
        {
            career:'Marketing Operations',
            href:'/sd'
        },
        {
            career:'Therap Global',
            href:'/sd'
        },
        {
            career:'Design and Usability',
            href:'/sd'
        },
        {
            career:'Video Content Production',
            href:'/sd'
        },
        {
            career:'Biometric loT',
            href:'/sd'
        },
        {
            career:'Machine Learning',
            href:'/sd'
        },
        {
            career:'Android Application',
            href:'/sd'
        },
        {
            career:'IOS Application',
            href:'/sd'
        },
        {
            career:'Compliance and Quality Control',
            href:'/sd'
        },

    ]
  return (
    <div className='container mx-auto' id='department'>
        <h3 className='text2xl lg:text-5xl text-center'>Explore Careers at Therap BD Ltd.</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 items-center mt-10">
{careers.map((cr,i)=>(
    <div key={i} className='bg-slate-50 border border-slate-100 dark:border-slate-500 flex items-center justify-between rounded-lg dark:bg-slate-700 px-3 py-3'>
    <div className='flex items-center gap-3'>
    <HiPresentationChartLine className='text-primary text-xl'/>
        <p className='text-lg lg:text-xl font-medium'>{cr.career}</p>
    </div>
        <Link className='' href={cr.href}>
        <Button color='primary'>
        View
            <BsArrowRightSquareFill className='text-white'/>
        </Button>
          
        </Link>
    </div>
))}
        </div>
    </div>
  )
}
