"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <div style={{ height: "118px" }}></div>

      <section>
        <div className="bg-shadow text-center">
          <p className="px-44 py-24 text-lightwhite text-4xl font-extrabold tracking-wider">
            Privacy Policy
          </p>
        </div>
      </section>

      <section>
        <div className="text-black mx-56">
          <h2 className="mb-6 mt-20 text-xl">PRIVACY STATEMENT</h2>
          <p className="text-gray-600">
            We are committed to protecting your privacy and developing
            technology that gives you the most powerful and safe online
            experience. This Statement of Privacy applies to our Practice's Web
            site and governs data collection and usage. By using this website,
            you consent to the data practices described in this statement.
          </p>

          <h2 className="my-6 text-xl">
            Collection of your Personal InformationT
          </h2>
          <p className="text-gray-600">
            This Practice collects personally identifiable information, such as
            your e-mail address, name, home or work address or telephone number.
            This Practice also collects anonymous demographic information, which
            is not unique to you, such as your ZIP code, age, gender,
            preferences, interests, and favorites.
            <br />
            <br />
            There is also information about your computer hardware and software
            that is automatically collected by this website. This information
            can include: your IP address, browser type, domain names, access
            times, and referring Web site addresses. This information is used
            for the operation of the service, to maintain quality of the
            service, and to provide general statistics regarding use of this Web
            site.
            <br />
            <br />
            Please keep in mind that if you directly disclose personally
            identifiable information or personally sensitive data through public
            message boards, this information may be collected and used by
            others.
            <br />
            <br />
            This Practice encourages you to review the privacy statements of Web
            sites you choose to link to from the website so that you can
            understand how those Web sites collect, use and share your
            information. This Practice is not responsible for the privacy
            statements or other content on any other Web sites.
          </p>

          <h2 className="my-6 text-xl">Use of your Personal Information</h2>
          <p className="text-gray-600">
            This Practice collects and uses your personal information to operate
            the Web site and deliver the services you have requested. This
            Practice also uses your personally identifiable information to
            inform you of other products or services available from this
            Practice and its affiliates. This Practice may also contact you via
            surveys to conduct research about your opinion of current services
            or of potential new services that may be offered.
            <br />
            <br />
            This Practice does not sell, rent, or lease its customer lists to
            third parties. This Practice may share data with trusted partners to
            help us perform statistical analysis, send you email or postal mail,
            provide customer support, or arrange for deliveries. All such third
            parties are prohibited from using your personal information except
            to provide these services, and they are required to maintain the
            confidentiality of your information.
            <br />
            <br />
            This Practice does not use or disclose sensitive personal
            information, such as race, religion, or political affiliations,
            without your explicit consent.
            <br />
            <br />
            This Practice will disclose your personal information, without
            notice, only if required to do so by law.
          </p>

          <h2 className="my-6 text-xl">Use of Cookies</h2>
          <p className="text-gray-600">
            The Web site uses "cookies" to help this Practice personalize your
            online experience. A cookie is a text file that is placed on your
            hard disk by a Web page server. Cookies cannot be used to run
            programs or deliver viruses to your computer. Cookies are uniquely
            assigned to you, and can only be read by a web server in the domain
            that issued the cookie to you.
          </p>

          <h2 className="my-6 text-xl">
            Security of your Personal Information
          </h2>
          <p className="text-gray-600">
            This Practice secures your personal information from unauthorized
            access, use or disclosure. This Practice secures the personally
            identifiable information you provide on computer servers in a
            controlled, secure environment, protected from unauthorized access,
            use or disclosure. When personal information (such as a credit card
            number) is transmitted to other Web sites, it is protected through
            the use of encryption, such as the Secure Socket Layer (SSL)
            protocol.
          </p>

          <h2 className="my-6 text-xl">Changes to this Statement</h2>
          <p className="text-gray-600">
            This Practice will occasionally update this Statement of Privacy to
            reflect company and customer feedback. We encourage you to
            periodically review this Statement to be informed of how this
            Practice is protecting your information.
          </p>

          <h2 className="my-6 text-xl">Contact Information</h2>
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
