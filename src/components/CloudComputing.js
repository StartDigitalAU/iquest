import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function CloudComputing() {
  return (
    <div className="relative bg-white pt-20 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="px-4 sm:pl-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <StaticImage
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="../images/iQuest-Cloud-Computing-Services.jpg"
                alt="Cloud Computing"
                placeholder="dominantColor"
                layout="constrained"
                width={540}
                height={675}
                quality="100"
              />
            </div>
          </div>
          <div className="mt-6 lg:mt-0 px-4 max-w-6xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <h2 className="is-h1 text-gray-900">
              Cloud Computing
            </h2>
            <p className="max-w-lg text-xl font-bold text-gray-900">Local IT Services helping you access your content anywhere!</p>
            <p className="mt-5">The concept of cloud computing may seem like a relatively new thing but it has been in use for over 10 years. Cloud Computing is a secure server that can be accessed via the internet.</p>
            <p className="mt-5">This allows users to access business applications and store data online without the need for onsite hardware and software. As internet security improves at an exponential rate and NBN gets rolled out across Australia, the Cloud becomes an even more attractive solution.</p>
            <div className="mt-6">
              <Link to="#" className="btn btn-blue">Discover more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
