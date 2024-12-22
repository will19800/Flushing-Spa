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
        <div className="container">
          <div>
            <img
              className="mb-8"
              src="/gallery4.PNG"
              alt="services"
              width={1000}
              height={450}
            />
            <img src="/face.JPG" alt="services" width={1000} height={450} />
          </div>
          <div className="text-container text-shadow mb-8">
            <h2 className="text-6xl font-extrabold tracking-wider">
              Who We Are
            </h2>
            <div className="mt-8 text-xl">
              <strong>Shuxin Health Center</strong> is a licensed physical
              therapy base affiliated with a medical college and established by
              overseas Chinese representatives residing in New York.
              <br />
              <br />
              Our team of experienced technicians works collaboratively to
              uphold and promote the rich traditions of Chinese medicine,
              particularly the art of meridian massage.
              <br />
              <br />
              Our approach focuses on full-body acupoint massage, with special
              emphasis on the back meridians and reflexology massage for the
              feet.
              <br />
              By stimulating reflex points along the body's meridians, we aim to
              unblock energy pathways, balance internal organ functions,
              regulate qi and blood flow, and enhance overall well-being.
              <br />
              <br />
              Key benefits of our treatments include:
              <br />
              - Strengthening the waist and spine.
              <br />
              - Boosting kidney function and vitality.
              <br />
              - Alleviating women's menstrual discomfort (dysmenorrhea).
              <br />
              - Regulating the endocrine system.
              <br />
              - Promoting healthier, more radiant skin.
              <br />
              <br />
              At <strong>Shuxin Health Center</strong>, we are dedicated to
              harmonizing the body and mind, bringing the timeless benefits of
              traditional Chinese medicine into your daily life.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
