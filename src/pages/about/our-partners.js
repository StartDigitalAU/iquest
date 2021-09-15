import React from "react"
import InternalLayout from "../../components/layout/InternalLayout"
import ClientLogos from "../../components/ClientLogos"
import { StaticImage } from "gatsby-plugin-image"

export default function Partners() {
  return (
    <>
      <InternalLayout title="iQuest Partners" description="We're Perth's leading IT consulting company, ready to deploy experts anytime & anywhere.">
        <h2>At iQuest we work alongside global brands to provide the best IT services in Perth & Melbourne.</h2>
        <p>
          Our partnerships with these companies are advantageous for our clients as it’s through our relationships that we can offer better pricing and service. Our close relationships with our partners also means we can build upon our knowledge and seek answers quickly on issues of hardware and software.
        </p>
        <p>
          By having these extremely experienced and influential companies providing us with resources we can provide a range of Technology Consulting activities to you, including Strategic IT planning, Application Software Development, and Business Analyst roles with highly experienced senior IT Consultants by your side. Through iQuest, we specialise in assisting small, medium and corporate businesses to get the most out of their IT systems.
        </p>
        <StaticImage
          className="w-full my-20 rounded-xl shadow-xl"
          height={470}
          src={"../../images/About-iQuest-Image.jpg"}
          alt="iQuest About Us Banner"
          placeholder="blurred"
        />
        <ClientLogos />
      </InternalLayout>
    </>
  )
}