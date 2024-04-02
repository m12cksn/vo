import React from "react";
import Image from "next/image";
import { TbStarFilled } from "react-icons/tb";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div className="w-full px-5">
      <div className="bg-secondary lg:container py-10  px-5 flex flex-col items-center justify-center">
        <h1 className="px-3 py-2 lg:text-center track uppercase rounded-sm shadow-md text-third text-sm xl:mx-auto tracking-wide font-semibold bg-secondary inline-block lg:text-base ">
          Kenapa Kami ?
        </h1>
        <div className="md:container">
          <h1 className="text-center text-4xl xl:text-5xl xl:max-w-5xl xl:leading-tight  mx-auto  font-semibold text-slate-100 mt-7">
            Don't take our word for it. See what customers are saying about us.
          </h1>
          <div className="px-5 lg:flex justify-center gap-10 xl:max-w-5xl xl:mx-auto lg:py-10 items-center">
            <div className="basis-[45%]">
              <Image
                className="mt-10 w-72 xl:w-96 mx-auto rounded-tr-3xl rounded-bl-2xl h-auto object-center object-cover"
                src={"/image/logovo.jpg"}
                width={1000}
                height={1000}
                alt="Cruise"
                priority={true}
              />
            </div>
            <div className="basis-[55%]">
              <div className="flex w-full justify-start text-third mt-8 text-xl gap-1">
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
              </div>
              <h1 className="text-xl text-slate-400 mt-5 tracking-wide leading-normal lg:text-justify">
                “SmartOffice” Presented By PT. Mitra Solusi Wicaksana Lippo
                Tower Holland Village Jakarta Lantai 29 Unit 2910 Jalan Ahmad
                Yani Kav. 60 No.1, Cempaka Putih, Jakarta Pusat 10510
              </h1>

              <div className="flex gap-3 mt-5">
                <BsArrowLeftSquareFill className="text-third text-5xl hover:text-secondary hover:bg-third duration-300 ease-in-out transition-all " />
                <BsArrowRightSquareFill className="text-third text-5xl hover:text-secondary hover:bg-third duration-300 ease-in-out transition-all " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
