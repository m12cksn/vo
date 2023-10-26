import React from "react";
import Image from "next/image";
import { GiPriceTag } from "react-icons/gi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaMapLocation, FaCity } from "react-icons/fa6";

const Service = () => {
  const features = [
    {
      icon: FaMapLocation,
      title: "Lokasi Strategis dan Mudah diakses",
      desc: "Alamat perkantoran berada di lokasi yang strategis, mudah diakses, yang akan meningkatkan kredibilitas usaha Anda",
    },
    {
      icon: FaCity,
      title: "Berada di 5 Kota besar di Indonesia",
      desc: "Saat ini,Mitra Solusi Wicaksana memiliki layanan perkantoran di 5 kota besar, yaitu: Bandung, Jakarta, Bekasi, Bogor, dan Tangerang.",
    },
    {
      icon: GiPriceTag,
      title: "Fasilitas terbaik dengan harga terjangkau",
      desc: "Mitra Solusi Wicaksana menawarkan layanan Virtual Office dengan harga termurah, dengan banyak fasilitas yang terjangkau setiap bulannya",
    },
    {
      icon: BsBookmarkCheckFill,
      title: "Terpercaya 100% Kepuasaan Client",
      desc: "Mitra Solusi Wicaksana telah berpengalaman, dan tersertifikasi untuk menjamin kepuasan pelanggan 100%.",
    },
  ];
  return (
    <div className="w-full ">
      <div className="max-w-lg  sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto gap-8 2xl:gap-12 px-5 sm:px-8 pt-28 pb-10 md:px-10 xl:px-0 lg:flex  justify-between items-center   ">
        <div className="relative basis-[55%] xl:basis-1/2 z-30 w-full lg:max-w-lg xl:max-w-xl 2xl:basis-[55%] 2xl:max-w-2xl 0 h-auto ">
          <Image
            className=" w-full  h-auto object-center object-cover"
            src={"/image/servicefix2.png"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />

          <Image
            className="absolute w-24 top-3 left-3 rotate-90 sm:w-32  h-auto object-center object-cover"
            src={"/image/svg/logo.svg"}
            width={1000}
            height={1000}
            alt="Cruise"
            priority={true}
          />
        </div>

        <div className="pt-12 lg:pt-0 basis-[45%] 2xl:basis-[45%] xl:basis-1/2 ">
          <h1 className="px-3 py-2 track uppercase rounded-sm shadow-md text-third text-sm tracking-wide font-semibold bg-secondary inline-block lg:text-base bg-">
            Our Feature
          </h1>
          <h1 className="mt-5 text-3xl leading-snug lg:text-2xl xl:text-3xl xl:leading-relaxed lg:leading-normal font-bold text-slate-700">
            Cari kantor Private dengan banyak fasilitas menarik ? S
            <span className="font-extrabold border-b-4 border-third ">
              mart<span className="text-third">Office</span>Vo
            </span>
            <br />
            Solusinya !!!
          </h1>
          {/*  */}
          <div className="mt-7 lg:mt-3 md:grid grid-cols-2 lg:grid-cols-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start md:items-center gap-5 mt-5 p-3 lg:p-0"
              >
                <div className="">
                  <div className="w-14 h-14 lg:w-14 lg:h-14 xl:w-20 xl:h-20 flex items-center justify-center bg-secondary rounded-full">
                    <feature.icon className=" text-2xl lg:text-2xl xl:text-3xl  text-slate-200" />{" "}
                  </div>
                </div>
                <div className="">
                  <h1 className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-slate-700 font-semibold">
                    {feature.title}
                  </h1>
                  <p className="text-sm leading-snug text-justify mt-2 text-slate-500 lg:leading-normal tracking-wide lg:text-xs xl:text-sm 2xl:text-base">
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

export default Service;
