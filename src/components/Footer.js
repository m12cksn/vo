import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  const medias = [
    { name: AiFillFacebook },
    { name: FaWhatsappSquare },
    { name: MdMarkEmailUnread },
    { name: TbWorldWww },
  ];
  return (
    <div>
      <div className="max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl lg:container px-5 mx-auto py-10">
        <div className="md:flex gap-16 justify-evenly items-start">
          <div className="basis-1/3">
            <h1 className="  text-slate-800 text-4xl md:text-2xl font-semibold">
              Smart
              <span className="text-third font-semibold tracking-wider">
                Office
              </span>
              Vo
            </h1>

            <div className="flex gap-5 mt-5 items-start ">
              {medias.map((media, index) => (
                <div key={index}>
                  <media.name className="text-third text-3xl bg-white shadow p-1 w-8 h-8" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 md:mt-0 basis-1/3">
            <h1 className="text-slate-800 font-semibold  text-xl mb-1">
              Get in Touch
            </h1>
            <p className="text-slate-500 md:text-justify">
              Lippo Tower Holland Village, Lantai 29 Unit 2910, Jalan Letjend
              Suprapto Kav.60 Nomor 1, Jakarta Pusat
            </p>
            <div className="mt-5">
              <p className="text-slate-500">ptmitrasolusiwicaksana@gmail.com</p>
              <p className="text-slate-500">+62 888-8777-500</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0 basis-1/3">
            <h1 className="text-slate-800 font-semibold  text-xl">
              Learn More
            </h1>
            <div className="flex flex-col gap-2 mt-1">
              <div className="text-slate-500">Home</div>
              <div className="text-slate-500">Pricing</div>
              <div className="text-slate-500">FAQ</div>
              <div className="text-slate-500">About Us</div>
              <div className="text-slate-500">Contact</div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-slate-800 font-semibold  text-xl mb-3">
            Our Newsletter
          </h1>
          <h2 className="text-slate-500">
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </h2>
          <div className="flex rounded-lg overflow-hidden drop-shadow-md mt-5">
            <input
              type="text"
              placeholder="E-mail Address"
              id="large-input"
              className="block w-full p-3 text-gray-900 bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500 "
            ></input>
            <button
              className="bg-third text-slate-50 font-semibold px-7"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className="my-6 container border-solid border-x-8 border-third sm:mx-auto  lg:my-8" />
      <span className="block pb-5 text-sm text-gray-700 sm:text-center ">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          PT. Mitra Solusi Wicaksana
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
