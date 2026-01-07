"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HamMenu from "./HamMenu";
import PrimaryButton from "./PrimaryButton";

export default function () {
  return (
    <header className="relative w-full bg-transparent z-40 ">
      <nav className="text-white">
        <div className="max-w-7xl px-2 md:px-4 lg:px-8  relative   mx-auto">
          <div className="flex  items-center justify-between py-4 lg:py-8 ">
            {/* logo */}
            
              <img
                src="/images/Logo.png"
                alt="logo"
                className="w-10 md:w-12"
              />
            

            {/* nav links */}
            <ul className="space-x-12 hidden lg:flex text-white/80 text-lg">
              <li>
                <Link
                  href="/"
                 className={`hover:border-b hover:border-[#FF541F] ${usePathname() === "/" ? "border-b border-[#FF541F] text-white" : ""}`}
                >
                  Home
                </Link>
              </li>
               <li>
                <Link
                  href="/"
                 className="hover:border-b hover:border-[#FF541F]"
                >
                  Services
                </Link>
              </li>
               <li>
                <Link
                  href="/"
                 className="hover:border-b hover:border-[#FF541F]"
                >
                  Contact us
                </Link>
              </li>
               <li>
                <Link
                  href="/"
                 className="hover:border-b hover:border-[#FF541F]"
                >
                  About us
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              {/* login button */}
              <PrimaryButton href="" name="Login" />
              

              {/* hamburger menu */}
              <HamMenu />
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
