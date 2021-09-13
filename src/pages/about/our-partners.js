import * as React from "react"
import { Helmet } from "react-helmet"
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

// IMAGES
import mockup from "/src/images/About-iQuest-Image.jpg"
import FreoLogo from "/src/images/logos/Fremantle-Dockers-Logo.png"
import GoldfieldsLogo from "/src/images/logos/Goldfields-Logo.png"
import GiorgiLogo from "/src/images/logos/Gorgi-Logo.png"
import GumalaLogo from "/src/images/logos/Gumala-Logo.png"
import SingtelLogo from "/src/images/logos/Singtel-Logo.png"


export default function Partners(props) {
  return (
    <>
      <PageTransition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>iQuest Partners | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
        </Helmet>
        <Header />
        <div className="relative transparent overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="relative z-10 pb-8 flex flex-wrap items-end sm:pb-16 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-20">
              <main className="mt-10 max-w-2xl px-4 float-left sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl md:leading-none font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block text-blue-lighter xl:inline">iQuest Partners</span>
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
              <h2 className="text-2xl md:text-3xl md:max-w-5xl mb-3 font-extrabold leading-normal tracking-normal text-gray-900">At iQuest we work alongside global brands to provide the best IT services in Perth & Melbourne.</h2>
              <p className="mt-5 text-normal leading-relaxed text-gray-600">
                Our partnerships with these companies are advantageous for our clients as it’s through our relationships that we can offer better pricing and service. Our close relationships with our partners also means we can build upon our knowledge and seek answers quickly on issues of hardware and software.
              </p>
              <p className="mt-5 text-normal leading-relaxed text-gray-600">
                By having these extremely experienced and influential companies providing us with resources we can provide a range of Technology Consulting activities to you, including Strategic IT planning, Application Software Development, and Business Analyst roles with highly experienced senior IT Consultants by your side. Through iQuest, we specialise in assisting small, medium and corporate businesses to get the most out of their IT systems.
              </p>
              <img className="w-full mt-20 rounded-xl shadow-xl lg:w-auto" src={mockup} width="1224" height="470" alt="iQuest About Us Banner" />
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6">
          <div className="flex items-center space-x-5">
            <div className="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={SingtelLogo} width="150" height="81" alt="Singtel Logo" /></div>
            <div className="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={GiorgiLogo} width="150" height="81" alt="Gorgi Logo" /></div>
            <div className="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={FreoLogo} width="150" height="81" alt="Fremantle Dockers Logo" /></div>
            <div className="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={GoldfieldsLogo} width="150" height="81" alt="Goldfields Logo" /></div>
            <div className="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={GumalaLogo} width="150" height="81" alt="Gumala Logo" /></div>
          </div>
        </div>
        <Footer />
      </PageTransition>
    </>
  )
}