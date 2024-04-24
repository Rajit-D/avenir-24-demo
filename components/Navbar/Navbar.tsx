"use client";

import React, { useState, useEffect } from "react";
import logo from "@/public/assets/phnxlogo.png";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [navState, setNaState] = useState(false);
  const [path, setPath] = useState("/");
  const handleNav = () => {
    setNaState(!navState);
  };
  useEffect(() => {
    setNaState(false);
    setPath(location.pathname);
  }, []);
  return (
    <div className="navbar font-strike-light flex justify-center items-center lg:absolute fixed top-0 left-0 z-10 bg-[#03001417] backdrop-blur-md">
      <div
        className="absolute md:hidden top-50 top-[2.75px] left-[2.75px] z-20"
        onClick={handleNav}
      >
        {!navState ? (
          <HiMenuAlt1 className="h-[30px] w-[30px] text-white" />
        ) : (
          <HiX className="h-[30px] w-[30px] text-white bg-red-500" />
        )}
      </div>
      <div className="icon md:flex md:flex-col md:justify-center md:items-center hidden md:w-30 py:2 md:py-3 z-20 relative top-[12px] left-[10%] ">
        <a href="https://phoenixnsec.in/" target="_blank">
          <Image
            src={logo}
            alt="logo of PHOENIX"
            width={70}
            height={10}
            className="pr-8 hover:cursor-pointer"
          />
        </a>
      </div>
      <div
        className={`menu flex justify-center fixed top-0 left-0 w-screen pt-6 md:w-70 min-h-full md:h-auto md:relative md:bg-none md:backdrop-blur-[0px] backdrop-blur-[20px] md:block ${
          !navState ? "hidden" : "flex"
        }`}
      >
        <ul className="flex flex-col mb-[140px] md:mb-[0px] justify-center items-center min-h-full md:flex-row gap-10 py-3 text-[1.4rem] md:text-[.5rem] lg:text-[.9rem] text-white">
          <div className="flex flex-row justify-center pb-[65px] md:pb-[0px]">
            <li className="md:hidden h-9">
              <a href="https://phoenixnsec.in/" target="_blank">
                <Image
                  src={logo}
                  alt="logo of PHOENIX"
                  width={65}
                  height={10}
                  className="pr-6 hover:cursor-pointer"
                />
              </a>
            </li>
          </div>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>

          <li>
            <Link href="/partners">Partners</Link>
          </li>

          <li>
            <Link href="/teams">Teams</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
