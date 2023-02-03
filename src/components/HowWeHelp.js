import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

// Content for the security awareness section
const SecurityAwareness = () => {
  return (
    <>
      <StaticImage
        src={"../images/women-on-phone.png"}
        alt="A women looking at her phone"
        className="absolute inset-0 rounded-2xl"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent to-[#2560E6] mix-blend-multiply"></div>
      <div className="flex flex-col gap-4 z-10">
        <h3 className="text-white text-3xl leading-normal lg:text-4xl">
          Achieve Cyber Resilience
        </h3>
        <p>
          Our IT team have helped businesses across Perth achieve cyber
          resilience by proactively mitigating cybersecurity risks and arming
          your business with consistent security monitoring and reporting. You
          can rest assured that you’re in safe hands with our team of talented
          IT experts.
        </p>
        <Link to={"#"} className="btn text-white">
          Learn more
        </Link>
      </div>
    </>
  )
}

// Content for the mitigate cybercrimes section
const MitigateCybercrimes = () => {
  return (
    <>
      <StaticImage
        src={"../images/women-on-phone.png"}
        alt="A women looking at her phone"
        className="absolute inset-0 rounded-2xl"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent to-[#2560E6] mix-blend-multiply"></div>
      <div className="flex flex-col gap-4 z-10">
        <h3 className="text-white text-3xl leading-normal lg:text-4xl">
          Mitigate Cybercrimes
        </h3>
        <p>
          Our IT team have helped businesses across Perth achieve cyber
          resilience by proactively mitigating cybersecurity risks and arming
          your business with consistent security monitoring and reporting. You
          can rest assured that you’re in safe hands with our team of talented
          IT experts.
        </p>
        <Link to={"#"} className="btn text-white">
          Learn more
        </Link>
      </div>
    </>
  )
}

// This is a component that renders the content based on the index
const Content = ({ index }) => {
  let content
  switch (index) {
    case 0:
      content = <SecurityAwareness />
      break
    case 1:
      content = <MitigateCybercrimes />
      break
  }

  return content
}

const HowWeHelp = () => {
  const [index, setIndex] = useState(0)

  return (
    <section className="container mx-auto flex flex-col gap-6">
      <p className="text-md inline-block md:text-lg tracking-wide text-purple">
        Fully Managed IT Services Perth
      </p>
      <h3 className="text-white text-3xl leading-normal lg:text-5xl">
        How We Help
      </h3>
      <p className="lg:w-3/4">
        From cyber resilience assessments to cyber security training and ongoing
        management, here’s a glimpse at how we help ensure your business remains
        secure, protected and supported at all times.
      </p>

      <div className="relative flex flex-col h-[750px] rounded-2xl mt-6">
        <div className="flex-[3] flex flex-col justify-center gap-4 lg:w-1/2 ml-16 lg:ml-32">
          <Content index={index} />
        </div>
        <div className="flex-[1.25] flex items-center divide-x-2 divide-white bg-white bg-opacity-20 backdrop-blur-md rounded-b-2xl">
          <div
            onClick={() => setIndex(0)}
            className="flex-1 p-8 flex flex-col place-items-center gap-3 text-white text-sm cursor-pointer"
          >
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62.471 64.7"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m21.074 34.745 7.621 7.621 12.7-17.783M31.236.75a40.509 40.509 0 0 1-28.46 11.131 40.692 40.692 0 0 0 28.46 52.07 40.7 40.7 0 0 0 28.46-52.073h-.515A40.495 40.495 0 0 1 31.236.75Z"
              />
            </svg>
            <span className="font-display">Security Awareness Training</span>
          </div>

          <div
            onClick={() => setIndex(1)}
            className="flex-1 p-8 flex flex-col place-items-center gap-3 text-white text-sm cursor-pointer"
          >
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62.471 64.7"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m21.074 34.745 7.621 7.621 12.7-17.783M31.236.75a40.509 40.509 0 0 1-28.46 11.131 40.692 40.692 0 0 0 28.46 52.07 40.7 40.7 0 0 0 28.46-52.073h-.515A40.495 40.495 0 0 1 31.236.75Z"
              />
            </svg>
            <span className="font-display">Mitigate Cybercrimes</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
