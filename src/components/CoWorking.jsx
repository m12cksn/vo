import React from "react";

const CoWorking = () => {
  return (
    <div className="">
      <h1 className="text-center pt-5 pb-7 sm:pt-8 sm:pb-10 text-2xl md:text-3xl md:pt-10 md:pb-12 font-semibold text-slate-400">
        Coworking Space
      </h1>
      <div className="sm:max-w-3xl md:max-w-4xl mx-auto xl:max-w-7xl">
        <div className="relative overflow-x-auto shadow-md ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-lg">
                  Nama Paket
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Paket I
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Paket II
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Paket III
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 text-lg bg-gray-950">
                  Co Working Space
                </td>
                <td className="px-6 py-4">1 Jam : Rp, 55.000</td>
                <td className="px-6 py-4">5 Jam : Rp, 200.000</td>
                <td className="px-6 py-4">12 Jam : Rp, 1000.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoWorking;
