"use client";

import Map from "../Map/Map";
import "./LocationBar.css";

export default function LocationBar() {
  return (
    <section>
      <h2 className="text-5xl text-center text-shadow my-16">Our Locations</h2>

      <div className="container flex flex-row justify-center px-6 pb-4">
        <Map />

        <div className="w-3/12 h-5/6 text-shadow bg-offwhite p-6 rounded-lg shadow-md relative">
          <div className="relative">
            <h2 className="text-3xl font-semibold text-brown1">Queens</h2>
            <p className="mt-5">
              31-10 21st St
              <br />
              Astoria, NY 11106
            </p>

            <h3 className="mt-5 text-sm font-medium text-gray-900">
              Hours Of Operation:
            </h3>
            <ul className="mt-6 text-sm space-y-2">
              <li>Monday: 10:00 AM - 10:30 PM</li>
              <li>Tuesday: 10:00 AM - 10:30 PM</li>
              <li>Wednesday: 10:00 AM - 10:30 PM</li>
              <li>Thursday: 10:00 AM - 10:30 PM</li>
              <li>Friday: 10:00 AM - 10:30 PM</li>
              <li>Saturday: 10:00 AM - 10:30 PM</li>
              <li>Sunday: 10:00 AM - 10:30 PM</li>
            </ul>

            <div className="mt-6 flex space-x-4">
              <a
                href="tel:929-205-8883"
                className="py-3 px-7 text-sm bg-grassgreen font-medium rounded-full hover:bg-green-600"
              >
                Call Us
              </a>
              <a
                href="https://www.google.com/maps/place/Aura+Spa/@40.7671532,-73.9328995,17z/data=!4m8!3m7!1s0x89c25f104c5d3e7b:0x921616058a2b5668!8m2!3d40.7671492!4d-73.9303192!9m1!1b1!16s%2Fg%2F11nj93hmm0?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                className="py-3 px-7 text-sm bg-grassgreen font-medium rounded-full hover:bg-green-600"
              >
                Leave Us a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
