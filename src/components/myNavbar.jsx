"use client";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const whatsappText =
    "https://wa.me/6287774370779?text=Hello%0ADengan%20Giras%20Jaya%20Aluminium%20%3F%0ASaya%20tertarik%20ingin%20tahu%20info%20lebih%20detail%20tentang%20produk%20anda";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className=" mx-auto flex items-center justify-between px-4 py-6 ">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link className="text-blue-900" href="/">
            <Image
              src="/images/logo.webp"
              alt={`Sample2`}
              width={192}
              height={192}
              objectFit="cover"
            />
          </Link>
        </div>

        {/* Menu Button (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden focus:outline-none text-2xl z-50 "
        >
          {isMenuOpen ? (
            <IoCloseSharp className="text-3xl text-blue-900 font-bold " /> // Icon close (✖)
          ) : (
            <TiThMenu className="text-3xl text-blue-900 font-bold " /> // Icon menu (☰)
          )}
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <Link
            href="/"
            className="hover:text-blue-500 transition-all text-xl font-semibold duration-500 ease-in-out text-blue-900"
          >
            Beranda
          </Link>
          <Link
            href="#hero"
            className="hover:text-blue-500 transition-all text-xl font-semibold duration-500 ease-in-out text-blue-900"
          >
            Form Kami
          </Link>
          <Link
            href="#produk"
            className="hover:text-blue-500 transition-all text-xl font-semibold duration-500 ease-in-out text-blue-900"
          >
            Produk
          </Link>
          <Link
            href="#gallery"
            className="hover:text-blue-500 transition-all text-xl font-semibold duration-500 ease-in-out text-blue-900"
          >
            Gallery
          </Link>
          <Link
            href="#tentang"
            className="hover:text-blue-500 transition-all text-xl font-semibold duration-500 ease-in-out text-blue-900"
          >
            Tentang
          </Link>
          <Link
            href={whatsappText}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-teal-600"
          >
            Get a consult
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col lg:hidden items-center space-y-4 py-6">
          <Link
            href="/"
            className="hover:text-blue-500  w-full text-center py-5 text-3xl font-bold text-blue-900 transition-all duration-300 ease-in-out"
            onClick={closeMenu}
          >
            Beranda
          </Link>
          <Link
            href="#hero"
            className="hover:text-blue-500  w-full text-center py-5 text-3xl font-bold text-blue-900 transition-all duration-300 ease-in-out"
            onClick={closeMenu}
          >
            Form Kami
          </Link>
          <Link
            href="#produk"
            className="hover:text-blue-500  w-full text-center py-5 text-3xl font-bold text-blue-900 transition-all duration-300 ease-in-out"
            onClick={closeMenu}
          >
            Produk
          </Link>
          <Link
            href="#gallery"
            className="hover:text-blue-500  w-full text-center py-5 text-3xl font-bold text-blue-900 transition-all duration-300 ease-in-out"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            href="#tentang"
            className="hover:text-blue-500  w-full text-center py-5 text-3xl font-bold text-blue-900 transition-all duration-300 ease-in-out"
            onClick={closeMenu}
          >
            Tentang
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
    </header>
  );
}
