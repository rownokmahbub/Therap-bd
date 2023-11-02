'use client'
import { Button, Input, Select, SelectItem, Tooltip } from '@nextui-org/react'
import { TiLocationOutline } from 'react-icons/ti';
import { RiSearchLine } from 'react-icons/ri'
import {CgWorkAlt} from 'react-icons/cg'
import {IoTimerOutline} from 'react-icons/io5'
import Link from 'next/link';
export default function CurrentOpening() {
 const names = [
       {
        label:'Name',
       },
       {
        label:'Most Recent'
       }
      ];
      const opening=[
        {
            label:'Cloud Operations (1)'
        },
        {
            label:'Development Team (1)'
        },
        {
            label:'IoT (1)'
        },
        {
            label:'IT Ops (1)'
        },
        {
            label:'Mobile Team (1)'
        },
        {
            label:'Software Development (1)'
        },
        {
            label:'Software Quality Assurance (1)'
        },
        {
            label:'System Operations (2)'
        },
        {
            label:'Therap Global (1)'
        },
        {
            label:'Web Design & Development (1)'
        }
      ]
      const data=[
        {
            tooltip:'Associate System Administrator',
            title:'Associate System Administrator',
            subtitle:'Cloud Operations',
            location:'Banani, Dhaka',
            time:'Full-time'
        },
        {
            tooltip:'Creative Web Designer',
            title:'Creative Web Designer',
            subtitle:'Web Design & Development',
            location:'Banani, Dhaka',
            time:'Full-time'
        },
        {
            tooltip:'Experienced React Developer',
            title:'Experienced React Developer',
            subtitle:'Web Design & Development',
            location:'Banani, Dhaka',
            time:'Full-time | Partially remote'
        },
        {
            tooltip:'Software Developer',
            title:'Software Developer',
            subtitle:'Web Design & Development',
            location:'Banani, Dhaka',
            time:'Full-time'
        },
      ]
  return (
    <div className='container mx-auto flex flex-col md:h-screen justify-center items-center px-4 lg:px-0 mt-10 mb-4'>
        <h3 className='text-4xl font-semibold'>Jobs At Therap BD LTD</h3>
        <p className='max-w-2xl w-full text-center mt-4'>Therap BD Ltd. is a US-based Software Company registered in Bangladesh, operating since 2004. We have our office in Dhaka, Bangladesh, and affiliate offices in the USA and Canada. To learn more, please visit TherapBD website.</p>
        <div className=" bg-slate-50 shadow-xl shadow-slate-50 dark:shadow-slate-800 border border-slate-200 dark:border-slate-600 dark:bg-slate-800 rounded-xl md:px-10 py-10 mt-10 max-w-6xl w-full ">
       
        <div className='flex flex-col md:flex-row px-4 md:px-0 justify-between gap-5 items-center w-full'>
        <Input
          type="email"
          label="Search Jobs"
          variant='bordered'
         size='sm'
          labelPlacement="inside"
          endContent={
            <RiSearchLine className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
          }
        />
        <div className="flex flex-col md:flex-row  items-center gap-5 md:gap-3 w-full">
        <Select 
            size='sm'
            label="Sort By"
      placeholder="Name"
            className="max-w-xs" 
            variant='bordered'
          >
            {names.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
          <Select 
            size='sm'
            variant='bordered'
            label="Job Type"
      placeholder="Select multiple"
            className="max-w-xs " 
            selectionMode='multiple'
          >
            {opening.map((animal) => (
              <SelectItem  key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        </div>
            {data.map((dt,i)=>(
                <div key={i} className="flex flex-col md:flex-row  justify-between gap-5 items-center w-full px-4 py-3 bg-white border border-slate-200 dark:border-slate-600 dark:bg-slate-700 rounded-lg my-4">
            <div className='space-y-1'>
            <Tooltip showArrow={true} content={dt.tooltip}>
            <h3 className='text-lg mb-1 font-semibold text-blue-400'>{dt.title}</h3>
    </Tooltip>
    <div className="flex items-center gap-2">
                <CgWorkAlt className='text-lg'/>
                <p className='text-sm '>{dt.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                <TiLocationOutline className='text-lg'/>
                <p className='text-sm '>{dt.location}</p>
                </div>
               
                <div className="flex items-center gap-2">
                <IoTimerOutline className='text-lg'/>
                <p className='text-sm '>{dt.time}</p>
                </div>
            </div>
        <Button variant='solid' color='primary'>
        <Link href='/jobs'>
                    Apply Now

        </Link>
                </Button>
              
              
            </div>
            ))}
          
            
        </div>
    </div>
  )
}
