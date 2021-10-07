import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ManagedIT = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto grid lg:grid-cols-2 py-12 lg:py-20 xl:px-0">
      <div className="p-8 text-white bg-blue-darkest flex flex-col justify-center rounded-t-xl lg:px-12 lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-xl">
        <h2 data-animate className="mb-6">Fully managed IT services</h2>
        <p data-animate>
          From consulting and fully managed IT support services to business IT cloud solutions and long term IT strategies,  iQuest is the trusted IT company and technology partner behind some of Perth’s biggest companies, with a 96% client retention rate since 2004.
        </p>
      </div>
      <div>
        <StaticImage
          className="w-full max-h-80 rounded-b-xl lg:rounded-bl-none lg:rounded-tr-xl lg:max-h-full"
          src="../images/iQuest-IT-Mockup.jpg"
          alt="iQuest Computer Mockup"
          placeholder="dominantColor"
          layout="constrained"
          height={500}
          quality="100"
        />
      </div>
    </div >
  )
}

export default ManagedIT;