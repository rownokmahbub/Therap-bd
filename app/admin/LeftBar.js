'use client'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import {HiOutlineHome,HiOutlineSquares2X2} from 'react-icons/hi2'
import {MdStreetview} from 'react-icons/md'
import {PiStudent} from 'react-icons/pi'
import {ImMakeGroup} from 'react-icons/im'
import Link from "next/link";
export default function App() {
    const pathname = usePathname();
  const navlinks=[
    {
      label:'Home',
      href:'/admin',
      icon:  <HiOutlineHome />
    },
    {
      label:'Batch Making',
      href:'/admin/batchmake',
      icon:  <ImMakeGroup />
    },
    {
      label:'Student Info',
      href:'/admin/studentinfo',
      icon:  <PiStudent />
     
    },
    {
      label:'Admission',
      href:'/admin/admission',
      icon:  <MdStreetview />
      
    },

  ];
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown className=" dark:bg-slate-800">
      <DropdownTrigger>
        <Button  
          variant="bordered" 
        >
           <HiOutlineSquares2X2 className="text-xl"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" items={navlinks}>
     {
        navlinks.map((link,i)=>{
            return(
                <DropdownItem 
            key={i}
            className={pathname=== `${link.href}` ? 'text-white bg-primary px-4 py-2 font-bold rounded-lg w-full shadow-xl shadow-slate-200 dark:shadow-slate-900' : ''}
            
          >
           <Link className="flex  items-center gap-4 text-lg font-medium" color="foreground" href={link.href}>
           <p>{link.icon}</p>
             {link.label}
            </Link>
          </DropdownItem>
            )
        })
     }
         
       
        
      
      </DropdownMenu>
    </Dropdown>
  );
}
