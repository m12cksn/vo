"use client";
import React from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PiPhoneCallFill } from "react-icons/pi";
``;
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSmallerScreenNavigation = () => {
    setMenuIcon(!menuIcon);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const whatsappText =
    "https://wa.me/6287774370779?text=Hello%0ADengan%20Giras%20Jaya%20Aluminium%20%3F%0ASaya%20tertarik%20ingin%20tahu%20info%20lebih%20detail%20tentang%20produk%20anda";

  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className=" fixed shadow bg-[#000] w-full ease-in-out duration-500  z-50">
      <nav className="max-w-lg  sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto  container flex justify-between items-center py-5 md:py-6 lg:py-6 px-4 md:px-8 lg:px-10">
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
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className={`font-semibold ${
                pathname === link.href ? "text-third" : "text-slate-50"
              } hover:text-slate-900 ease-in-out duration-150 transition-all text-xl md:text-[1.1rem]`}
              href={link.href}
            >
              <h1>{link.name}</h1>
            </Link>
          ))}
        </div>

        {/* ==== Menu Mobile ====  */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden focus:outline-none text-2xl z-50 "
        >
          {isMenuOpen ? (
            <IoCloseSharp className="text-3xl text-third font-bold " /> // Icon close (✖)
          ) : (
            <TiThMenu className="text-3xl text-third font-bold " /> // Icon menu (☰)
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full bg-secondary z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col lg:hidden items-center max-w-xl mx-auto space-y-4 py-6">
            <Link
              href="/"
              className="hover:text-blue-500  w-full text-center py-5 text-2xl border-b-4 border-third font-bold text-third transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="#hero"
              className="hover:text-blue-500  w-full text-center py-5 text-2xl border-b-4 border-third font-bold text-third transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="#produk"
              className="hover:text-blue-500  w-full text-center py-5 text-2xl border-b-4 border-third font-bold text-third transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              href="#gallery"
              className="hover:text-blue-500  w-full text-center py-5 text-2xl border-b-4 border-third font-bold text-third transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <Link
              href="#tentang"
              className="hover:text-blue-500  w-full text-center py-5 text-2xl border-b-4 border-third font-bold text-third transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href={whatsappText}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-teal-600"
              onClick={closeMenu}
            >
              Get a consult
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <Link
            className="bg-third px-4 py-2 font-semibold  text-secondary inline-flex items-center gap-1 tracking-wider uppercase rounded shadow"
            href="/contact"
          >
            Contact
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
