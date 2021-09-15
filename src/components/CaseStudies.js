import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function CaseStudies() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:pt-12 sm:pb-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 data-animate className="text-5xl font-extrabold tracking-tight text-gray-900">iQuest Case Studies</h2>
          <p data-animate className="max-w-xl mt-2 mx-auto text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div data-animate-more className="mt-6"><Link to="/case-studies" className="btn btn-blue">View all case studies</Link></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          <div data-animate-left className="mb-10">
            <StaticImage
              className="mx-auto"
              src={"../images/iQuest-Client-Singtel.jpg"}
              width={350}
              height={347}
              alt="Singtel Casestudy"
              placeholder="blurred"
            />
            <div className="mt-6 text-center"><Link to="/case-studies/kddl" className="btn btn-small btn-blue">View case study</Link></div>
          </div>
          <div data-animate className="mb-10">
            <StaticImage
              className="mx-auto"
              src={"../images/iQuest-Client-SLSC.jpg"}
              width={350}
              height={347}
              alt="Surf Life Saving WA Casestudy"
              placeholder="blurred"
            />
            <div className="mt-6 text-center"><Link to="case-studies/surf-life-saving-wa" className="btn btn-small btn-blue">View case study</Link></div>
          </div>
          <div data-animate-right className="mb-10">
            <StaticImage
              className="mx-auto"
              src={"../images/iQuest-Client-Kwik-Logistics.jpg"}
              width={350}
              height={347}
              alt="Kwik Logistics Casestudy"
              placeholder="blurred"
            />
            <div className="mt-6 text-center"><Link to="/case-studies/kwik-logistics" className="btn btn-small btn-blue">View case study</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}
