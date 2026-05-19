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

  const SLIDES = ["/cover.jpg"];

  const slidesData = [
    {
      quote: "Brand new Aura Spa at 31-10 21st Astoria NY 11106, with great massages, a relaxing atmosphere, calming music, flowing water, oil and hot stone therapy, a clean and safe space, friendly staff, and great prices.",
      customer: "Jeffrey Faiella",
      profilePic: "/images/olga-profile.png",
      reviewSource: "Google",
    },
    {
      quote: "I booked this massage on a whim and the space was calming, clean, and relaxing. The massage was one of the best I’ve had in a long time, with great attention to tension points instead of feeling rushed. I left feeling completely refreshed, and the prices are very reasonable for the quality. Such a hidden gem in the neighborhood, and I will definitely be coming back regularly.",
      customer: "Stephanie Mannie",
      profilePic: "/images/fatima-profile.png",
      reviewSource: "Google",
    },
    {
      quote: "Fantastic 1-hour massage at Aura Spa! The facility is brand new, exceptionally clean, and very professional. It was exactly what I needed to unwind, and the price was great for the quality. Highly recommend for massage therapy.",
      customer: "Mets Lift",
      profilePic: "/images/stefany-profile.png",
      reviewSource: "Google",
    },
    {
      quote:
        "Very friendly and professional staff who are attentive and focused on your pain points. They offer lots of great packages, and it is highly worth the visit.",
      customer: "Christopher Ramnarine",
      profilePic: "/images/stefany-profile.png",
      reviewSource: "Google",
    },
    {
      quote:
        "This was my second visit to Aura Spa, and I had another great experience. The spa is conveniently located on 21st Street with plenty of parking, and the space is new, clean, relaxing, and comfortable. Everyone was very friendly, scheduling was easy, and the massage was spot on from head to toe, especially for tight areas from golfing. The treatment was exactly what I needed at a great price, and I will definitely come back.",
      customer: "engD",
      profilePic: "/images/stefany-profile.png",
      reviewSource: "Google",
    },
  ];

  const galleryImages = [
    "building.PNG",
    "frontdesk.jpg",
    "gallery12.JPG",
    "gallery13.JPG",
    "logowall.PNG",
    "beds.jpg",
    "gallery14.PNG",
    "gallery15.PNG",
    "gallery16.PNG",
    "gallery8.PNG",
    "gallery17.JPG",
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
            Aura Spa
          </div>
          <div className="text-shadow hero-subtitle tracking-wider">
            SPA IN ASTORIA, NY
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
                alt="WeChat icon"
              />
              <p className="text-black text-xl md:text-2xl mt-3">微信</p>
            </div>

            <div className="text-center">
              <img
                src="/wechatqrcode.jpg"
                className="h-16 w-16 md:h-[100px] md:w-[100px]"
                alt="WeChat QR code"
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

          <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-8 gap-4 md:gap-6">
            {galleryImages.map((src) => (
              <img
                key={src}
                className="w-full h-80 object-cover rounded-lg"
                src={src}
                alt="Spa gallery"
              />
            ))}
          </div>
        </div>
      </section>

      <LocationBar />

      <Footer />
    </main>
  );
}