import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function ClientLogos({ classes }) {
  return (
    <section
      className={`mx-auto p-12 rounded-3xl bg-white bg-opacity-20 backdrop-blur-lg container ${classes}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
          <div className="flex-1">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Singtel-Logo.png"}
              alt="Singtel logo"
            />
          </div>
          <div className="flex-1">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Gorgi-Logo.png"}
              alt="Gorgi logo"
            />
          </div>
          <div className="flex-1">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Goldfields-Logo.png"}
              alt="Goldfields Money logo"
            />
          </div>
          <div className="flex-1">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Fremantle-Dockers-Logo.png"}
              alt="Fremantle Dockers logo"
            />
          </div>
          <div className="flex-1">
            <StaticImage
              className="client_logo md:px-0 px-2"
              objectFit="contain"
              width={150}
              src={"../images/logos/Gumala-Logo.png"}
              alt="Gumala logo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
