import React from "react"
import { Link } from "gatsby"
import casestudy1 from "/src/images/iQuest-Client-Singtel.jpg"
import casestudy2 from "/src/images/iQuest-Client-SLSC.jpg"
import casestudy3 from "/src/images/iQuest-Client-Kwik-Logistics.jpg"

export default function CaseStudies() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:pt-12 sm:pb-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600 tracking-wide uppercase"></p>
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">iQuest Case Studies</h2>
          <p className="max-w-xl mt-2 mx-auto text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="mt-6"><Link to="#" className="btn btn-blue">View all case studies</Link></div>
        </div>
        <div className="flex flex-wrap mt-12">
          <div className=" md:w-1/3 sm:px-6 w-full mb-10">
            <img className="mx-auto" src={casestudy1} width="350" height="347" alt="Singtel Casestudy" />
            <div className="mt-6 text-center"><Link to="#" className="btn btn-small btn-blue">View case study</Link></div>
          </div>
          <div className="md:w-1/3 sm:px-6 w-full mb-10">
            <img className="mx-auto" src={casestudy2} width="350" height="347" alt="Singtel Casestudy" />
            <div className="mt-6 text-center"><Link to="#" className="btn btn-small btn-blue">View case study</Link></div>
          </div>
          <div className="md:w-1/3 sm:px-6 w-full mb-10">
            <img className="mx-auto" src={casestudy3} width="350" height="347" alt="Singtel Casestudy" />
            <div className="mt-6 text-center"><Link to="#" className="btn btn-small btn-blue">View case study</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}
