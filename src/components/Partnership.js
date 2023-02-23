import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Partnership = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="container px-6 md:px-12 xl:px-0 mx-auto py-12 md:py-32 lg:py-48 lg:pb-24 2xl:py-64 grid lg:grid-cols-2 gap-16">
        {/* Background */}
        <StaticImage
          className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-20 bg-blend-color-dodge w-full pointer-events-none"
          src="../images/circular-data.png"
          alt=""
        />

        <div>
          <p className="text-[#6656D0] text-md font-sans inline-block md:text-lg tracking-wide mb-6">
            Achieve Business Growth & Work-Life Balance
          </p>
          <h4 className="text-3xl lg:text-5xl text-white lg:leading-tight font-display mb-6">
            iQuest Partnership & Succession
          </h4>
          <p className="">
            As a business owner, is your time all work and no play? Find out how
            the iQuest team can help your business maximise its resources and
            profitability while also giving you more time to spend with your
            loved ones.
          </p>
          <Link
            to="/partnership"
            className="btn border-white text-white mt-6 lg:mt-12"
          >
            Download eBook
          </Link>
        </div>
        <StaticImage
          className="mt-12 lg:mt-0 w-full scale-110"
          src="../images/iQuest-Partnership-Brochure.png"
          alt="iQuest Brochure Mockup"
          placeholder="none"
          layout="constrained"
          height={500}
          quality="100"
        />
      </div>
    </div>
  )
}

export default Partnership
