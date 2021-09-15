import * as React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/layout/Header"
import WaveDivider from "../components/WaveDivider"
import Mainbanner from "../components/MainBanner"
import ClientLogos from "../components/ClientLogos"
import Featuredcontent from "../components/FeaturedContent"
import ManagedIT from "../components/ManagedIT"
import CaseStudies from "../components/CaseStudies"
import Testimonials from "../components/Testimonials"
import CloudComputing from "../components/CloudComputing"
import Footer from "../components/layout/Footer"

function IndexPage() {
  return (
    <>
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet="utf-8" />
        <title>iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
        <meta name="description" content="Delivering exceptional corporate IT support to Perth and WA since 1999. iQuest provide IT support Perth services allowing you to focus on your business." />
      </Helmet>
      <Header />
      <Mainbanner />
      <ClientLogos />
      <Featuredcontent />
      <ManagedIT />
      <WaveDivider />
      <CaseStudies />
      <Testimonials />
      <WaveDivider />
      <CloudComputing />
      <Footer />
    </>
  )
}

export default IndexPage