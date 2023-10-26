import React from "react";
import Image from "next/image";
import { GiPriceTag } from "react-icons/gi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaMapLocation, FaCity } from "react-icons/fa6";

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
            src={"/image/whyusfix2.png"}
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
            Cari kantor Private dengan banyak fasilitas menarik ?
            <span className="font-extrabold border-b-4 border-third ">
              Smart<span className="text-third">Office</span>Vo
            </span>
            <br />
            Solusinya !!!
          </h1>
          {/*  */}
          <div className="mt-7 lg:mt-3  md:grid grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" lg:mt-5 items-start md:items-center gap-5 lg:pr-10 py-3 md:pr-10 md:py-5  lg:p-2"
              >
                <div className="flex gap-1 tracking-wide">
                  <h1 className="text-third font-bold text-lg xl:text-2xl">
                    {feature.number}
                  </h1>
                  <h2 className="font-bold text-xl text-slate-300 xl:text-2xl">
                    {feature.title}
                  </h2>
                </div>
                <div className="">
                  <p className=" leading-snug text-justify mt-1 text-slate-400 lg:leading-normal lg:text-base xl:text-lg tracking-wide  ">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
