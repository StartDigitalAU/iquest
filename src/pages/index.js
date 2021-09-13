import * as React from "react"
import { Helmet } from "react-helmet"
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from "../components/layout/Header"
import Mainbanner from "../components/MainBanner"
import ClientLogos from "../components/ClientLogos"
import Featuredcontent from "../components/FeaturedContent"
import ManagedIT from "../components/ManagedIT"
import CaseStudies from "../components/CaseStudies"
import Testimonials from "../components/Testimonials"
import CloudComputing from "../components/CloudComputing"
import Footer from "../components/layout/Footer"

function IndexPage(props) {
  return (
    <>
      <PageTransition>
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
        <div className="wave-divider"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path></svg></div>
        <CaseStudies />
        <Testimonials />
        <div className="wave-divider"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path></svg></div>
        <CloudComputing />
        <Footer />
      </PageTransition>
    </>
  )
}

export default IndexPage