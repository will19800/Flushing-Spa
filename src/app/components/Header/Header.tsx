"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <header>
      <div
        className={`header ${isScrolled ? "header-scrolled" : ""} bg-offwhite`}
      >
        <Link href="/">
          <Image
            src="/SPAlogo1.png"
            className={`logo ${isScrolled ? "logo-small" : "logo-large"}`}
            alt="logo"
            height={106}
            width={150}
          />
        </Link>

        {/*Only visible on mobile */}
        <button
          className={`md:hidden ml-auto mr-4 p-2 z-50 ${isMenuOpen ? "menu-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-8 h-0.5 bg-black mb-2 transition-all"></div>
          <div className="w-8 h-0.5 bg-black mb-2 transition-all"></div>
          <div className="w-8 h-0.5 bg-black transition-all"></div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-64 gap-6 items-center tracking-widest">
          <Link href="/" className="text-black">
            Home
          </Link>
          <Link href="/pages/aboutPage" className="text-black">
            About
          </Link>
          <Link href="/pages/servicesPage" className="text-black">
            Services
          </Link>
          <Link href="/pages/contactPage" className="text-black">
            Contact
          </Link>
          <Link
            href="/LoginPage"
            className="p-4 rounded-full text-shadow bg-grassgreen"
          >
            929-391-0284
          </Link>
        </nav>

        {/* Full Screen Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
          <nav className="flex flex-col items-center justify-center h-screen gap-8 bg-offwhite p-4">
            <Link
              href="/"
              className="text-black text-3xl hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="{/about}"
              className="text-black text-3xl hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="{/pricing}"
              className="text-black text-3xl hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/pages/contactPage"
              className="text-black text-3xl hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/LoginPage"
              className="p-6 rounded-full text-shadow bg-grassgreen text-center text-2xl w-64 hover:bg-opacity-90 transition-colors"
              onClick={toggleMenu}
            >
              929-391-0284
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
