import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { defaults } from "autoprefixer"

const CloudComputing = () => {
  return (
    <div className="bg-black-light px-4 py-12 md:py-20 xl:px-0">
      <div className="bg-blue-darkest mx-auto max-w-7xl rounded-xl lg:flex">
        <StaticImage
          className="w-full max-h-80 rounded-t-xl lg:rounded-bl-xl lg:rounded-tr-none lg:max-h-full"
          src="../images/iQuest-Cloud-Computing-Services.jpg"
          alt="Cloud Computing"
          placeholder="dominantColor"
          layout="constrained"
          quality="100"
          height={900}
        />
        <div className="text-blue-lighter p-8 lg:p-16 rounded-t-xl lg:rounded-bl-none lg:rounded-br-xl">
          <h2 data-animate className="is-h1">
            Cloud Computing
          </h2>
          <h3 data-animate className="text-2xl">Local IT Services helping you access your content anywhere!</h3>
          <p data-animate>The concept of cloud computing may seem like a relatively new thing but it has been in use for over 10 years. Cloud Computing is a secure server that can be accessed via the internet.</p>
          <p data-animate>This allows users to access business applications and store data online without the need for onsite hardware and software. As internet security improves at an exponential rate and NBN gets rolled out across Australia, the Cloud becomes an even more attractive solution.</p>
          <p data-animate>By providing Perth businesses with the tools to grow in the cloud, iQuest helps introduce significant cost savings, reduce overheads, give 24/7 system access, save energy, improve security and optimise business performance. Contact us to discover more.</p>
          <p data-animate>Our managed IT support Perth based service is the perfect option for West Australian businesses that don’t have an in-house IT support system in place. We offer comprehensive Office 365 based solutions and full cloud computing systems to any type of business in and outside Perth.</p>
          <div className="mt-6">
            <Link data-animate-more to="/it-support/it-support-services-perth" className="btn btn-blue">Discover more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudComputing