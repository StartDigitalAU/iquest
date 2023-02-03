import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const FlexItems = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="mt-16 border rounded-2xl flex gap-2">
      {children &&
        children.map((child, index) => (
          <div
            key={index}
            className={`flex-shrink-0 duration-500 border ${
              activeIndex === index ? "flex-1" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className={`w-fit transition-all duration-300 ${
                activeIndex === index ? "" : "-rotate-90"
              }`}
            >
              {child}
            </div>
          </div>
        ))}
    </div>
  )
}

const CaseStudies = () => {
  return (
    <div className="relative mt-32">
      <div className="absolute inset-0">
        <StaticImage
          src={"../images/data-lines.png"}
          alt=""
          aria-hidden="true"
          className="opacity-[3%]"
          placeholder="none"
        />
      </div>
      <div className="max-w-7xl relative z-10 mb-8 mx-auto py-12 px-4 lg:py-20 xl:px-0">
        <p className="text-md font-sans inline-block md:text-lg tracking-wide text-purple mb-6">
          Holistic IT Support Perth
        </p>
        <h4 data-animate className="lg:text-5xl font-display text-black mb-6">
          iQuest Case Studies
        </h4>
        <p className="lg:w-3/4 text-black-light">
          iQuest provides professional IT solutions to a diverse range of
          business sectors such as leading WA sporting entities, construction
          companies and Not For Profit organisations, ensuring their businesses
          have the very best in IT services and solutions. Our exceptional
          service and can-do attitude has helped us become one of Perth’s most
          trusted IT teams.
        </p>

        {/* Dynamic flex stretchy bit  */}
        <FlexItems>
          <div className="p-16 flex">Surf Life Saving</div>
          <div className="p-16 flex">Surf Life Saving</div>
          <div className="p-16 flex">Surf Life Saving</div>
        </FlexItems>
      </div>
    </div>
  )
}

export default CaseStudies
