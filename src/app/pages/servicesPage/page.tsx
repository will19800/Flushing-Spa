"use client";

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <div style={{ height: "118px" }}></div>

      <section>
        <div className="bg-shadow text-center">
          <p className="px-44 py-24 text-lightwhite text-4xl font-extrabold tracking-wider">
            Services
          </p>
        </div>
      </section>

      <section>
        <div className="flex p-16 ml-8">
          <div>
            <img src="/massage.jpg" alt="services" width={500} height={500} />
          </div>
          <div className="ml-16 mt-8">
            <h2 className="text-shadow text-6xl font-extrabold tracking-wider">
              Price List
            </h2>
            <div className="mt-8 flex-row text-2xl">
              <div className="flex">
                <div className="text-shadow mr-16 mb-16">
                  <h2 className=" text-4xl font-bold tracking-wider mb-6">
                    Relaxing Spa
                  </h2>
                  <p>30 MINS....................$30</p>
                  <p>60 MINS....................$40</p>
                  <p>90 MINS....................$60</p>
                </div>
                <div className="text-shadow">
                  <h2 className=" text-4xl font-bold tracking-wider mb-6">
                    Head Therapy
                  </h2>
                  <p>30 MINS....................$30</p>
                  <p>60 MINS....................$48</p>
                  <p>90 MINS....................$60</p>
                </div>
              </div>
              <div className="flex mb-8">
                <div className="text-shadow mr-16">
                  <h2 className=" text-4xl font-bold tracking-wider mb-6">
                    Facial
                  </h2>
                  <p>30 MINS....................$30</p>
                  <p>60 MINS....................$60</p>
                </div>
                <div className="text-shadow">
                  <h2 className=" text-4xl font-bold tracking-wider mb-6">
                    Foot Rub
                  </h2>
                  <p>30 MINS....................$15</p>
                  <p>60 MINS....................$25</p>
                  <p>90 MINS....................$30</p>
                </div>
              </div>
              <div className="text-shadow">
                <h2 className=" text-4xl font-bold tracking-wider mb-6">
                  Combo
                </h2>
                <p>Relaxing Spa + Foot Rub 90 MINS....................$55</p>
                <p>
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
