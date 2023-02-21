import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const FlexItems = ({ children, activeIndex }) => {
  return (
    <div className="absolute left-0 w-full mt-16 rounded-2xl flex gap-2 h-[600px]">
      {children &&
        children.map((child, index) => (
          <div
            key={index}
            className={`flex-shrink-0 duration-500 ${
              activeIndex === index ? "flex-1" : ""
            }`}
          >
            {child}
          </div>
        ))}
    </div>
  )
}

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="relative mt-32 pb-[200px]">
      <div className="absolute inset-0">
        <StaticImage
          src={"../images/data-lines.png"}
          alt=""
          aria-hidden="true"
          className="opacity-[3%]"
          placeholder="none"
        />
      </div>
      <div className="container relative z-10 mb-8 mx-auto py-12 px-4 lg:py-20 xl:px-0">
        <p className="text-md font-sans inline-block md:text-lg tracking-wide text-purple mb-6">
          Holistic IT Support Perth
        </p>
        <h4 data-animate className="lg:text-5xl font-display text-black mb-6">
          iQuest Case Studies
        </h4>
        <p className="lg:w-3/4 text-black-light">
          iQuest provides professional IT solutions to a diverse range of
          business sectors such as leading Financial Services, Medical BioTech,
          WA sporting entities, Construction companies and Not For Profit
          organisations, ensuring their businesses have the very best in IT
          services and solutions. Our exceptional service and can-do attitude
          has helped us become one of Perth’s most trusted IT teams.
        </p>

        {/* Dynamic flex stretchy bit  */}
        <FlexItems activeIndex={activeIndex}>
          {/* KDDI */}
          <div
            onClick={() => setActiveIndex(0)}
            className={`p-16 flex relative cursor-pointer rounded-l-2xl h-full ${
              activeIndex === 0 ? "flex-1" : ""
            }`}
          >
            <StaticImage
              src="../images/man-on-phone.png"
              alt="A man on his phone with the city skyline in the background"
              className="absolute inset-0 w-full h-full object-cover -z-20 rounded-l-2xl"
            />

            <StaticImage
              src="../images/secondary-gradient-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none rounded-l-2xl"
            />

            <span
              className={`is-h2 text-white absolute inset-0 flex items-center mb-16 w-full origin-center ${
                activeIndex === 0 ? "hidden" : ""
              }`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                rotate: "180deg",
              }}
            >
              KDDI Australia & Singapore Telecommunications
            </span>

            <div
              className={`flex flex-col justify-end h-full mt-auto gap-4 ${
                activeIndex === 0 ? "" : "hidden"
              }`}
            >
              <span className="is-h2 text-white">
                KDDI Australia & Singapore Telecommunications
              </span>
              <Link className="btn text-white border-white" to="">
                Learn More
              </Link>
            </div>
          </div>

          {/* Surf Life Saving */}
          <div
            onClick={() => setActiveIndex(1)}
            className={`p-16 flex relative cursor-pointer h-full ${
              activeIndex === 1 ? "flex-1" : ""
            }`}
          >
            <span
              className={`is-h2 text-white absolute inset-0 flex items-center mb-16 w-full origin-center ${
                activeIndex === 1 ? "hidden" : ""
              }`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                rotate: "180deg",
              }}
            >
              Surf Life Saving
            </span>

            <StaticImage
              src="../images/lifesavers.png"
              alt="Kids running on the beach as lifesavers"
              className="absolute inset-0 w-full h-full object-cover -z-20"
            />

            <StaticImage
              src="../images/secondary-gradient-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
            />

            <div
              className={`flex flex-col justify-end h-full mt-auto gap-4 ${
                activeIndex === 1 ? "" : "hidden"
              }`}
            >
              <span className="is-h2 text-white">Surf Life Saving</span>
              <Link className="btn text-white border-white" to="">
                Learn More
              </Link>
            </div>
          </div>

          {/* Kiw Logistics */}
          <div
            onClick={() => setActiveIndex(2)}
            className={`p-16 flex relative cursor-pointer rounded-r-2xl h-full ${
              activeIndex === 2 ? "flex-1" : ""
            }`}
          >
            <span
              className={`is-h2 text-white absolute inset-0 flex items-center mb-16 w-full origin-center ${
                activeIndex === 2 ? "hidden" : ""
              }`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                rotate: "180deg",
              }}
            >
              Kwik Logistics
            </span>

            <StaticImage
              src="../images/aerial-trucks.png"
              alt="A group of trucks as seen from above"
              className="absolute inset-0 w-full h-full object-cover -z-20 rounded-r-2xl"
            />

            <StaticImage
              src="../images/secondary-gradient-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none rounded-r-2xl"
            />

            <div
              className={`flex flex-col justify-end h-full mt-auto gap-4 ${
                activeIndex === 2 ? "" : "hidden"
              }`}
            >
              <span className="is-h2 text-white">Kwik Logistics</span>
              <Link className="btn text-white border-white" to="">
                Learn More
              </Link>
            </div>
          </div>
        </FlexItems>
      </div>
    </div>
  )
}

export default CaseStudies
