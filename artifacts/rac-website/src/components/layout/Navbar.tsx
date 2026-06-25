import React, { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "হোম" },
    { href: "#about", label: "আমাদের সম্পর্কে" },
    { href: "#why-us", label: "কেন আমরা" },
    { href: "#facilities", label: "সুবিধাসমূহ" },
    { href: "#schedule", label: "সময়সূচি" },
    { href: "#contact", label: "যোগাযোগ" },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-primary shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="flex items-center gap-3">
          <img src="/rac-logo.jpeg" alt="RAC Logo" className="h-12 w-12 object-contain rounded-full border border-gray-100 shadow-sm" />
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl text-primary leading-tight font-serif">R.A.C</span>
            <span className="text-xs md:text-sm text-gray-600 font-medium">রাশেদ একাডেমিক কেয়ার</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-gray-700 font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 text-primary font-bold ml-4">
            <Phone className="w-5 h-5" />
            <span>01737718231</span>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-4 gap-4 shadow-lg">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-50 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 text-primary font-bold py-2 mt-2 bg-red-50 px-4 rounded-lg">
                <Phone className="w-5 h-5" />
                <span className="text-lg">01737718231</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}