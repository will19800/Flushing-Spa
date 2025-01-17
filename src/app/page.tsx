"use client";

import Header from "./components/Header/Header";
import LocationBar from "./components/LocationBar/LocationBar";
import Footer from "./components/Footer/Footer";
import ImageCarousel from "./components/ImageCarousel/Carousel";
import ReviewCarousel from "./components/ReviewCarousel/ReviewCarousel";
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

  // const SLIDES = ["/spa1.png", "/spa2.png", "/spa3.png", "/spa4.png"];

  const SLIDES = ["/cover.jpg"];

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
        <div className="flex flex-col items-center my-10 md:my-20 gap-6 md:gap-11">
          <div className="flex flex-row gap-6 md:gap-11">
            <div className="text-center">
              <img
                src="/wechat.svg"
                className="h-16 w-16 md:h-[100px] md:w-[100px]"
              />
              <p className="text-black text-xl md:text-2xl mt-3">微信</p>
            </div>
            <div className="text-center">
              <img
                src="/wechatqrcode.jpg"
                className="h-16 w-16 md:h-[100px] md:w-[100px]"
              />
              <p className="text-black text-xl md:text-2xl mt-3">WeChat</p>
            </div>
          </div>
          
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJiR8gBgBhwokR7X0uasZR98o"
            className="py-3 px-7 text-lg text-shadow bg-grassgreen font-medium rounded-full hover:bg-green-600"
          >
            Leave Us a Review
          </a>
        </div>
      </section>

      <section className="justify-center">
        <div className="bg-offwhite rounded-3xl mx-4 md:mx-64">
          <h1 className="text-center text-3xl md:text-5xl text-black p-6 md:p-12">
            Welcome To Our Spa
          </h1>
          <p className="text-md px-4 md:px-8 pb-8 md:pb-12 text-center text-black tracking-wider">
            Flushing Relaxing Spa is a premier wellness center in the Flushing
            neighborhood of Queens in New York City, New York, offering
            authentic Chinese massage techniques rooted in ancient practices.
            The center is led by a team of highly skilled and certified massage
            therapists, dedicated to delivering exceptional care and relaxation.
            The spa has been transforming the well-being of clients since its
            establishment in 2016.
            <br />
            <br />
            Flushing Relaxing Spa specializes in a variety of massage therapies,
            including Tuina (推拿) therapeutic massage, acupressure, oil push,
            and gua sha for muscle tension relief and stress reduction. The spa
            also offers reflexology, hot stone therapy, and cupping therapy,
            tailored to each client’s unique needs. Harmony and balance are at
            the heart of every treatment, combining traditional Chinese medicine
            principles with modern relaxation practices.
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
          <h2 className="text-xl md:text-2xl mb-4 md:mb-8 text-brown1">
            Customers Reviews
          </h2>
          <h1 className="text-4xl md:text-6xl text-shadow mb-10 md:mb-20">
            What Our Clients Say
          </h1>
          <ReviewCarousel slides={slidesData} options={OPTIONS} />
        </div>
      </section>

      <section>
        <div className="bg-offwhite text-shadow text-center">
          <h2 className="text-4xl md:text-7xl p-6 md:p-10">Gallery</h2>
          <p className="mb-8 mx-4 md:mb-12 md:mx-32">
            Immerse yourself in the tranquility and elegance of our space. Each
            corner of our spa is designed to provide relaxation, rejuvenation,
            and a sanctuary for your mind, body, and soul. Explore our gallery
            and get a glimpse of the experience waiting for you.
          </p>

          <div className="flex flex-col md:flex-row p-4 md:p-8 gap-4 md:gap-x-6">
            <div className="w-full md:w-1/3 flex flex-col gap-4 md:gap-5">
              <img
                className="w-full h-80 object-cover mb-4 md:mb-10 md:mt-6"
                src="gallery1.PNG"
              />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-6"
                src="gallery2.PNG"
              />
              <img className="w-full h-80 object-cover" src="gallery3.PNG" />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-10 md:mt-6"
                src="gallery11.JPG"
              />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-6"
                src="gallery12.JPG"
              />
              <img className="w-full h-80 object-cover" src="gallery13.JPG" />
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <img
                className="w-full h-80 object-cover object-top mb-4 md:mb-6"
                src="gallery4.PNG"
              />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-6"
                src="gallery5.PNG"
              />
              <img className="w-full h-80 object-cover" src="gallery6.PNG" />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-10 md:mt-6"
                src="gallery14.PNG"
              />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-6"
                src="gallery15.PNG"
              />
              <img className="w-full h-80 object-cover" src="gallery16.PNG" />
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <img
                className="w-full h-80 object-cover mb-4 md:mb-10 md:mt-8"
                src="gallery7.PNG"
              />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-6"
                src="gallery8.PNG"
              />
              <img className="w-full h-80 object-cover" src="gallery9.PNG" />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-10 md:mt-6"
                src="gallery17.JPG"
              />
              <img
                className="w-full h-80 object-cover mb-4 md:mb-6"
                src="gallery18.PNG"
              />
              <img className="w-full h-80 object-cover" src="gallery10.JPG" />
            </div>
          </div>
        </div>
      </section>

      <LocationBar />

      <Footer />
    </main>
  );
}
