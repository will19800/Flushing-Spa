import React from "react";
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <main>
      <div className="footer-container bg-offwhite flex mt-8">
        <div className="footer-info py-11 text-black">
          <p className="font-extrabold text-xl mb-4">Flushing Relaxing Spa</p>
          <p className="mb-4">Phone (appointments): 929-391-0284</p>
          <p className="mb-4">
            Address: 136-46 41st Ave Unit 1E, Flushing, NY 11355
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
