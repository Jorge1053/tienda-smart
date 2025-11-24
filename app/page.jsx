// app/page.jsx
"use client";

import { CustomRequest } from "../components/CustomRequest";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import TopPromoBanner from "../components/TopPromoBanner"; // 👈 nuevo

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <TopPromoBanner />   {/* 👈 banner tipo ML debajo del navbar */}
        <Hero />
        <ProductGrid />
        <HowItWorks />
        <CustomRequest />
      </main>
      <Footer />
    </>
  );
}
