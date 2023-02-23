import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function ClientLogos({ classes }) {
  return (
    <section
      className={`mx-auto p-4 md:p-12 rounded-3xl bg-white bg-opacity-20 backdrop-blur-lg container ${classes}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
          <div className="flex-1 flex">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Kddi-Logo.png"}
              alt="KDDI logo"
            />
          </div>
          <div className="flex-1 flex">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Gorgi-Logo.png"}
              alt="Gorgi logo"
            />
          </div>
          <div className="flex-1 flex">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Argonaut-Logo.png"}
              alt="Argonaut logo"
            />
          </div>
          <div className="flex-1 flex">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Artrya-Logo.png"}
              alt="Artrya logo"
            />
          </div>
          <div className="flex-1 flex">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Advocare-Logo.png"}
              alt="Advocare logo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
