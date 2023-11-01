"use client";
import { useState, useEffect } from 'react'
import {Button} from "@nextui-org/react";
import {HiMenuAlt3} from 'react-icons/hi'
import Switch from "./components/Theme/Switch";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function App() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navlinks=[
    {
      label:'Current Opening',
      href:'/currentopening',
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
                <Link key={i} className={pathname=== `${link.href}` ? ' bg-primary text-white rounded-lg px-3 py-1.5' : 'text-sm xl:text-lg font-medium'} color="foreground" href={link.href}>
             {link.label}
            </Link>
              )
            })
          }
          <Button onClick={() => scrollToSection('department')}  className='text-sm xl:text-lg font-medium' color="foreground">
               Department
             
            </Button>
                <Button onClick={() => scrollToSection('aboutus')}  className='text-sm xl:text-lg font-medium' color="foreground">
               About Us
             
            </Button>
            <Button onClick={() => scrollToSection('contactus')}  className='text-sm xl:text-lg font-medium' color="foreground">
               Contact Us
             
            </Button>
            
          
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
                <Link key={i} className={pathname=== `${link.href}` ? ' bg-primary text-white rounded-lg px-3 py-1.5' : 'text-lg font-medium'} color="foreground" href={link.href}>
             {link.label}
            </Link>
              )
            })
          }
          <Button onClick={() => scrollToSection('department')}  className='text-lg font-medium' color="foreground">
               Department
             
            </Button>
                <Button onClick={() => scrollToSection('aboutus')}  className='text-lg font-medium' color="foreground">
               About Us
             
            </Button>
            <Button onClick={() => scrollToSection('contactus')}  className='text-lg font-medium' color="foreground">
               Contact Us
             
            </Button>
            
          
          <Switch />
          
         
          </div>}
        
        </nav>
      </div>
     
    </>
  );
}
