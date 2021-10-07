import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { setupAnimateInOnScroll } from "../js/main"

import Header from "../components/layout/Header"
import WaveDivider from "../components/WaveDivider"
import Mainbanner from "../components/MainBanner"
import ClientLogos from "../components/ClientLogos"
import FeaturedContent from "../components/FeaturedContent"
import ManagedIT from "../components/ManagedIT"
import CaseStudies from "../components/CaseStudies"
import Testimonials from "../components/Testimonials"
import CloudComputing from "../components/CloudComputing"
import Footer from "../components/layout/Footer"

function IndexPage() {
  useEffect(() => {
    setupAnimateInOnScroll()
  }, [])

  return (
    <>
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet="utf-8" />
        <title>iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
        <meta name="description" content="Delivering exceptional corporate IT support to Perth and WA since 1999. iQuest provide IT support Perth services allowing you to focus on your business." />
      </Helmet>
      <Header />
      <Mainbanner />
      <ClientLogos classes="py-12" />
      <FeaturedContent />
      <ManagedIT />
      <CaseStudies />
      <Testimonials />
      <WaveDivider />
      <CloudComputing />
      <Footer />
    </>
  )
}

export default IndexPage