"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "@/components/Navbar";
import React from "react";

export default function Page() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telp: "",
    bidang: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim email
    emailjs
      .send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY")
      .then(() => {
        alert("Pesan berhasil dikirim ke email!");
      })
      .catch(() => {
        alert("Gagal mengirim email.");
      });

    // Kirim ke WhatsApp
    const text = `
Nama Lengkap: ${form.nama}
Email: ${form.email}
No Telepon (Whatsapp): ${form.telp}
Bidang Usaha: ${form.bidang}
Pesan Anda: ${form.pesan}
    `;

    const url = `https://wa.me/628888777500?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <div className="bg-[#000] pt-10 sm:pt-14 lg:pt-20 text-white min-h-screen">
      <div className=" max-w-lg  sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-4 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KIRI */}
          <div>
            <h2 className="text-2xl font-bold text-[#A88948] mb-4">
              MARI KITA BERDISKUSI :
            </h2>
            <p className="mb-6">
              Jangan ragu untuk menghubungi kami untuk segala pertanyaan Anda.
              Kami akan dengan senang hati menerimanya dan akan memberikan
              tanggapan secepatnya.
            </p>

            {/* MAP */}
            <div className="mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3136465365026!2d106.86541546944413!3d-6.174442399717821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f52900000001%3A0x111d23bd95a419ed!2sLippo%20Plaza%20Kramat%20Jati!5e0!3m2!1sen!2sid!4v1713660000000"
                className="w-full h-64 rounded-lg border-2 border-[#A88948]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <strong>SmartOffice VO</strong>
                <br />
                Lippo Tower Holland Village Jakarta, Lantai 29 Unit 2910,
                <br />
                Jalan Letjend Suprapto Kav. 60 Nomor 1,
                <br />
                Cempaka Putih, Jakarta Pusat 10150
              </p>
              <p>📱 Whatsapp Only: 0888-8777-500</p>
              <p>✉️ Email: smartofficevo17@gmail.com</p>
            </div>
          </div>

          {/* KANAN – FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#111] p-6 rounded-lg shadow-md space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black border border-[#A88948] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black border border-[#A88948] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                No Telepon (Whatsapp)
              </label>
              <input
                type="text"
                name="telp"
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black border border-[#A88948] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Bidang Usaha
              </label>
              <input
                type="text"
                name="bidang"
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black border border-[#A88948] text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Pesan Anda
              </label>
              <textarea
                name="pesan"
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black border border-[#A88948] text-white h-28"
              />
            </div>
            <button
              type="submit"
              className="bg-[#A88948] text-black font-semibold py-2 px-6 rounded hover:bg-[#d3ac5d] transition"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
