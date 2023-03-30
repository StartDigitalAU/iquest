import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

// Content for the cyber resilience section
const CyberResilience = () => {
  return (
    <>
      <StaticImage
        src={"../images/women-on-phone.png"}
        alt="A women looking at her phone"
        className="!absolute inset-0 rounded-2xl"
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00000071] to-[#255fe6] mix-blend-multiply"></div>
      <div className="flex flex-col gap-6 z-10">
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
        <Link
          to={"/it-support/cyber-resilience-assessments"}
          className="btn text-white"
        >
          Learn more
        </Link>
      </div>
    </>
  )
}

// Content for the security awareness section
const SecurityAwareness = () => {
  return (
    <>
      <StaticImage
        src={"../images/security-awareness.jpg"}
        alt="Security Awareness"
        className="!absolute inset-0 rounded-2xl"
      />
      <div className="!absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#000000b4] to-[#255fe6] mix-blend-multiply"></div>
      <div className="flex flex-col gap-6 z-10">
        <h3 className="text-white text-3xl leading-normal lg:text-4xl">
          Security Awareness Training
        </h3>
        <p>
          Old school security awareness training won’t cut it anymore. Today,
          your employees are consistently exposed to sophisticated phishing and
          ransomware attacks. Find out how our Perth IT Support has helped
          businesses like yours avoid security threats using KnowBe4.
        </p>
        <Link to={"/it-support/security-training"} className="btn text-white">
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
        src={"../images/cybercrime.jpg"}
        alt="Cybercrime Mitigation"
        className="!absolute inset-0 rounded-2xl"
      />
      <div className="!absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00000071] to-[#255fe6] mix-blend-multiply"></div>
      <div className="flex flex-col gap-6 z-10">
        <h3 className="text-white text-3xl leading-normal lg:text-4xl">
          Mitigate Cybercrimes
        </h3>
        <p>
          A single click has the ability to compromise your entire organisation.
          Talk to iQuest to hear how we can help mitigate the risks that come
          with email impersonation and protect your brand name by preventing
          impersonators and phishing cybercrimes.
        </p>
        <Link
          to={"it-support/it-support-services-perth"}
          className="btn text-white"
        >
          Learn more
        </Link>
      </div>
    </>
  )
}

// Content for the Business Helpdesk Support Section
const BusinessHelpdeskSupport = () => {
  return (
    <>
      <StaticImage
        src={"../images/helpdesk-support.jpg"}
        alt="Helpdesk Support"
        className="!absolute inset-0 rounded-2xl"
      />
      <div className="!absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#000000b7] to-[#255fe6] mix-blend-multiply"></div>
      <div className="flex flex-col gap-6 z-10">
        <h3 className="text-white text-3xl leading-normal lg:text-4xl">
          Business Helpdesk Support
        </h3>
        <p>
          iQuest’s business help desk support is like having your very own IT
          team onsite. Our 24/7 IT team is only a call away, and are here to
          answer any of your burning questions. With a 96% client retention rate
          since 2004, you can rest assured that iQuest always has your back.
        </p>
        <Link
          to={"/it-support/business-helpdesk-support-perth"}
          className="btn text-white"
        >
          Learn more
        </Link>
      </div>
    </>
  )
}

// Content for the Hardware & Software Section
const HardwareAndSoftware = () => {
  return (
    <>
      <StaticImage
        src={"../images/hardware.jpg"}
        alt="Hardware"
        className="!absolute inset-0 rounded-2xl"
      />
      <div className="!absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00000092] to-[#255fe6] mix-blend-multiply"></div>
      <div className="flex flex-col gap-6 z-10">
        <h3 className="text-white text-3xl leading-normal lg:text-4xl">
          Hardware & Software
        </h3>
        <p>
          At iQuest we’ve done the research for you. Speed, performance,
          reliability and security are our main criteria in narrowing down the
          best hardware and software for your business. We’ve partnered with
          leading providers to ensure we’re providing you with top tier
          products.
        </p>
        <Link
          to={"/it-support/hardware-software-procurement"}
          className="btn text-white"
        >
          Learn more
        </Link>
      </div>
    </>
  )
}

// Content for the Cloud Computing Section
const TechnologyConsulting = () => {
  return (
    <>
      <StaticImage
        src={"../images/technology-consulting.jpg"}
        alt="Technology Consulting"
        className="!absolute inset-0 rounded-2xl"
      />
      <div className="!absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#000000b5] to-[#255fe6] mix-blend-multiply"></div>
      <div className="flex flex-col gap-4 z-10">
        <h3 className="text-white text-3xl leading-normal lg:text-4xl">
          Technology Consulting
        </h3>
        <p>
          We assist small, medium and corporate businesses to get the most out
          of their IT systems. With access to our skilled staff, you will get
          the best advice and expertise you need in today’s technology
          marketContact us to discover more.
        </p>
        <Link
          to={"/it-support/technology-consulting-perth"}
          className="btn text-white"
        >
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
      content = <CyberResilience />
      break
    case 1:
      content = <SecurityAwareness />
      break
    case 2:
      content = <MitigateCybercrimes />
      break
    case 3:
      content = <BusinessHelpdeskSupport />
      break
    case 4:
      content = <HardwareAndSoftware />
      break
    case 5:
      content = <TechnologyConsulting />
      break
  }

  return content
}

const HowWeHelp = () => {
  const [index, setIndex] = useState(0)

  return (
    <section className="container px-6 md:px-12 xl:px-0 mx-auto flex flex-col gap-6">
      <p className="text-md inline-block md:text-lg tracking-wide text-purple">
        Fully Managed Perth IT Services
      </p>
      <h3 className="text-white text-3xl leading-normal lg:text-5xl">
        How We Help
      </h3>
      <p className="lg:w-3/4">
        From cyber resilience assessments to cyber security awareness training
        and ongoing management, here’s a glimpse at how we help ensure your
        business remains secure, protected and supported at all times.
      </p>

      <div className="relative flex flex-col lg:h-[750px] rounded-2xl mt-6">
        <div className="flex-[3] flex flex-col justify-center gap-4 lg:w-1/2 px-10 py-14 lg:p-20">
          <Content index={index} />
        </div>
        <div className="flex-[1.25] py-8 grid grid-cols-2 lg:grid-cols-6 items-center gap-x-6 gap-y-12 lg:gap-0 lg:divide-x-2 divide-white bg-black/70 lg:bg-white/20 backdrop-blur-md rounded-b-2xl">
          <div
            onClick={() => setIndex(0)}
            onKeyDown={() => setIndex(0)}
            className="h-full flex-1 px-8 flex flex-col items-center justify-center gap-6 text-center text-white text-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62.471"
              height="64.7"
              viewBox="0 0 62.471 64.7"
            >
              <path
                id="Path_500"
                data-name="Path 500"
                d="M23.324,36.709l7.621,7.621,12.7-17.783M33.486,2.714A40.509,40.509,0,0,1,5.026,13.845a40.692,40.692,0,0,0,28.46,52.07,40.7,40.7,0,0,0,28.46-52.073h-.515A40.495,40.495,0,0,1,33.486,2.714Z"
                transform="translate(-2.25 -1.964)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-display">
              Achieve Cyber <br />
              Resilience
            </span>
          </div>
          <div
            onClick={() => setIndex(1)}
            onKeyDown={() => setIndex(0)}
            className="h-full flex-1 px-8 flex flex-col items-center justify-center gap-6 text-center text-white text-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52.462"
              height="67.75"
              viewBox="0 0 52.462 67.75"
            >
              <path
                id="Path_505"
                data-name="Path 505"
                d="M45.269,30.279V17.538a15.288,15.288,0,0,0-30.577,0v12.74M12.144,68.5H47.817a7.644,7.644,0,0,0,7.644-7.644V37.923a7.644,7.644,0,0,0-7.644-7.644H12.144A7.644,7.644,0,0,0,4.5,37.923V60.856A7.644,7.644,0,0,0,12.144,68.5Z"
                transform="translate(-3.75 -1.5)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-display">
              Security Awareness <br />
              Training
            </span>
          </div>

          <div
            onClick={() => setIndex(2)}
            onKeyDown={() => setIndex(0)}
            className="h-full flex-1 px-8 flex flex-col items-center justify-center gap-6 text-center text-white text-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58.901"
              height="74.945"
              viewBox="0 0 58.901 74.945"
            >
              <path
                id="Path_503"
                data-name="Path 503"
                d="M25.784,12.255a5.508,5.508,0,0,0-11.017,0V22.747M25.784,12.255V7.008a5.508,5.508,0,1,1,11.017,0v5.246m-11.017,0,.262,20.722M36.8,35.6V12.255m0,0a5.508,5.508,0,0,1,11.017,0v36.46M14.767,22.747a5.508,5.508,0,1,0-11.017,0V51.338A23.607,23.607,0,0,0,27.357,74.945h7.058A18.36,18.36,0,0,0,47.4,69.568l6.059-6.059a18.361,18.361,0,0,0,5.379-12.982l.01-7.079a2.336,2.336,0,0,1,.692-1.647,5.51,5.51,0,0,0-7.792-7.792,13.353,13.353,0,0,0-3.917,9.4M14.767,22.747V38.223M36.7,53.325a15.7,15.7,0,0,1,11.122-4.61m.007,0h-.007"
                transform="translate(-3 -0.75)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-display">
              Mitigate <br />
              Cybercrimes
            </span>
          </div>
          <div
            onClick={() => setIndex(3)}
            onKeyDown={() => setIndex(0)}
            className="h-full flex-1 px-8 flex flex-col items-center justify-center gap-6 text-center text-white text-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <path
                id="Path_501"
                data-name="Path 501"
                d="M2.25,15.75a45,45,0,0,0,45,45H54A6.75,6.75,0,0,0,60.75,54V49.884a3.373,3.373,0,0,0-2.556-3.273L44.925,43.293a3.373,3.373,0,0,0-3.519,1.251L38.5,48.423a3.183,3.183,0,0,1-3.63,1.14A36.1,36.1,0,0,1,13.437,28.134a3.183,3.183,0,0,1,1.14-3.63l3.879-2.91a3.37,3.37,0,0,0,1.251-3.519L16.389,4.806A3.375,3.375,0,0,0,13.116,2.25H9A6.75,6.75,0,0,0,2.25,9Z"
                transform="translate(-1.5 -1.5)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-display">
              Business Helpdesk <br />
              Support
            </span>
          </div>
          <div
            onClick={() => setIndex(4)}
            onKeyDown={() => setIndex(0)}
            className="h-full flex-1 px-8 flex flex-col items-center justify-center gap-6 text-center text-white text-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64.5"
              height="50.845"
              viewBox="0 0 64.5 50.845"
            >
              <path
                id="Path_504"
                data-name="Path 504"
                d="M48.75,12.659,64.5,28.25,48.75,43.841m-31.5,0L1.5,28.25,17.25,12.659M39.75,3.75l-13.5,49"
                transform="translate(-0.75 -2.828)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-display">
              Hardware <br />& Software
            </span>
          </div>
          <div
            onClick={() => setIndex(5)}
            onKeyDown={() => setIndex(0)}
            className="h-full flex-1 px-8 flex flex-col items-center justify-center gap-6 text-center text-white text-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63.038"
              height="48.948"
              viewBox="0 0 63.038 48.948"
            >
              <path
                id="Path_502"
                data-name="Path 502"
                d="M33.017,42.421V21.129m0,0,9.463,9.463m-9.463-9.463-9.463,9.463m-7.1,21.292A14.195,14.195,0,0,1,12.009,24.2a16.561,16.561,0,0,1,32.279-7.35A9.463,9.463,0,0,1,56.142,28.993a11.835,11.835,0,0,1-4.2,22.892Z"
                transform="translate(-1.481 -3.687)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <span className="font-display">
              Technology <br />
              Consulting
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
