import * as React from "react"
import InternalLayout from "../../components/layout/InternalLayout"
import PageTransition from 'gatsby-plugin-page-transitions';
import { StaticImage } from "gatsby-plugin-image";

export default function Directors() {
  return (
    <>
      <PageTransition>
        <InternalLayout title="Our Directors" description="We're Perth's leading IT consulting company, ready to deploy experts anytime & anywhere.">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col space-y-6">
              <h2 className="mb-0">
                Anderson Chong<br />
                <span className="uppercase text-base tracking-wide text-indigo-600 font-bold">Managing Director</span>
              </h2>
              <p>
                Our partnerships with these companies are advantageous for our clients as it’s through our relationships that we can offer better pricing and service. Our close relationships with our partners also means we can build upon our knowledge and seek answers quickly on issues of hardware and software.
              </p>
              <p>
                By having these extremely experienced and influential companies providing us with resources we can provide a range of Technology Consulting activities to you, including Strategic IT planning, Application Software Development, and Business Analyst roles with highly experienced senior IT Consultants by your side. Through iQuest, we specialise in assisting small, medium and corporate businesses to get the most out of their IT systems.
              </p>
            </div>
            <StaticImage
              className="w-full rounded-xl shadow-xl lg:w-auto"
              src="../../images/iQuest-Anderson.jpeg"
              alt="iQuest About Us Banner"
              placeholder="blurred" />
          </div>
        </InternalLayout>
      </PageTransition>
    </>
  )
}