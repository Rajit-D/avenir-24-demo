"use client";

import React, { useState, useEffect } from "react";
import logo from "@/public/assets/phnxlogo.png";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

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
    <div className="font-strike-light flex md:justify-start justify-end items-center fixed top-0 left-0 z-10 md:bg-[#03001417] md:backdrop-blur-md w-full pb-5">
      <div
        className="absolute md:hidden top-50 top-[2.75px] left-[2.75px] z-[1000]"
        onClick={handleNav}
      >
        {!navState ? (
          <HiMenuAlt1 className="h-[30px] w-[30px] text-white" />
        ) : (
          <HiX className="h-[30px] w-[30px] text-white bg-red-500" />
        )}
      </div>
      <div className="icon md:flex md:flex-col md:justify-center md:items-center hidden md:w-30 py:2 md:py-3 z-20 relative top-[12px] left-[7%]">
        <Link href="https://phoenixnsec.in/" target="_blank">
          <Image
            src={logo}
            alt="logo of PHOENIX"
            width={70}
            height={10}
            className="pr-8 hover:cursor-pointer"
          />
        </Link>
      </div>
      <div
        className={`menu flex justify-center items-center fixed top-0 left-0 w-screen md:pt-6 md:w-screen min-h-full md:h-auto md:bg-none md:backdrop-blur-[0px] backdrop-blur-[20px] md:block z-50 ${
          !navState ? "hidden" : "flex"
        }`}
      >
        <ul className="flex flex-col mb-[140px] md:mb-[0px] justify-between items-center min-h-full md:flex-row gap-10 py-3 text-[1.4rem] md:text-[.5rem] lg:text-[.9rem] text-white">
          <div className="flex flex-row justify-center items-center h-full">
            <li className="md:hidden">
              <Link
                href="https://phoenixnsec.in/"
                target="_blank"
                className="w-full"
              >
                <Image
                  src={logo}
                  alt="logo of PHOENIX"
                  width={65}
                  height={10}
                  className="hover:cursor-pointer"
                />
              </Link>
            </li>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center md:px-5 relative md:left-[6%] md:top-0 top-6">
            <li className="">
              <Link href="/" onClick={handleNav}>
                Home
              </Link>
            </li>
            <li className="md:mb-0 md:mt-0 mb-5 mt-5 md:ml-5 md:mr-5 ml-0 mr-0">
              <Link href="/events" onClick={handleNav}>
                Events
              </Link>
            </li>
            <li className="">
              <Link href="/teams" onClick={handleNav}>
                Teams
              </Link>
            </li>
          </div>
          <div className="flex flex-row justify-center items-center relative md:right-[8%] right-0 md:top-[0px] top-[100px]">
            <ul className="flex text-[25px]">
              <li className="">
                <Link
                  href="https://www.instagram.com/phoenix_nsec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="blank"
                >
                  <FiInstagram />
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://www.linkedin.com/company/phoenix-the-official-tech-club-of-netaji-subhash-engineering-college/"
                  target="blank"
                >
                  <FiLinkedin />
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://www.youtube.com/channel/UCBy1iIhw34E7YlHQ8tc4rDA"
                  target="blank"
                >
                  <FiYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
