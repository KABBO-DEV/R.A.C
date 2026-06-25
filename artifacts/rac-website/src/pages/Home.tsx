import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { Facilities } from "@/components/sections/Facilities";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;