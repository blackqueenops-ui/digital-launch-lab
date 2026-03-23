"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">DL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-navy tracking-tight leading-tight">
                Digital Launch Lab
              </span>
              <span className="text-[10px] text-muted leading-tight hidden sm:block">
                B2B Digital Consulting
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-graphite hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-medium bg-navy text-white px-5 py-2.5 rounded-lg hover:bg-navy-light transition-colors shadow-sm"
            >
              Book a Consultation
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-graphite"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-graphite hover:text-navy py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-sm font-medium bg-navy text-white px-5 py-2.5 rounded-lg text-center hover:bg-navy-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
