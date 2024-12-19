import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <main>
      <div className="bg-green-300 flex mt-8">
        <div className="py-11 ml-56 text-black">
          <p className="font-extrabold text-xl mb-4">Flushing Relaxing Spa</p>
          <p className="mb-4">Phone (appointments): 929-391-0284</p>
          <p className="mb-4">
            Address: 136-46 41st Ave Unit 1E, Flushing, NY 11355
          </p>
        </div>

        <span className="block w-0.5 h-32 bg-black my-8 mx-12"></span>

        <div className="pt-11">
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
