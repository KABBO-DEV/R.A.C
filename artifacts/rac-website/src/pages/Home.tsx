import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AnnouncementTicker } from "@/components/layout/AnnouncementTicker";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { Facilities } from "@/components/sections/Facilities";
import { ClassSchedule } from "@/components/sections/ClassSchedule";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <AnnouncementTicker />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Facilities />
        <ClassSchedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;