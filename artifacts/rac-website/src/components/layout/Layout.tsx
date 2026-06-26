import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AnnouncementTicker } from "@/components/layout/AnnouncementTicker";
import { Footer } from "@/components/layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />
      <AnnouncementTicker />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
