import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {PiStudentFill} from 'react-icons/pi';
import {LiaChalkboardTeacherSolid} from 'react-icons/lia'
import EnrollModal from './model/EnrollModal';
const OutDoorGame = () => {
   
  return (
    <div className='flex flex-col justify-center items-center '>
    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-7">
            <div className="w-full h-full col-span-1 lg:col-span-2">
                <Image className='rounded-xl h-full' src='https://images.pexels.com/photos/8813526/pexels-photo-8813526.jpeg?auto=compress&cs=tinysrgb&w=800' width={1000} height={1400} alt='image'/>
            </div>
            <div className="flex flex-col gap-6">
            <div className="w-full">
                <Image className='rounded-xl' src='https://images.pexels.com/photos/8813564/pexels-photo-8813564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={1000} height={1000} alt='image'/>
            </div>
            <div className="w-full">
                <Image className='rounded-xl' src='https://images.pexels.com/photos/1080882/pexels-photo-1080882.jpeg?auto=compress&cs=tinysrgb&w=800' width={1000} height={1000} alt='image'/>
            </div>
            </div>
          
        </div>
    </div>
  )
}

export default OutDoorGame