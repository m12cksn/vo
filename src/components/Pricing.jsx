import React from "react";
import Image from "next/image";

const dataPaket = [
  {
    paket: "Silver",
    harga: 600000,
    fasilitas: "Alamat Kantor",
    MasaSewa: "12 Bulan",
  },
  {
    paket: "Gold",
    harga: 1000000,
    fasilitas: "Alamat, Telephone VO, Ruang Rapat (1 Jam/Bulan)",
    MasaSewa: "12 Bulan",
  },
  {
    paket: "Platinum",
    harga: 1300000,
    fasilitas: "Alamat, Telephone VO, Ruang Rapat (4 Jam/Bulan)",
    MasaSewa: "12 Bulan",
  },
  {
    paket: "Platinum VIP",
    harga: 1500000,
    fasilitas: "Alamat, Telephone VO, Ruang Rapat (4 Jam/Bulan), Papan Nama",
    MasaSewa: "12 Bulan",
  },
  {
    paket: "Ruang Kantor 1 Orang",
    harga: 2000000,
    fasilitas: "Alamat, Telephone VO, Ruang Rapat (4 Jam/Bulan), Papan Nama",
    MasaSewa: "1 Bulan",
  },
  {
    paket: "Ruang Kantor 2 Orang",
    harga: 2500000,
    fasilitas: "Alamat, Telephone VO, Ruang Rapat (4 Jam/Bulan), Papan Nama",
    MasaSewa: "1 Bulan",
  },
];

const coworkingPaket = [
  {
    nama: "1 Jam",
    harga: 50000,
  },
  {
    nama: "5 Jam",
    harga: 200000,
  },
  {
    nama: "15 Jam",
    harga: 1000000,
  },
];

const fasilitasTambahan = [
  "Konsultasi hukum untuk anggota SmartOfficeVO",
  "Meja dan kursi kerja",
  "Layanan Resepsionis",
  "Penanganan dan Pemberitahuan panggilan Telepon dan Surat Menyurat",
  "Pantry",
  "Air Mineral",
  "Private Office Siap Digunakan",
];

const formatToRupiah = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

const Pricing = () => {
  return (
    <div className="w-full px-6 md:px-10 lg:px-20 pt-16 pb-32 bg-secondary">
      <h2 className="text-center text-white text-3xl sm:text-4xl font-bold mb-6">
        Paket Virtual Office
      </h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Pilih paket yang paling sesuai dengan kebutuhan bisnismu. Mulai dari
        paket basic hingga VIP, semua memberikan legalitas dan fasilitas
        profesional.
      </p>

      {/* Kartu Paket */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {dataPaket.map((paket, index) => (
          <div
            key={index}
            className="bg-[#1e1e2f] border border-gray-700 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {paket.paket}
              </h3>
              <p className="text-sm text-gray-400 mb-1">Fasilitas:</p>
              <p className="text-gray-200 mb-4">{paket.fasilitas}</p>

              <p className="text-sm text-gray-400 mb-1">Masa Sewa:</p>
              <p className="text-gray-200 mb-4">{paket.MasaSewa}</p>
            </div>

            <div>
              <div className="text-white text-xl font-bold mb-2">
                {formatToRupiah(paket.hargaPromo || paket.harga)}
                {paket.hargaPromo > 0 && (
                  <span className="text-sm line-through text-gray-400 ml-2">
                    {formatToRupiah(paket.harga)}
                  </span>
                )}
              </div>
              <button className="mt-4 w-full bg-third text-white font-semibold py-2 rounded-lg hover:bg-[#F9A826] transition">
                Pilih Paket
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Working Space */}
      <div className="mt-20 mb-10">
        <h2 className="text-center text-white text-3xl font-bold mb-8">
          Paket Co-working Space
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coworkingPaket.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e1e2f] border border-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.nama}
              </h3>
              <p className="text-gray-200 mb-4">{item.fasilitas}</p>
              <p className="text-white text-xl font-bold mb-2">
                {formatToRupiah(item.harga)}
              </p>
              <button className="mt-4 w-full bg-third text-white font-semibold py-2 rounded-lg hover:bg-[#F9A826] transition">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Fasilitas Tambahan */}
      <div className="bg-[#151524] rounded-xl p-6 md:p-10 text-gray-300 mb-10 shadow-lg max-w-4xl mx-auto">
        <h3 className="text-white text-2xl font-bold mb-4 text-center">
          Semua Paket Termasuk Fasilitas Tambahan:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          {fasilitasTambahan.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-400 text-center italic">
          * Harga yang tertera belum termasuk PPN
        </p>
      </div>

      {/* Logo dan Alamat */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/image/logovo.jpg"
          alt="SmartOfficeVO Logo"
          width={100}
          height={100}
          className="w-36 h-3w-36 rounded-full shadow-lg"
        />
        <p className="text-gray-400 max-w-sm text-center text-sm">
          Jl. Letjen Suprapto No.1 Kav. 60, Cemp. Putih Tim., Barat, Kota
          Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510
        </p>
      </div>
    </div>
  );
};

export default Pricing;
