"use client";

import Header from "./components/Header/Header";
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

      <div className="h-[80px] md:h-[116px]"></div>

      <section className="hero-section">
        <div className="background-component">
          <ImageCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className="absolute z-10">
          <div className="text-shadow hero-title tracking-wider">
            Flushing
            <br />
            Relaxing Spa
          </div>
          <div className="text-shadow hero-subtitle tracking-wider">
            SPA IN FLUSHING, NY
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center my-10 md:my-20 gap-6 md:gap-11">
          <div className="flex-row justify-center text-center items-center">
            <img src="/wechat.svg" className="h-16 w-16 md:h-[100px] md:w-[100px]" />
            <p className="text-black text-xl md:text-2xl mt-3">微信</p>
          </div>
          <div className="flex-row justify-center text-center items-center">
            <img src="/wechatqrcode.jpg" className="h-16 w-16 md:h-[100px] md:w-[100px]" />
            <p className="text-black text-xl md:text-2xl mt-3">WeChat</p>
          </div>
        </div>
      </section>

      <section className="justify-center">
        <div className="bg-offwhite rounded-3xl mx-4 md:mx-64">
          <h1 className="text-center text-3xl md:text-5xl text-black p-6 md:p-12">
            Welcome To Our Practice
          </h1>
          <p className="text-md px-4 md:px-8 pb-8 md:pb-12 text-center text-black tracking-wider">
            Flushing Relaxing Spa is a premier wellness center in the Flushing
            neighborhood of Queens in New York City, New York, offering
            authentic Chinese massage techniques rooted in ancient practices.
            The center is led by a team of highly skilled and certified massage
            therapists, dedicated to delivering exceptional care and relaxation.
            The spa has been transforming the well-being of clients since
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
        <div className="bg-offwhite p-6 md:p-10 mt-10">
          <h2 className="text-xl md:text-2xl mb-4 md:mb-8 text-brown1">Customers Reviews</h2>
          <h1 className="text-4xl md:text-6xl text-shadow mb-10 md:mb-20">What Our Clients Say</h1>
          <ReviewCarousel slides={slidesData} options={OPTIONS} />
        </div>
      </section>

      <section>
        <div className="bg-offwhite text-shadow text-center">
          <h2 className="text-4xl md:text-7xl p-6 md:p-10">Gallery</h2>
          <p className="mb-8 mx-4 md:mb-12 md:mx-32">Immerse yourself in the tranquility and elegance of our space. Each corner of our spa is designed to provide relaxation, rejuvenation, and a sanctuary for your mind, body, and soul. Explore our gallery and get a glimpse of the experience waiting for you.</p>
          
          <div className="flex flex-col md:flex-row p-4 md:p-8 gap-4 md:gap-x-6">
            <div className="flex-row gap-4 md:gap-5">
              <img className="w-full mb-4 md:mb-10 md:mt-6" src="gallery1.PNG"/>
              <img className="w-full mb-4 md:mb-6" src="gallery2.PNG"/>
              <img className="w-full" src="gallery3.PNG"/>
            </div>
            <div className="flex-row mt-4 md:mt-0">
              <img className="w-full mb-4 md:mb-6" src="gallery4.PNG"/>
              <img className="w-full mb-4 md:mb-6" src="gallery5.PNG"/>
              <img className="w-full" src="gallery6.PNG"/>
            </div>
            <div className="flex-row mt-4 md:mt-0">
              <img className="w-full mb-4 md:mb-10 md:mt-8" src="gallery7.PNG"/>
              <img className="w-full mb-4 md:mb-6" src="gallery8.PNG"/>
              <img className="w-full" src="gallery9.PNG"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-5xl text-center text-shadow my-16">Our Locations</h2>

        <div className="flex flex-row justify-center px-6 pb-4">
          <Map />

          <div className="w-4/12 h-5/6 text-shadow bg-offwhite p-6 rounded-lg shadow-md relative">
            <div className="relative">
              <h2 className="text-3xl font-semibold text-brown1">Queens</h2>
              <p className="mt-5">
                136-46 41st Ave Unit 1E
                <br />
                Flushing, NY 11355
              </p>

              <h3 className="mt-5 text-sm font-medium text-gray-900">
                Hours Of Operation:
              </h3>
              <ul className="mt-6 text-sm space-y-2">
                <li>Monday: 10:00 AM - 1:00 AM</li>
                <li>Tuesday: 10:00 AM - 1:00 AM</li>
                <li>Wednesday: 10:00 AM - 1:00 AM</li>
                <li>Thursday: 10:00 AM - 1:00 AM</li>
                <li>Friday: 10:00 AM - 1:00 AM</li>
                <li>Saturday: 10:00 AM - 1:00 AM</li>
                <li>Sunday: 10:00 AM - 1:00 AM</li>
              </ul>

              <div className="mt-6 flex space-x-4">
                <button className="py-3 px-7 text-sm bg-grassgreen font-medium rounded-full hover:bg-purple-800">
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
