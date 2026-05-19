"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Header />

      <div style={{ height: "118px" }}></div>

      <section>
        <div className="contact-header bg-shadow text-center mb-12">
          <p className="contact-title px-44 py-24 text-lightwhite text-4xl font-extrabold">
            About
          </p>
        </div>
      </section>

      <section>
        <div className="px-4 md:px-10 lg:px-20">
          <div className="flex justify-center">
            <img
              className="w-full max-w-7xl h-[500px] object-cover rounded-lg"
              src="/building.PNG"
              alt="Aura Spa building"
            />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="text-container text-shadow mb-12 text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-wider">
                Who We Are
              </h2>

              <div className="mt-8 text-lg md:text-xl leading-relaxed">
                Welcome to Aura Spa—a tranquil sanctuary for healing the body and
                mind, nestled in the heart of Astoria, New York.
                <br />
                <br />
                Established in 2016, our spa features expert therapists who uphold
                the traditions of Chinese therapeutic techniques, offering a
                signature range of treatments including full-body massage, foot
                massage, acupressure, foot reflexology, and hot stone therapy.
                <br />
                <br />
                We craft personalized wellness experiences designed to alleviate
                stress and harmonize the body and mind, allowing you to shed your
                fatigue, regain your balance and vitality, and indulge in a truly
                immersive journey of relaxation and rejuvenation.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}