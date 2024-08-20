"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Maps from "@/components/Maps";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Whyus from "@/components/Whyus";

// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Hero />
      <Logo />
      <Service />
      <Whyus />
      {/* <Pricing /> */}
      <Maps />
      <Testimonial />
      <Footer />
    </div>
  );
}
