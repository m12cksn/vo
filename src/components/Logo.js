import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Logo = () => {
  const logoBrands = [
    "/image/svg/logo1.svg",
    "/image/svg/logo1.svg",
    "/image/svg/logo1.svg",
    "/image/svg/logo1.svg",
  ];
  return (
    <div className="w-full sm:-mt-14 bg-secondary container  px-5">
      <Marquee speed={75} gradientWidth={1000} gradientColor={[255, 255, 255]}>
        <div className="flex  h-28 w-full   rounded justify-center items-center lg:container gap-10 text-slate-300 text-4xl uppercase tracking-wide font-semibold ">
          Welcome to SmartOfficeVo
        </div>
      </Marquee>
    </div>
  );
};

export default Logo;
