"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function(){

  const [open,setOpen] = useState(false);
    return <>
       <button onClick={()=> setOpen(!open)} className=" lg:hidden rounded-md  backdrop-blur-sm p-1.5  hover:bg-white/10  flex items-center justify-center">
                
                  <Image 
                  src="/images/ham-menu.svg"
                  alt="hamburger menu"
                  width={25}
                  height={20}
                  className="object-cover "
                />
                
               
              </button>
               {
                open && (
                  <ul className="w-full h-50 absolute left-0 top-[100%] bg-black  p-4 ">
                  <li className=" border-white/10 py-2  " >
                    <Link href='/' className=" w-[100%] ">
                      Home
                    </Link>
                  </li>
                  <li className=" border-white/10 py-2  " >
                    <Link href='/' className=" w-[100%] ">
                      Home
                    </Link>
                  </li>
                  <li className=" border-white/10 py-2  " >
                    <Link href='/' className=" w-[100%] ">
                      Home
                    </Link>
                  </li>
                  <li className=" border-white/10 py-2  " >
                    <Link href='/' className=" w-[100%] ">
                      Home
                    </Link>
                  </li>
                  
                </ul>
                )
               }
    </>
}