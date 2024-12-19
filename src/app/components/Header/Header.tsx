"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="">
      <div className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <Link href="http://localhost:3000">
          <img
            src="/SPA.svg"
            width={180}
            height={100}
            className={`logo ${isScrolled ? "logo-small" : "logo-large"}`}
          />
        </Link>
        <nav className="flex gap-6 items-center tracking-widest">
          <Link href="http://localhost:3000" className="text-black">
            Home
          </Link>
          <Link href="{/about}" className="text-black">
            About
          </Link>
          <Link href="{/pricing}" className="text-black">
            Services
          </Link>
          <Link href="{/features}" className="text-black">
            Medical Grade Products
          </Link>
          <Link href="{/about}" className="text-black">
            Blog
          </Link>
          <Link href="{/pricing}" className="text-black">
            Contact
          </Link>
          <Link
            href="/LoginPage"
            className="p-4 rounded-full text-black bg-green-50"
          >
            929-391-0284
          </Link>
          <Link
            href="/LoginPage"
            className="p-4 rounded-full text-black bg-green-50"
          >
            Book Online
          </Link>
        </nav>
      </div>
    </header>
  );
}
