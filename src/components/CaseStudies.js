import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const CaseStudies = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl relative z-10 mx-auto py-12 px-4 lg:py-20 xl:px-0">
        <h2 data-animate className="lg:text-5xl text-white text-center">iQuest Case Studies</h2>
        <div className="grid lg:grid-cols-3 gap-6 mt-6 lg:mt-40">
          <div data-animate-left>
            <StaticImage
              className="mx-auto w-full"
              src={"../images/Singtel-ipad.png"}
              alt="Singtel Casestudy"
              placeholder="blurred"
            />
            <div className="mt-3 lg:mt-6 text-center"><Link to="/case-studies/kddl" className="btn btn-blue">View case study</Link></div>
          </div>
          <div data-animate>
            <StaticImage
              className="mx-auto w-full transform lg:scale-125 lg:-translate-y-12"
              src={"../images/Surf-Lifesavers-WA-ipad.png"}
              alt="Surf Life Saving WA Casestudy"
              placeholder="blurred"
            />
            <div className="mt-3 lg:mt-6 text-center"><Link to="case-studies/surf-life-saving-wa" className="btn btn-blue">View case study</Link></div>
          </div>
          <div data-animate-right>
            <StaticImage
              className="mx-auto w-full"
              src={"../images/Kwik-Logistics-iPad.png"}
              alt="Kwik Logistics Casestudy"
              placeholder="blurred"
            />
            <div className="mt-3 lg:mt-6 text-center"><Link to="/case-studies/kwik-logistics" className="btn btn-blue">View case study</Link></div>
          </div>
        </div>
      </div>
      <StaticImage
        src="../images/line-data.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
      />
    </div>
  )
}

export default CaseStudies