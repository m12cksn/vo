import React from "react";
import CoWorking from "./CoWorking";

const Pricing = () => {
  const dataPaket = [
    {
      paket: "Silver",
      harga: 1200000,
      hargaPromo: 1000000,
      fasilitas: "Alamat Kantor",
      MasaSewa: "12 Bulan",
    },
    {
      paket: "Gold",
      harga: 1500000,
      hargaPromo: 0,
      fasilitas: "Alamat, Telephone VO, Ruang Rapat(1 Jam Perbulan)",
      MasaSewa: "12 Bulan",
    },
    {
      paket: "Platinum",
      harga: 1800000,
      hargaPromo: 0,
      fasilitas: "Alamat, Telephone VO, Ruang Rapat (4 Jam Perbulan)",
      MasaSewa: "12 Bulan",
    },
    {
      paket: "Platinum VIP",
      harga: 2000000,
      hargaPromo: 0,
      fasilitas:
        "Alamat, Telephone VO, Ruang Rapat,(4 Jam Perbulan) Papan Nama ",
      MasaSewa: "12 Bulan",
    },
    {
      paket: "Sewa Ruang Kantor Fasilitas 1 Orang",
      harga: 2500000,
      hargaPromo: 0,
      fasilitas:
        "Alamat, Telephone VO, Ruang Rapat,(4 Jam Perbulan) Papan Nama ",
      MasaSewa: "1 Bulan",
    },
    {
      paket: "Sewa Ruang Kantor Fasilitas 2 Orang",
      harga: 2800000,
      hargaPromo: 0,
      fasilitas:
        "Alamat, Telephone VO, Ruang Rapat,(4 Jam Perbulan) Papan Nama ",
      MasaSewa: "1 Bulan",
    },
  ];
  const formatToRupiah = (amount) => {
    // Ubah ke tipe data numerik jika amount dalam format string
    const numericAmount =
      typeof amount === "string" ? parseFloat(amount) : amount;

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(numericAmount);
  };
  return (
    <div className="">
      <h1 className="text-center pt-5 pb-7 sm:pt-8 sm:pb-10 text-2xl md:text-3xl md:pt-10 md:pb-12 font-semibold text-slate-900">
        Choose a plan and Start Your business today
      </h1>
      <div className="sm:max-w-3xl md:max-w-4xl mx-auto xl:max-w-7xl">
        <div className="relative overflow-x-auto shadow-md ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-lg">
                  Paket
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Harga
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Harga Promo
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Fasilitas
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Masa Sewa
                </th>
              </tr>
            </thead>
            <tbody>
              {dataPaket.map((data, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 text-lg bg-gray-950">
                    {data.paket}
                  </td>
                  <td className="px-6 py-4">{formatToRupiah(data.harga)}</td>
                  <td className="px-6 py-4">
                    {formatToRupiah(data.hargaPromo)}
                  </td>
                  <td className="px-6 py-4">{data.fasilitas}</td>
                  <td className="px-6 py-4">{data.MasaSewa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CoWorking />
    </div>
  );
};

export default Pricing;
