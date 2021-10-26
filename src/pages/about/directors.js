import * as React from "react"
import InternalLayout from "../../components/layout/InternalLayout"
import { StaticImage } from "gatsby-plugin-image";

export default function Directors() {
  return (
    <>
      <InternalLayout title="Our Directors" description="We're Perth's leading IT consulting company, ready to deploy experts anytime & anywhere.">
        <div className="relative z-10 grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col space-y-6">
            <h2 data-animate className="mb-0">
              Anderson Chong<br />
              <span className="text-base text-blue-light">Managing Director</span>
            </h2>
            <p data-animate>
              Our partnerships with these companies are advantageous for our clients as it’s through our relationships that we can offer better pricing and service. Our close relationships with our partners also means we can build upon our knowledge and seek answers quickly on issues of hardware and software.
            </p>
            <p data-animate>
              By having these extremely experienced and influential companies providing us with resources we can provide a range of Technology Consulting activities to you, including Strategic IT planning, Application Software Development, and Business Analyst roles with highly experienced senior IT Consultants by your side. Through iQuest, we specialise in assisting small, medium and corporate businesses to get the most out of their IT systems.
            </p>
          </div>
          <div data-animate-right>
            <StaticImage
              className="w-full rounded-xl shadow-xl lg:w-auto"
              src="../../images/iQuest-Anderson.jpeg"
              alt="iQuest About Us Banner"
              placeholder="none"/>
          </div>
        </div>
      </InternalLayout>
    </>
  )
}