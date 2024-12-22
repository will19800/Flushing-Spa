"use client";

import Map from "./Map/Map";

export default function LocationBar() {
  return (
    <section>
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
  );
}
