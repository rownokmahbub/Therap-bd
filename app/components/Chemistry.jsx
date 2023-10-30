import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RiArrowRightCircleFill} from 'react-icons/ri'
import {PiStudentFill} from 'react-icons/pi';
import {LiaChalkboardTeacherSolid} from 'react-icons/lia'
import EnrollModal from './model/EnrollModal';
const Chemistry = () => {
    const chemistry= [
        {
            image:'/1.jpg',
            title:'It & Software',
            student:'2',
            teacher:'Rownok'
        },
        {
            image:'/2.jpg',
            title:'It & Software',
            student:'3',
            teacher:'Touhid'
        },
        {
            image:'/3.jpg',
            title:'It & Software',
            student:'10',
            teacher:'Abir'
        },
        
    ]
  return (
    <div className='flex flex-col justify-center items-center '>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-5 w-full">

        {
            chemistry.map((ctg,i)=>{
                return(
                    <div key={i} className="rounded-lg bg-slate-200 dark:bg-slate-700 flex gap-3 flex-col group overflow-hidden transition duration-400 shadow-xl shadow-slate-50 dark:shadow-slate-900">
            <Image className='max-w-xl w-full h-full rounded-md ' loading='lazy' object-fit='contain' height={100} width={1000}  src={ctg.image} alt="image"/>
          
            <div className="flex justify-between items-center px-4 pb-4">
            <p className='text-lg font-semibold px-4'>{ctg.title}</p>
                <div className="flex items-center gap-2">
                    <PiStudentFill/>
                    <p>{ctg.student}</p>
                    <LiaChalkboardTeacherSolid/>
                    <p className='line-clamp-1'>{ctg.teacher}</p>
                </div>
              
            </div>
            <div className='px-4 w-fit mx-auto pb-4'>
            <EnrollModal size='sm'/>
            </div>
           
            </div>
                )
            })
        }
           
        </div>
    </div>
  )
}

export default Chemistry