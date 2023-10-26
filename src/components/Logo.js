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
    <div className="w-full bg-secondary container  px-5">
      <Marquee speed={75} gradientWidth={1000} gradientColor={[255, 255, 255]}>
        <div className="flex  h-28 w-full   rounded justify-center items-center lg:container gap-10   ">
          {logoBrands.map((logo, index) => (
            <Image
              key={index}
              className=" h-10 w-48 lg object-center object-contain"
              src={logo}
              width={1000}
              height={1000}
              alt="Cruise"
              priority={true}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Logo;
