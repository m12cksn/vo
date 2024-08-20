import React from "react";
import Image from "next/image";
import { GiPriceTag } from "react-icons/gi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaMapLocation, FaCity } from "react-icons/fa6";
import Pricing from "./Pricing";

const Whyus = () => {
  const features = [
    {
      number: "1.",
      title: "Creativity",
      desc: "Curabitur blandit lacus magna ridiculus mus duis mollis.",
    },
    {
      number: "2.",
      title: "Creativity",
      desc: "Curabitur blandit lacus magna ridiculus mus duis mollis.",
    },
    {
      number: "3.",
      title: "Creativity",
      desc: "Curabitur blandit lacus magna ridiculus mus duis mollis.",
    },
    {
      number: "4.",
      title: "Creativity",
      desc: "Curabitur blandit lacus magna ridiculus mus duis mollis.",
    },
  ];
  return (
    <div className="w-full bg-secondary ">
      <div className="max-w-lg md:flex-row-reverse sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto gap-8 2xl:gap-12 px-5 sm:px-8 pt-28 pb-24 md:px-10 xl:px-0 lg:flex  justify-between items-center   ">
        <div className="relative basis-[40%] xl:basis-[60%] z-30 w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl   0 h-auto ">
          <Image
            className=" w-full  h-auto object-center object-cover"
            src={"/image/herofix.webp"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />

          <Image
            className="absolute w-24 top-3 right-3  sm:w-32  h-auto object-center object-cover"
            src={"/image/svg/logo.svg"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
        </div>

        <div className="pt-12 lg:pt-0 basis-[55%]  xl:basis-[45%] ">
          <h1 className="px-3 py-2 track uppercase rounded-sm shadow-md text-secondary text-sm tracking-wide font-semibold bg-third inline-block lg:text-base bg-">
            Kenapa Kami ?
          </h1>
          <h1 className="mt-5 text-3xl leading-snug lg:text-[2.4rem]  lg:leading-normal lg:tracking-wide xl:leading-snug font-bold text-slate-100">
            Mengapa harus mempercayakan layanan Virtual Office pada
            SmartOfficeVo ??
          </h1>
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default Whyus;
