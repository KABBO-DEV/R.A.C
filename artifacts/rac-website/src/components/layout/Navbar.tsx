import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/why-us", label: "কেন আমরা" },
    { href: "/facilities", label: "সুবিধাসমূহ" },
    { href: "/schedule", label: "সময়সূচি" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-primary shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/rac-logo.jpeg"
            alt="RAC Logo"
            className="h-12 w-12 object-contain rounded-full border border-gray-100 shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl text-primary leading-tight font-serif">R.A.C</span>
            <span className="text-xs md:text-sm text-gray-600 font-medium">রাশেদ একাডেমিক কেয়ার</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-semibold transition-colors pb-0.5 border-b-2 ${
                isActive(link.href)
                  ? "text-primary border-primary"
                  : "text-gray-700 border-transparent hover:text-primary hover:border-primary/40"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:01737718231"
            className="flex items-center gap-2 text-primary font-bold ml-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            <span>01737718231</span>
          </a>
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
            <div className="flex flex-col py-4 px-4 gap-1 shadow-lg">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-semibold text-lg py-2.5 px-3 rounded-lg border-b border-gray-50 transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-red-50"
                      : "text-gray-800 hover:text-primary hover:bg-red-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:01737718231"
                className="flex items-center gap-3 text-primary font-bold py-3 px-3 mt-2 bg-red-50 rounded-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">01737718231</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
