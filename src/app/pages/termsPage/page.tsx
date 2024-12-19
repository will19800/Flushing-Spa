"use client";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <div style={{ height: "121px" }}></div>

      <section>
        <div className="bg-green-200 text-center">
          <p className="px-44 py-24 text-black text-4xl font-extrabold">
            Terms & Conditions
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
