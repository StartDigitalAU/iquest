import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Partnership = () => {
  return (
    <div className="px-8 max-w-7xl mx-4 md:mx-auto bg-brochure-bg bg-cover bg-no-repeat px-12 pt-12 pb-12 lg:px-20 lg:pt-20 lg:pb-12 rounded-xl mb-20 md:flex">
      <div className="w-full md:w-3/5 text-white lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-xl">
        <span className="text-md inline-block md:text-lg text-blue-light tracking-wide mb-4">Achieve business growth and work-life balance with</span>
        <h2 data-animate className="text-4xl leading-normal lg:text-5xl text-blue-lighter mb-2 max-w-xl">iQuest Partnership & Succession</h2>
        <p data-animate>
        As a business owner, is your time all work and no play? Find out how the iQuest team can help your business maximise its resources and profitability, while also giving you more time to spend with your loved ones. 
        </p>
        <div className="mt-8">
            <Link data-animate-more to="/partnership" className="btn btn-blue">Download Ebook</Link>
        </div>
      </div>
      <div className="w-full md:w-2/5 mt-12 md:mt-0">
        <StaticImage
          className="w-full max-h-80 rounded-b-xl lg:rounded-bl-none lg:rounded-tr-xl lg:max-h-full"
          src="../images/iQuest-Partnership-Brochure.png"
          alt="iQuest Brochure Mockup"
          placeholder="none"
          layout="constrained"
          height={500}
          quality="100"
        />
      </div>
    </div >
  )
}

export default Partnership;