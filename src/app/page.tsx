"use client";

import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Map from "./components/Map";
import Footer from "./components/Footer/Footer";
import "./home.css";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Spacer to account for the fixed header */}
      <div style={{ height: "125px" }}></div>

      <section className="overlay-container">
        <div className="background-component">
          <Slider />
        </div>

        <div className="absolute z-10">
          <div className="text-green-300 text-7xl mt-48 ml-16">
            Flushing
            <br />
            Relaxing Spa
          </div>
          <div className="text-green-300 text-3xl mt-8 ml-16">
            SPA IN FLUSHING, NY
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center my-20 gap-11">
          <div className="flex-row justify-center text-center items-center">
            <img src="/wechat.svg" height="150px" width="150px" />
            <p className="text-black text-2xl mt-3">微信</p>
          </div>
          <div className="flex-row justify-center text-center items-center">
            <img src="/qrcode.svg" height="150px" width="150px" />
            <p className="text-black text-2xl mt-3">WeChat</p>
          </div>
        </div>
      </section>

      <section className="justify-center">
        <div className="bg-green-300 rounded-3xl mx-64">
          <h1 className="text-center text-5xl text-black p-12">
            Welcome To Our Practice
          </h1>
          <p className="text-md px-8 pb-12 text-center text-black tracking-wider">
            Flushing Medical Spa is an outstanding medical spa in the Flushing
            neighborhood of Queens in New York City, New York, led by
            board-certified obstetrics and gynecology physician QiLi Li. The
            practice has been serving patients of all ages since 2000.
            <br />
            <br />
            Flushing Medical Spa offers numerous aesthetic procedures, including
            neurotoxin injections, laser treatments, and noninvasive treatments
            for urinary incontinence and sexual dysfunction. Dr. Li provides
            brow lifts, facelifts, double chin removal, and jowl fat removal
            using innovative, nonincisional radiofrequency (RF) techniques with
            an Agnes device. She takes a holistic approach, tailored to each
            patient's needs and beauty goals. Flushing Medical Spa is exclusive
            in the Flushing area for using a myriad of Cutera® devices. The
            practice is innovative, using the first-ever permanent laser acne
            treatment with a cutting-edge AviClear® machine. Other
            revolutionary technologies available include multi-modality Cutera
            xeo® Nd:YAG laser for Laser Genesis facials (red carpet or
            Hollywood facials), Cutera Secret™ PRO radiofrequency (RF)
            microneedling, laser hair removal, and CO2 laser technology.
            <br />
            <br />
            Additional options include Cutera enlighten® PICO and nano lasers,
            Cutera Juliet™ Erbium lasers, and Geneo (GLO2) facials. Flushing
            Medical Spa uses HydraFacial® technology, LimeLight® IPL facials,
            truSculpt® iD for fat burning, and truSculpt® flex for muscle
            sculpting. The practice provides Emsella™ for urinary incontinence
            and sexual dysfunction, LED treatment for anti-aging protocols and
            anti-inflammatory effects, and a Zimmer machine and Pro-Nox™
            laughing gas for added patient comfort during procedures.
            <br />
            <br />
            Flushing Medical Spa specializes in skin tightening, body
            contouring, facial rejuvenation, and much more. All devices used at
            Flushing Medical Spa are FDA-approved. The practice provides
            medical-grade skin care products made in New York and offers private
            labeling for all products. The Flushing Medical Spa team enjoys
            improving the well-being and appearance of their clients and
            welcomes them to the practice. Schedule a consultation by phone or
            online today.
          </p>
        </div>
      </section>
      

      <section>
        
        <h2 className="text-5xl text-center my-16 text-black">Our Locations</h2>

        <div className="flex justify-center px-6 pb-4">

          <Map />

          <div className="w-4/12 h-5/6 bg-gray-50 p-6 rounded-lg shadow-md relative">

            {/* Content */}
            <div className="relative">
              <h2 className="text-3xl font-semibold text-purple-800">Queens</h2>
              <p className="mt-5 text-sm text-gray-700">
              136-46 41st Ave Unit 1E
                <br />
                Flushing, NY 11355
              </p>

              <h3 className="mt-5 text-sm font-medium text-gray-900">
                Hours Of Operation:
              </h3>
              <ul className="mt-6 text-sm space-y-2 text-gray-800">
                <li>Monday: 10:00 AM - 1:00 AM</li>
                <li>Tuesday: 10:00 AM - 1:00 AM</li>
                <li>Wednesday: 10:00 AM - 1:00 AM</li>
                <li>Thursday: 10:00 AM - 1:00 AM</li>
                <li>Friday: 10:00 AM - 1:00 AM</li>
                <li>Saturday: 10:00 AM - 1:00 AM</li>
                <li>Sunday: 10:00 AM - 1:00 AM</li>
              </ul>

              {/* Buttons */}
              <div className="mt-6 flex space-x-4">
                {/* <button className="px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800">
                  Schedule Appointment
                </button> */}
                <button className="py-3 px-7 text-sm bg-purple-700 text-white font-medium rounded-full hover:bg-purple-800">
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
