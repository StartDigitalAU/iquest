import * as React from "react"
import { navigate } from 'gatsby-link'
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import PageTransition from 'gatsby-plugin-page-transitions';

const FourOhFour = () => {
  const redirect = setTimeout(() => navigate('/'), 3000)

  return (
    <>
      <PageTransition>
        <Header />
        <div className="flex justify-center items-center my-32">
          <div className="bg-white shadow-md p-16 max-w-6xl rounded-md">
            <h2 className="text-5xl">Sorry, we couldn't find that page!</h2>
            <p className="text-2xl">Don't worry, we're taking you back home!</p>
            <div class="flex justify-center items-center mt-16">
              <div class="lds-ripple"><div></div><div></div></div>
            </div>
          </div>
        </div>
        <Footer />
      </PageTransition>
    </>
  )
}

export default FourOhFour