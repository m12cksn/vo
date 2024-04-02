import React from "react";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import { SiAzuredataexplorer } from "react-icons/si";
import Link from "next/link";

const Hero = () => {
  const heroes = ["Kerja Aman", "Hemat Biaya", "Hemat Waktu", "Lebih Efisien"];
  return (
    <div className="w-full bg-secondary">
      <div className="max-w-lg  sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto gap-8 px-5 sm:px-8 py-28 md:px-10 xl:px-0 lg:flex  justify-between items-center flex-row-reverse  ">
        <div className="relative basis-[45%] xl:basis-1/2 z-30 w-full lg:max-w-md xl:max-w-lg 2xl:basis-[55%] 2xl:max-w-xl 0 h-auto">
          <Image
            className=" w-full  h-auto object-center object-cover"
            src={"/image/herofix.webp"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
          {/* <Image
            className=" w-full hidden lg:block  h-auto object-center object-cover"
            src={"/image/logo2.webp"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          /> */}
          <Image
            className="absolute w-24 top-3 right-3 sm:w-32  h-auto object-center object-cover"
            src={"/image/svg/logo.svg"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
        </div>

        <div className="pt-12 lg:pt-0 basis-[55%] 2xl:basis-[45%] xl:basis-1/2">
          <h1 className="px-3 py-2 track uppercase rounded-sm shadow-md text-secondary text-xs font-semibold bg-third inline-block lg:text-base">
            SmartOfficeVo
          </h1>
          <h1 className="mt-5 leading-normal text-4xl sm:text-[2.7rem] font-bold text-slate-100">
            Menyediakan Layanan Virtual Office dan Perizinan Usaha
          </h1>
          <p className="mt-5 sm:leading-relaxed sm:text-justify text-slate-400 leading-normal text-[1.43rem] md:mt-2">
            Bangun keberadaan perusahaan Anda dengan SmartOfficeVO. Jaringan
            kami yang luas memberikan Anda alamat bisnis nyata di lokasi
            strategis,
          </p>
          <ul className="mt-5 sm:grid grid-cols-2">
            {heroes.map((hero, index) => (
              <li key={index} className="flex items-center gap-3 mt-4">
                <AiFillCheckCircle className="text-2xl md:text-2xl  bg-third rounded-full text-secondary" />{" "}
                <span className="text-slate-400 text-[1.05rem]  md:text-[1.3rem] sm:text-lg  tracking">
                  {hero}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded sm:rounded-md group bg-red-50 inline-block overflow-hidden ">
            <Link
              className="bg-third group-hover:-translate-y-2 transition-all ease-in-out duration-500  inline-flex items-center gap-2 shadow-md text-secondary px-4 py-3 "
              href="#"
            >
              Explore Now{" "}
              <span>
                <SiAzuredataexplorer className="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
