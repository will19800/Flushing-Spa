"use client";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Header />

      <div style={{ height: "118px" }}></div>

      <section>
        <div className="contact-header bg-shadow text-center">
          <p className="contact-title px-44 py-24 text-lightwhite text-4xl font-extrabold">
            Terms & Conditions
          </p>
        </div>
      </section>

      <section>
        <div className="container text-black">
          <h2 className="mb-6 mt-20 text-xl">TERMS OF USE</h2>
          <p className="text-gray-600">
            Flushing Relaxing Spa ("we," "us," or "our") provides this website
            ("Site") to you conditioned on your acceptance without modification
            of the terms, conditions, and notices contained herein. Your use of
            this Site constitutes your agreement to all such terms, conditions,
            and notices.
          </p>

          <h2 className="my-6 text-xl">MODIFICATION OF THESE TERMS OF USE</h2>
          <p className="text-gray-600">
            We reserve the right to change the terms, conditions, and notices
            under which this Site is offered, including but not limited to the
            charges associated with the use of this Site.
          </p>

          <h2 className="my-6 text-xl">LINKS TO THIRD PARTY SITES</h2>
          <p className="text-gray-600">
            This Site may contain links to other websites ("Linked Sites"). The
            Linked Sites are not under our control and we are not responsible
            for the contents of any Linked Site, including without limitation
            any link contained in a Linked Site, or any changes or updates to a
            Linked Site. We are not responsible for webcasting or any other form
            of transmission received from any Linked Site. We are providing
            these links to you only as a convenience, and the inclusion of any
            link does not imply endorsement by us of the site or any association
            with its operators.
          </p>

          <h2 className="my-6 text-xl">NO UNLAWFUL OR PROHIBITED USE</h2>
          <p className="text-gray-600">
            As a condition of your use of this Site, you warrant to us that you
            will not use this Site for any purpose that is unlawful or
            prohibited by these terms, conditions, and notices. You may not use
            this Site in any manner which could damage, disable, overburden, or
            impair this Site or interfere with any other party's use and
            enjoyment of this Site. You may not obtain or attempt to obtain any
            materials or information through any means not intentionally made
            available or provided for through this Site.
          </p>

          <h2 className="my-6 text-xl">CONTENT YOU SUBMIT</h2>
          <p className="text-gray-600">
            When using this Site, you may have the opportunity to submit reviews
            or feedback regarding your experiences with us, and to participate
            in bulletin boards, chat areas, news groups, forums, communities,
            personal web pages, calendars, and/or other message or communication
            features designed to enable you to communicate with the public at
            large or with a group (collectively, "Communication Services"). You
            agree to use the Communication Services only to post, send, and
            receive messages and material that are proper and related to the
            particular Communication Service.
            <br />
            <br />
            By way of example, and not as a limitation, you agree that when
            using a Communication Service, you will not post content that
            contains:
          </p>
          <ul className="list-disc ml-8 text-gray-600">
            <li>Personal and confidential information</li>
            <li>Vulgar content</li>
            <li>Threats or personal attacks on others</li>
            <li>Discriminatory content or hate speech</li>
            <li>Misrepresentations</li>
            <li>Non-applicable content</li>
            <li>Advertising or solicitations</li>
            <li>Illegal content</li>
            <li>References to ongoing legal matters</li>
          </ul>
          <p className="text-gray-600 mt-4">
            You further agree that you will not:
          </p>
          <ul className="list-disc ml-8 text-gray-600">
            <li>
              Upload files that contain software or other material protected by
              intellectual property laws unless you own the rights.
            </li>
            <li>Upload files that contain viruses.</li>
            <li>
              Conduct surveys, contests, pyramid schemes, or chain letters.
            </li>
            <li>
              Restrict or inhibit any other user from using and enjoying the
              Communication Services.
            </li>
          </ul>

          <h2 className="my-6 text-xl">LIABILITY DISCLAIMER</h2>
          <p className="text-gray-600">
            THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
            AVAILABLE THROUGH THIS SITE MAY INCLUDE INACCURACIES OR
            TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
            INFORMATION HEREIN.
          </p>

          <h2 className="my-6 text-xl">TRADEMARKS</h2>
          <p className="text-gray-600">
            The names of actual companies and products mentioned herein may be
            the trademarks of their respective owners. No association with any
            real company is intended.
          </p>

          <h2 className="my-6 text-xl">NOTICES</h2>
          <p className="text-gray-600 mb-20">
            Please contact us by phone at 929-391-0284 or by mail at 136-46 41st
            Ave Unit 1E, Flushing, NY 11355.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
