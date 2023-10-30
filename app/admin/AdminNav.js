"use client";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { HiMenuAlt3 } from "react-icons/hi";
import Switch from "../components/Theme/Switch";
import { HiChevronDown, HiBars3CenterLeft } from "react-icons/hi2";
import Image from "next/image";
import LeftBar from "./LeftBar";
import Users from "./Users";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function AdminNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-white/80 z-50 dark:bg-slate-900/80 backdrop-blur-xl w-full sticky top-0 py-6">
        {/* desktop navbar */}

        <nav className="container mx-auto flex justify-between items-center gap-6 px-4">
          <div className="flex items-center gap-2">
           
              <Image
                className=" w-10 h-10"
                loading="lazy"
                object-fit="cover"
                height={100}
                width={100}
                src="/darklogo.png"
                alt="image"
              />
           
            <LeftBar />
          </div>
          <div className="flex items-center gap-3 lg:gap-5">
            <Switch />
            <Users />
          </div>
        </nav>
      </div>
    </>
  );
}
