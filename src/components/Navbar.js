"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PiPhoneCallFill } from "react-icons/pi";
``;
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    <header className=" shadow bg-[#000] w-full ease-in-out duration-500  z-50">
      <nav className="max-w-[1366px] mx-auto  container flex justify-between items-center py-5 md:py-6 lg:py-6 px-4 md:px-8 lg:px-10">
        <div className="flex items-center gap-2">
          <div>
            <Image
              className=" w-14  object-center object-cover"
              src={"/image/logovo.jpg"}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
          </div>
          <h1 className="sm:text-2xl  text-slate-50 text-xl font-semibold">
            Smart
            <span className="text-third font-semibold tracking-wider">
              Office
            </span>
            Vo
          </h1>
        </div>
        {/* ==== Menu Desktop ====  */}
        <div className="lg:flex gap-10 hidden items-center">
          <Link
            className="font-semibold text-slate-50 hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-[1.1rem]"
            href="/"
          >
            <h1>Home</h1>
          </Link>
          <Link
            className="font-semibold text-slate-50 hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-[1.1rem]"
            href="/about"
          >
            <h1>About</h1>
          </Link>
          <Link
            className="font-semibold text-slate-50 hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-[1.1rem]"
            href="/pricing"
          >
            <h1>Pricing</h1>
          </Link>
          <Link
            className="font-semibold text-slate-50 hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-[1.1rem]"
            href="/faq"
          >
            <h1>FAQ</h1>
          </Link>
          <Link
            className="font-semibold text-slate-50 hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-[1.1rem]"
            href="/contact"
          >
            <h1>Contact</h1>
          </Link>
        </div>

        {/* ==== Menu Mobile ====  */}
        <div className="flex lg:hidden" onClick={handleSmallerScreenNavigation}>
          {/* {openIndexes.includes(index) ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {menuIcon ? (
            <AiOutlineClose
              size={28}
              className="text-slate-50  transition-all duration-500 ease-in-out"
            />
          ) : (
            <AiOutlineMenu
              size={28}
              className="text-slate-50  transition-all duration-500 ease-in-out"
            />
          )}
        </div>
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[67px] right-0 bottom-0 z-50 left-0 flex justify-center items-start pt-14 w-full h-screen bg-slate-800 text-white ease-in-out duration-500"
              : "md:hidden absolute top-[67px] right-0 z-50  -left-[45rem] flex justify-center items-start pt-14 w-full h-screen  bg-slate-800 text-white ease-in-out duration-500"
          }
        >
          <div className="w-full">
            <ul className="uppercase font-bold text-lg flex flex-col justify-center ml-10 gap-7">
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold  ease-in-out duration-150 transition-all"
              >
                <Link
                  className="border-b-4 hover:border-b-third  hover:text-third transition-all duration-300 ease-in-out "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link
                  className="border-b-4 hover:border-b-third  hover:text-third transition-all duration-300 ease-in-out "
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link
                  className="border-b-4 hover:border-b-third  hover:text-third transition-all duration-300 ease-in-out "
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link
                  className="border-b-4 hover:border-b-third  hover:text-third transition-all duration-300 ease-in-out "
                  href="/faq"
                >
                  faq
                </Link>
              </li>
              <li
                onClick={handleSmallerScreenNavigation}
                className="font-semibold hover:text-secondary ease-in-out duration-150 transition-all"
              >
                <Link
                  className="border-b-4 hover:border-b-third  hover:text-third transition-all duration-300 ease-in-out "
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className=" ml-10 mt-8">
              <Link
                className="bg-third hover:text-third hover:bg-secondary px-4 py-3 font-semibold  text-secondary inline-flex items-center gap-1 tracking-wider uppercase rounded shadow"
                href="#"
              >
                More Info{" "}
                <span>
                  <PiPhoneCallFill />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <Link
            className="bg-third px-4 py-2 font-semibold  text-secondary inline-flex items-center gap-1 tracking-wider uppercase rounded shadow"
            href="#"
          >
            More Info{" "}
            <span>
              <PiPhoneCallFill className="text-white" />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
