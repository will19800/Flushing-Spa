"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LocationBar from "../../components/LocationBar";

export default function Home() {
  return (
    <main>
      <Header />

      <div style={{ height: "118px" }}></div>

      <section>
        <div className="bg-shadow text-center mb-12">
          <p className="px-44 py-24 text-lightwhite text-4xl font-extrabold">
            Contact Us
          </p>
        </div>
      </section>

      <LocationBar />

      <Footer />
    </main>
  );
}
