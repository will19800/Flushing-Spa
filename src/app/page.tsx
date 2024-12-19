"use client";

import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Map from "./components/Map";
import Footer from "./components/Footer/Footer";
import ImageCarousel from "./components/ImageCarousel/Carousel";
import ReviewCarousel from "./components/ReviewCarousel/ReviewCarousel";
import { Analytics } from "@vercel/analytics/react";
import "./home.css";

import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "center",
    skipSnaps: false,
    containScroll: false,
    watchDrag: false,

  };

  const SLIDES = ["/spa1.png", "/spa2.png", "/spa3.png", "/spa4.png"];

  const slidesData = [
    {
      quote: "after a hard working day i had my body full relaxed. Thankx",
      customer: "tingting yang",
      profilePic: "/images/olga-profile.png",
      reviewSource: "Google",
    },
    {
      quote: "Nice & relax , thank you!",
      customer: "Gao Chun yan",
      profilePic: "/images/fatima-profile.png",
      reviewSource: "Google",
    },
    {
      quote:
        "I've been there a few times and I feel the environment is comfortable. I've also found two masseurs, one is Ding Ding and the other is Nina. Their service attitude is very good and their craftsmanship is also very conscientious. I'll come back next time.",
      customer: "罗斌",
      profilePic: "/images/stefany-profile.png",
      reviewSource: "Google",
    },
    {
      quote:
        "The environment is good, clean, quiet, the waiters are enthusiastic and skilled, you can really feel comfortable here, 👍🏻👍🏻👍🏻 Like it",
      customer: "Kewei Xu Zhang",
      profilePic: "/images/stefany-profile.png",
      reviewSource: "Google",
    },
    {
      quote:
        "The environment is good, professional, and the service is good. I will come again next time.",
      customer: "J Chen",
      profilePic: "/images/stefany-profile.png",
      reviewSource: "Google",
    },
  ];

  return (
    <main>
      <Analytics />
      <Header />
      {/* Spacer to account for the fixed header */}
      <div style={{ height: "116px" }}></div>

      <section className="overlay-container">
        <div className="background-component">
          <ImageCarousel slides={SLIDES} options={OPTIONS} />
        </div>

        <div className="absolute z-10">
          <div className="text-shadow text-6xl mt-48 ml-16 tracking-wider">
            Flushing
            <br />
            Relaxing Spa
          </div>
          <div className="text-shadow text-2xl mt-8 ml-16 tracking-wider">
            SPA IN FLUSHING, NY
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center my-20 gap-11">
          <div className="flex-row justify-center text-center items-center">
            <img src="/wechat.svg" height="100px" width="100px" />
            <p className="text-black text-2xl mt-3">微信</p>
          </div>
          <div className="flex-row justify-center text-center items-center">
            <img src="/wechatqrcode.jpg" height="100px" width="100px" />
            <p className="text-black text-2xl mt-3">WeChat</p>
          </div>
        </div>
      </section>

      <section className="justify-center">
        <div className="bg-offwhite rounded-3xl mx-64">
          <h1 className="text-center text-5xl text-black p-12">
            Welcome To Our Practice
          </h1>
          <p className="text-md px-8 pb-12 text-center text-black tracking-wider">
            Flushing Relaxing Spa is a premier wellness center in the Flushing
            neighborhood of Queens in New York City, New York, offering
            authentic Chinese massage techniques rooted in ancient practices.
            The center is led by a team of highly skilled and certified massage
            therapists, dedicated to delivering exceptional care and relaxation.
            The practice has been transforming the well-being of clients since
            its establishment in 2000.
            <br />
            <br />
            Flushing Relaxing Spa specializes in a variety of massage therapies,
            including Tuina (推拿) therapeutic massage, acupressure, and gua sha
            for muscle tension relief and stress reduction. The spa also offers
            reflexology, hot stone therapy, and cupping therapy, tailored to
            each client’s unique needs. Harmony and balance are at the heart of
            every treatment, combining traditional Chinese medicine principles
            with modern relaxation practices.
            <br />
            <br />
            Additional services include full-body massages for improved
            circulation and deep relaxation, as well as targeted head and neck
            therapies to alleviate tension and promote mental clarity. Flushing
            Relaxing Spa incorporates high-quality essential oils and herbal
            compresses to enhance the overall therapeutic experience.
            Specialized packages for prenatal care, sports recovery, and posture
            improvement are also available.
            <br />
            <br />
            The tranquil ambiance at Flushing Relaxing Spa is designed to
            provide the ultimate escape, featuring soothing music, aromatherapy,
            and private treatment rooms. Clients can also purchase premium
            herbal balms and oils, crafted with traditional Chinese ingredients,
            to extend the benefits of their treatments at home.
            <br />
            <br />
            At Flushing Relaxing Spa, the team is passionate about helping
            clients achieve holistic well-being and relaxation. Schedule an
            appointment online or call today to experience unparalleled care and
            rejuvenation.
          </p>
        </div>
      </section>

      <section>
        <div className="bg-offwhite p-10 mt-10">
          <h2 className="text-2xl mb-8 text-brown1">Customers Reviews</h2>
          <h1 className="text-6xl text-shadow mb-20">What Our Clients Say</h1>

          <ReviewCarousel slides={slidesData} options={OPTIONS} />
        </div>
      </section>

      <section>
        <div className="bg-offwhite text-shadow text-center">
          <h2 className="text-7xl p-10">Gallery</h2>
          <p className="mb-12 mx-32">Immerse yourself in the tranquility and elegance of our space. Each corner of our spa is designed to provide relaxation, rejuvenation, and a sanctuary for your mind, body, and soul. Explore our gallery and get a glimpse of the experience waiting for you.</p>
          
          <div className="flex p-8 gap-x-6">
            <div className="flex-row gap-5">
              <img className="mb-10 mt-6" src="gallery1.PNG"/>
              <img className="mb-6" src="gallery2.PNG"/>
              <img src="gallery3.PNG"/>
            </div>
            <div className="flex-row">
              <img className="mb-6" src="gallery4.PNG"/>
              <img className="mb-6" src="gallery5.PNG"/>
              <img src="gallery6.PNG"/>
            </div>
            <div className="flex-row">
              <img className="mb-10 mt-8" src="gallery7.PNG"/>
              <img className="mb-6" src="gallery8.PNG"/>
              <img src="gallery9.PNG"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-5xl text-center my-16 text-shadow">
          Our Locations
        </h2>

        <div className="flex justify-center px-6 pb-4">
          <Map />

          <div className="w-4/12 h-5/6 bg-offwhite p-6 rounded-lg shadow-md relative">
            {/* Content */}
            <div className="relative">
              <h2 className="text-3xl font-semibold text-brown1">Queens</h2>
              <p className="mt-5 text-sm text-shadow">
                136-46 41st Ave Unit 1E
                <br />
                Flushing, NY 11355
              </p>

              <h3 className="mt-5 text-sm font-medium text-gray-900">
                Hours Of Operation:
              </h3>
              <ul className="mt-6 text-sm space-y-2 text-shadow">
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
                <button className="py-3 px-7 text-sm bg-grassgreen text-shadow font-medium rounded-full hover:bg-purple-800">
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
