import React from "react";

const Maps = () => {
  return (
    <div className="max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl py-10 lg:container px-5 mx-auto mb-16">
      <div className="flex justify-center items-center gap-4  xl:pb-5 ">
        <h1 className="md:text-3xl text-center font-semibold mb-2">
          Lokasi PT. Mitra Solusi Wicaksana
        </h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.729103329691!2d106.87368187498988!3d-6.167019693820243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5672c2d3655%3A0xe7b6ca00bc106817!2sLippo%20Tower%20Holland%20Village!5e0!3m2!1sen!2sid!4v1692778553759!5m2!1sen!2sid"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default Maps;
