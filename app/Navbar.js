"use client";
import { useState, useEffect } from 'react'
import {Button} from "@nextui-org/react";
import {HiMenuAlt3} from 'react-icons/hi'
import Switch from "./components/Theme/Switch";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function App() {


  const navlinks=[
    {
      label:'Current Opening',
      href:'/c',
    },
    {
      label:'Departments',
      href:'/about',
    },
    {
      label:'About Us',
      href:'/gallery',
      
    },
    {
      label:'Contact Us',
      href:'/gallery',
      
    },

  ];
  const pathname = usePathname();
  const [open,setOpen]= useState(false)



  const handleChange =()=>{
    setOpen(!open)
  }
  return (
    <>
      <div className="bg-white/80 z-50 dark:bg-slate-900/80 backdrop-blur-xl py-3 w-full sticky top-0 ">
      {/* desktop navbar */}
 
        <nav className="container mx-auto lg:flex hidden lg:justify-between items-center gap-4">
          <div className="flex items-center gap-2">
          <Link href='/'>
          <Image
              className=" w-full h-16 block dark:hidden"
              loading="lazy"
              object-fit="cover"
              height={1000}
              width={1000}
              src="/logo.png"
              alt="image"
            />
              <Image
              className=" w-full h-16 hidden dark:block"
              loading="lazy"
              object-fit="cover"
              height={1000}
              width={1000}
              src="/darklogo.png"
              alt="image"
            />
          </Link>
          
          </div>
          <div className="flex items-center gap-3 lg:gap-5">
          {
            navlinks.map((link,i)=>{
              return(
                <Link key={i} className={pathname=== `${link.href}` ? 'text-white bg-primary px-4 py-2 font-bold rounded-lg shadow-xl shadow-slate-200 dark:shadow-slate-900' : ''} color="foreground" href={link.href}>
                <div>
                {link.label}
                </div>
             
            </Link>
            
              )
            })
          }
       
          
          <Switch />
          
          </div>
        </nav>
        {/* mobile navbar */}
        <nav className="container mx-auto flex flex-col lg:hidden px-4">
          <div className="flex items-center  justify-between">
          <Link href='/'>
          <Image
              className=" w-16 h-16 block dark:hidden"
              loading="lazy"
              object-fit="cover"
              height={1000}
              width={1000}
              src="/favicon.png"
              alt="image"
            />
              <Image
              className=" w-16 h-16 hidden dark:block"
              loading="lazy"
              object-fit="cover"
              height={1000}
              width={1000}
              src="/favicon.png"
              alt="image"
            />
          </Link>
          
           
            <Button className="bg-primary-50 dark:bg-slate-800" onClick={handleChange}>
        <HiMenuAlt3 className="text-xl"/>
      </Button>
    
          </div>
          {open &&   <div className="flex flex-col items-center gap-5">
          {
            navlinks.map((link,i)=>{
              return(
                <Link key={i} className={pathname=== `${link.href}` ? 'text-white bg-primary px-4 py-2 font-bold rounded-lg shadow-xl shadow-slate-200 dark:shadow-slate-900' : ''} color="foreground" href={link.href}>
             {link.label}
            </Link>
              )
            })
          }
       
       
          <Switch />
         
          </div>}
        
        </nav>
      </div>
     
    </>
  );
}
