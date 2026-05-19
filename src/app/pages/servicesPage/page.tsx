"use client";

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./page.css";

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <div style={{ height: "118px" }}></div>

      <section>
        <div className="contact-header bg-shadow text-center">
          <p className="contact-title px-44 py-24 text-lightwhite text-4xl font-extrabold tracking-wider">
            Services
          </p>
        </div>
      </section>

      <section>
        <div className="services-content">
          {/* Left: Images */}
          <div className="services-images">
            <img
              className="mb-10"
              src="/beds.jpg"
              alt="services"
              width={500}
              height={500}
            />
            <img src="/services1.PNG" alt="services" width={500} height={500} />
          </div>

          {/* Right: Price List */}
          <div className="services-pricing">
            <h2 className="services-title text-shadow font-extrabold tracking-wider text-center mb-10">
              Price List
            </h2>

            {/* Row 1: Body Deep Tissue + Foot Reflexology */}
            <div className="price-row">
              <div className="price-category text-shadow">
                <h3 className="item-title font-bold tracking-wider mb-6">
                  Relaxing Body Deep Tissue
                </h3>
                <p>30 MINS....................$35</p>
                <p>45 MINS....................$45</p>
                <p>60 MINS....................$55</p>
                <p>90 MINS....................$85</p>
              </div>
              <div className="price-category text-shadow">
                <h3 className="item-title font-bold tracking-wider mb-6">
                  Foot Reflexology
                </h3>
                <p>30 MINS....................$30</p>
                <p>45 MINS....................$38</p>
                <p>60 MINS....................$45</p>
                <p>90 MINS....................$70</p>
              </div>
            </div>

            {/* Row 2: Chair Massage + Head & Shoulder */}
            <div className="price-row mt-8">
              <div className="price-category text-shadow">
                <h3 className="item-title font-bold tracking-wider mb-6">
                  Chair Massage
                </h3>
                <p>10 MINS....................$15</p>
                <p>20 MINS....................$25</p>
                <p>30 MINS....................$35</p>
              </div>
              <div className="price-category text-shadow">
                <h3 className="item-title font-bold tracking-wider mb-6">
                  Head &amp; Shoulder
                </h3>
                <p>Head &amp; Shoulder 30 MINS......$45</p>
                <p>Facial 30 MINS...................$55</p>
                <p>Facial 60 MINS...................$85</p>
              </div>
            </div>

            {/* Combo Packages — full width */}
            <div className="combo-container text-shadow mt-8">
              <h3 className="item-title font-bold tracking-wider mb-6">
                Combo Packages
              </h3>
              <div className="combo-grid">
                <p>30 mins Body + 30 mins Foot</p>
                <p className="combo-price">$60</p>
                <p>60 mins Body + 30 mins Foot</p>
                <p className="combo-price">$85</p>
                <p>30 mins Body + 60 mins Foot</p>
                <p className="combo-price">$80</p>
                <p>30 mins Head &amp; Shoulder + 60 mins Foot</p>
                <p className="combo-price">$85</p>
                <p>60 mins Body + 30 mins Facial</p>
                <p className="combo-price">$95</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}