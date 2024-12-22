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
  );
}
