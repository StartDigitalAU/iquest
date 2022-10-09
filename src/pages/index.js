import React, { useEffect } from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import { setupAnimateInOnScroll } from "../js/main"

import Header from "../components/layout/Header"
import Mainbanner from "../components/MainBanner"
import ClientLogos from "../components/ClientLogos"
import FeaturedContent from "../components/FeaturedContent"
import ManagedIT from "../components/ManagedIT"
import LeadingIT from "../components/LeadingIT"
import CaseStudies from "../components/CaseStudies"
import Partnership from "../components/Partnership"
import Testimonials from "../components/Testimonials"
import CloudComputing from "../components/CloudComputing"
import Footer from "../components/layout/Footer"

function IndexPage() {
  useEffect(() => {
    setupAnimateInOnScroll()
  }, [])

  return (
    <>
      <GatsbySeo
        title='iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth'
        description='Delivering exceptional corporate IT support to Perth since 1999, iQuest provides managed IT services to help you focus on your business.'
      />
      <Header />
      <Mainbanner />
      <ClientLogos classes="py-12" />
      <FeaturedContent />
      <ManagedIT />
      <CaseStudies />
      <Partnership />
      <Testimonials />
      <CloudComputing />
      <Footer />
    </>
  )
}

export default IndexPage
