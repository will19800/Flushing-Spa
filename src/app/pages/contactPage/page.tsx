"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";
import LocationBar from "../../components/LocationBar/LocationBar";
import "./page.css"

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ height: "118px" }}></div>

      <section>
        <div className="contact-header bg-shadow text-center mb-12">
          <p className="contact-title text-lightwhitefont-extrabold">
            Contact Us
          </p>
        </div>
      </section>

      <LocationBar />
      <Footer />
    </main>
  );
}
