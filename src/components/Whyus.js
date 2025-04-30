import React from "react";
import Image from "next/image";
import Pricing from "./Pricing";

const WhyUs = () => {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-12 lg:flex items-center justify-between gap-10">
        {/* Bagian Gambar */}
        <div className="relative basis-[50%] mb-10 lg:mb-0">
          <Image
            className="w-full h-auto rounded-xl shadow-lg"
            src="/image/herofix.webp"
            width={1000}
            height={1000}
            alt="Hero Virtual Office"
            priority
          />
          <Image
            className="absolute top-3 right-3 w-24 sm:w-32"
            src="/image/svg/logo.svg"
            width={100}
            height={100}
            alt="Logo"
            priority
          />
        </div>

        {/* Bagian Deskripsi */}
        <div className="basis-[50%]">
          <h2 className="px-4 py-2 bg-third text-secondary font-semibold text-sm rounded mb-4 inline-block uppercase tracking-wide shadow-sm">
            Kenapa Kami?
          </h2>
          <h1 className="text-white text-3xl sm:text-4xl font-bold leading-snug mb-6">
            Mengapa harus mempercayakan layanan Virtual Office pada
            SmartOfficeVo?
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Kami menyediakan layanan Virtual Office yang lengkap dengan alamat
            legal, nomor telepon kantor, serta fasilitas ruang meeting.
            Pelayanan cepat dan transparan, cocok untuk startup, UMKM, hingga
            perusahaan besar.
          </p>
        </div>
      </div>

      {/* Pricing Table */}
      <Pricing />
    </section>
  );
};

export default WhyUs;
