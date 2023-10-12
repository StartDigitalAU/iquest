import React, { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import InternalHeader from "../InternalHeader"
import { setupAnimateInOnScroll } from "../../js/main"

const InternalLayout = ({ children, title, description }) => {
  useEffect(() => {
    setupAnimateInOnScroll()
  }, [])

  return (
    <>
      <Header />
      <InternalHeader title={title} description={description} />
      {/* <WaveDivider /> */}
      <main className="">
        <div className="container max-w-7xl mx-auto py-16 px-6 md:px-12 xl:px-0 text-white">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default InternalLayout
