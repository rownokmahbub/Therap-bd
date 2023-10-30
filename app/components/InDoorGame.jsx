import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {PiStudentFill} from 'react-icons/pi';
import {LiaChalkboardTeacherSolid} from 'react-icons/lia'
import EnrollModal from './model/EnrollModal';
const InDoorGame = () => {
   
  return (
    <div className='flex flex-col justify-center items-center '>
    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-7">
        <div className="flex flex-col gap-6">
            <div className="w-full">
                <Image className='rounded-xl' src='https://images.pexels.com/photos/6203533/pexels-photo-6203533.jpeg?auto=compress&cs=tinysrgb&w=800' width={1000} height={1000} alt='image'/>
            </div>
            <div className="w-full">
                <Image className='rounded-xl' src='https://images.pexels.com/photos/6203520/pexels-photo-6203520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={1000} height={1000} alt='image'/>
            </div>
            </div>
            <div className="w-full h-full col-span-1 lg:col-span-2">
                <Image className='rounded-xl h-full' src='https://images.pexels.com/photos/7413889/pexels-photo-7413889.jpeg?auto=compress&cs=tinysrgb&w=800' width={1000} height={1400} alt='image'/>
            </div>
          
          
        </div>
    </div>
  )
}

export default InDoorGame