import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ClientLogos from "./ClientLogos"
import PerlinNoise from "./PerlinNoise"

export default function MainBanner() {
  return (
    <div className="py-16 lg:py-32 xl:py-24 relative">
      {/* Video */}

      <div className="relative z-10 text-white">
        <div className="container max-xl:max-w-5xl mx-auto flex flex-col gap-6">
          <div className="max-w-3xl flex flex-col gap-4 lg:gap-6">
            <h2 className="text-md font-sans inline-block md:text-lg tracking-wide text-purple">
              18 Years of Exception Perth IT Support
            </h2>
            <h1 className="text-4xl leading-normal lg:text-6xl">
              Future Focused
              <br /> IT Support & Management
            </h1>
            <p className="xl:pr-28">
              Since 2004, iQuest have helped businesses across Perth to feel safe
              online, whilst improving the daily performance and productivity of
              their team. Discover how we can do the same for you.
            </p>
            <a href={"/contact-us"} className="btn">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <PerlinNoise />
      {/* <div className="absolute top-0 right-0 transform translate-x-1/4 lg:w-3/4 xl:w-3/5 ">
        <StaticImage
          src="../images/circular-data.png"
          placeholder="none"
          alt="Large abstract shape that represents data"
          className="opacity-50 xl:opacity-100"
        />
      </div> */}
      <div className="relative">
        <StaticImage
          src="../images/data-lines-flipped.png"
          placeholder="none"
          alt="Abstract lines"
          objectFit="cover"
          className="mix-blend-hard-light"
        />
        <ClientLogos classes="absolute inset-0 my-auto h-fit w-full" />
      </div>
    </div>
  )
}
