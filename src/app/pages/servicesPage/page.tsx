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
          <div>
            <img
              className="mb-10"
              src="/services2.JPG"
              alt="services"
              width={500}
              height={500}
            />
            <img src="/services1.PNG" alt="services" width={500} height={500} />
          </div>
          <div className="ml-16 mt-8">
            <h2 className="services-title text-shadow font-extrabold tracking-wider">
              Price List
            </h2>
            <div className="font-class mt-8 flex-row text-2xl">
              <div className="item-container">
                <div className="text-shadow mr-16 mb-8">
                  <h2 className="item-title font-bold tracking-wider mb-6">
                    Relaxing Spa
                  </h2>
                  <p>30 MINS....................$30</p>
                  <p>60 MINS....................$40</p>
                  <p>90 MINS....................$60</p>
                </div>
                <div className="text-shadow mb-8">
                  <h2 className="item-title font-bold tracking-wider mb-6">
                    Head Therapy
                  </h2>
                  <p>30 MINS....................$30</p>
                  <p>60 MINS....................$48</p>
                  <p>90 MINS....................$60</p>
                </div>
              </div>
              <div className="item-container mb-8">
                <div className="text-shadow mr-16">
                  <h2 className="item-title font-bold tracking-wider mb-6">
                    Facial
                  </h2>
                  <p>30 MINS....................$30</p>
                  <p>60 MINS....................$60</p>
                </div>
                <div className="text-shadow">
                  <h2 className="item-title1 font-bold tracking-wider mb-6">
                    Foot Rub
                  </h2>
                  <p>30 MINS....................$15</p>
                  <p>60 MINS....................$25</p>
                  <p>90 MINS....................$30</p>
                </div>
              </div>
              <div className="combo-container text-shadow">
                <h2 className="item-title font-bold tracking-wider mb-6">
                  Combo
                </h2>
                <p className="combo-text-class">
                  Relaxing Spa + Foot Rub 90 MINS....................$55
                </p>
                <p className="combo-text-class">
                  Relaxing Spa + Facial 90 MINS..........................$60
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
