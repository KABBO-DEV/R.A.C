import React from "react";
import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/why-us", label: "কেন আমরা" },
    { href: "/facilities", label: "সুবিধাসমূহ" },
    { href: "/schedule", label: "সময়সূচি" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  return (
    <footer className="bg-[#8B0000] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-full">
                <img src="/rac-logo.jpeg" alt="RAC Logo" className="w-10 h-10 object-contain rounded-full" />
              </div>
              <h3 className="text-2xl font-bold font-serif tracking-wide">R.A.C</h3>
            </div>
            <p className="text-white/80 text-lg max-w-sm">
              রাশেদ একাডেমিক কেয়ার — আজকের সঠিক শিক্ষা, আগামী দিনের সফলতা।
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-red-300" />
                <span>মুলাটোল, আমতলা, হেকর গলি সংলগ্ন, রংপুর, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 shrink-0 text-red-300" />
                <a href="tel:01737718231" className="hover:text-white transition-colors font-semibold">
                  01737 718231
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/60 text-sm">
            &copy; {currentYear > 2026 ? currentYear : 2026} Rashed Academic Care (R.A.C) — সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-white/60 text-sm">শিক্ষার বিশ্বস্ত ঠিকানা</p>
        </div>
      </div>
    </footer>
  );
}
