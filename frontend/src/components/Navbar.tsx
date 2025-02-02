'use client';
import React from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import { LuRefreshCcw } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineZoomInMap } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import {SidebarTrigger } from "@/components/ui/sidebar"
// Menu items
const items = [
  {
    title: "",
    icon: LuRefreshCcw,
  },
 
  {
    title: "",
    icon: MdOutlineZoomInMap,
  },
  {
    title: "Share",
    icon: CiShare2,
  },
  {
    title: "LOgo",
    icon: null, // No icon specified
  }
];

const Navbar = () => {
  const pathname = usePathname();
 
  return (
    <div className="flex flex-row  justify-between items-center w-full h-16 shadow-md">
      {/** Action Buttons */}
      <div className="flex flex-row justify-between items-center gap-4 w-full border-2 p-2  border-slate-100">
        <div className='flex flex-row justify-center items-center'>
        <SidebarTrigger  className='txt-xl'/>
        <h1>CodeMining</h1>
        </div>
      
        <ul className="flex flex-row gap-4">
          <ul className="flex items-center">
          <DarkModeSwitch/>
          </ul>
        
          {/* {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <Button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md">
                {item.icon && <item.icon size={20} />}
                {item.title && <span>{item.title}</span>}
              </Button>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
