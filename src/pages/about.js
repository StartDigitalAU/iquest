import * as React from "react"
import { Helmet } from "react-helmet"
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import { Link } from "gatsby";
import ClientLogos from "../components/ClientLogos"
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  return (
    <>
      <PageTransition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
        </Helmet>
        <Header />
        <div className="relative transparent overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="relative z-10 pb-8 flex flex-wrap items-end sm:pb-16 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-20">
              <main className="mt-10 max-w-2xl px-4 float-left sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl md:leading-none font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block text-blue-lighter xl:inline">About iQuest</span>
                  </h1>
                  <p className="mt-3 text-lg leading-relaxed text-white sm:max-w-xl sm:mx-auto lg:mx-0">We're Perth's leading IT consulting company, ready to deploy experts anytime & anywhere.</p>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="wave-divider"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path></svg></div>
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="relative z-10 pt-16 pb-28 px-4 sm:px-6 lg:px-8">
              <h2 className="md:max-w-4xl mb-3 text-gray-900">iQuest are a dynamic and progressive company founded with a clear objective</h2>
              <h4 className="text-gray-900">Local IT Services helping you access your content anywhere!</h4>
              <p className="mt-5 text-normal">
                Our goal is to provide our West Australian clients with the most effective technology support and solutions for their business. We strive to be innovative and cost-effective across all areas of our work, from network installations and software deployment through to helpdesk support and cloud technology, iQuest are the leaders in Perth IT support and technology systems.
              </p>
              <p className="mt-5 text-normal">
                iQuest may be a technology company, but at the very core we provide exceptional good old-fashioned service. In a highly competitive market, we are able to distinguish ourselves by offering a personal, tailored service that delivers the very best IT solutions for each and every one of our clients. iQuest was created not only to provide professional IT services to Perth and West Australian businesses but to educate our clients on how technology can run and support businesses. Our success is measured by a high customer satisfaction rate and determined by the commitment and competence of our team of IT Engineers.
              </p>
              <StaticImage
                className="mt-20 rounded-xl shadow-xl lg:w-auto"
                src="../../src/images/About-iQuest-Image.jpg"
                width="1224"
                alt="iQuest About Us Banner"
                placeholder="blurred" />
            </div>
          </div>
        </div>
        <ClientLogos classes="py-16" />
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 flex flex-col space-y-6">
              <h2 className="text-gray-900 mb-0">The iQuest Team</h2>
              <p className="text-xl font-bold text-gray-900">A message from the directors</p>
              <p>
                In this fast paced world where everything beeps, blinks and connects, Information Technology (IT) is one of those industries which every single business relies so heavily upon yet, most people don’t understand it. It is the way we connect, operate, and build systems. The ‘ignorance is bliss’ approach can be tempting until systems break down and you are at risk of losing everything. Is this something you have experienced in the past? We come across so many who have.
              </p>
              <p>
                We give you the right solutions because your business needs them, not because it’s a ‘one size fits all’ template. And we look at each individual business to create solutions that are right for you. I can say, along with the other Directors, that we are so proud of the business iQuest has become in this day. Likewise we are also proud of the fantastic team of experienced and passionate IT professionals who work hard with us at providing exceptional service. We hope you will give us the opportunity to work with you too.
              </p>
              <p className="mt-5 font-bold">Anderson Chong, Managing Director</p>
              <div className="relative py-12">
                <span className="absolute inset-0 -mt-12 md:-mt-6 z-10 flex items-center justify-center font-display text-2xl text-white px-16 text-center">Our reason for ‘being’ is simple. <br />We strive to create exceptional trust with whomever we encounter.</span>
                <StaticImage
                  src="../../src/images/holographic-bg.jpg"
                  alt="A holographic image for decorative purposes"
                  placeholder="blurred"
                  width={1200}
                  className="rounded-xl drop-shadow-lg h-screen max-h-80"
                />
              </div>
              <p>We give you the right solutions because your business needs them, not because it’s a ‘one size fits all’ template. And we look at each individual business to create solutions that are right for you.</p>
              <p>I can say, along with the other Directors, that we are so proud of the business iQuest has become in this day. Likewise we are also proud of the fantastic team of experienced and passionate IT professionals who work hard with us at providing exceptional service.  We hope you will give us the opportunity to work with you too.</p>
              <Link className="btn btn-blue mt-12" to="#">Get In Touch</Link>
            </div>
          </div>
        </div>
        <Footer />
      </PageTransition>
    </>
  )
}