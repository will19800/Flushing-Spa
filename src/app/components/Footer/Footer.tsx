import React from "react";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <main>
      <div className="footer-container bg-offwhite flex mt-8">
        <div className="footer-info py-11 text-black">
          <p className="font-extrabold text-xl mb-4">Aura Spa</p>
          <p className="mb-4">Phone (appointments): 929-205-8883</p>
          <p className="mb-4">Phone (main): 929-650-8338</p>
          <p className="mb-4">
            Address: 31-10 21st St, Astoria, NY 11106
          </p>
        </div>

        <span className="footer-divider block bg-black"></span>

        <div className="footer-links">
          <Link href="/pages/privacyPage" className="text-black mr-8">
            PRIVACY POLICY
          </Link>
          <Link href="/pages/termsPage" className="text-black mr-8">
            TERMS & CONDITIONS
          </Link>
          <Link href="/pages/contactPage" className="text-black mr-8">
            CONTACT US
          </Link>
        </div>
      </div>
    </main>
  );
}
