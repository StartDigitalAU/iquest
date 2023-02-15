import React, { useEffect } from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import { setupAnimateInOnScroll } from "../js/main"

import Header from "../components/layout/Header"
import Mainbanner from "../components/MainBanner"
import HowWeHelp from "../components/HowWeHelp"
import FeaturedContent from "../components/FeaturedContent"
import ManagedIT from "../components/ManagedIT"
import LeadingIT from "../components/LeadingIT"
import CaseStudies from "../components/CaseStudies"
import Partnership from "../components/Partnership"
import Testimonials from "../components/Testimonials"
import CloudComputing from "../components/CloudComputing"
import ContactForm from "../components/ContactForm"
import Footer from "../components/layout/Footer"

function IndexPage() {
  useEffect(() => {
    setupAnimateInOnScroll()
  }, [])

  return (
    <>
      <GatsbySeo
        title="iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth"
        description="Delivering exceptional corporate IT support to Perth since 1999, iQuest provides managed IT services to help you focus on your business."
      />
      <div className="bg-white rounded-b-[100px] pb-16 mb-[400px] relative z-20">
        <div className="bg-gradient-to-b from-black via-[#110621] to-[#130523] pb-16 lg:pb-48 mb-48 rounded-b-[100px]">
          <Header />
          <Mainbanner />
          <HowWeHelp />
        </div>
        <ManagedIT />
        {/* <FeaturedContent /> */}
        <CaseStudies />
      </div>
      <div className="flex flex-col gap-80 bg-gradient-to-b from-black via-[#110621] to-[#130523] -mt-[500px] pt-[390px] relative z-10">
        <Partnership />
        <ContactForm />
      </div>

      <Testimonials />
      <Footer />
    </>
  )
}

export default IndexPage
