import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const LeadingIT = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto grid lg:grid-cols-2 py-12 lg:py-20 xl:px-0">
      <div>
        <StaticImage
          className="w-full max-h-80 rounded-b-xl lg:rounded-bl-none lg:rounded-tr-xl lg:max-h-full"
          src="../images/iQuest-IT-Mockup.jpg"
          alt="iQuest Computer Mockup"
          placeholder="dominantColor"
          layout="constrained"
          height={650}
          quality="100"
        />
      </div>
      <div className="p-8 text-white bg-blue-darkest flex flex-col justify-center rounded-t-xl lg:px-12 lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-xl">
        <h2 data-animate className="mb-6 text-4xl leading-normal text-blue-light">Fully managed IT services Perth</h2>
        <p data-animate>iQuest is one of Perth's most successful IT consultant groups, providing end-to-end business solutions that span a broad spectrum of infrastructure technologies.</p>
        <p data-animate>
        From consulting and fully managed IT support services to business IT cloud solutions and long term IT strategies, iQuest is the trusted IT company and technology partner behind some of Perth’s biggest companies, with a 96% client retention rate since 2004.
        </p>
        <p data-animate>
        We pride ourselves on providing a personal, customised Perth IT support service that’s tailored to each of our clients business needs. By delivering the very best solutions, we’re helping Perth businesses minimise risk, improve performance and future proof their technology.
        </p>
      </div>
    </div >
  )
}

export default LeadingIT;