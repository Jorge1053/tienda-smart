// app/page.jsx
"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import ProductGrid from "../components/ProductGrid";
import { HowItWorks } from "../components/HowItWorks";
import { CustomRequest } from "../components/CustomRequest";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductGrid />
        <HowItWorks />
        <CustomRequest />
      </main>
      <Footer />
    </>
  );
}
