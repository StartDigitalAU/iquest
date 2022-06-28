import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function ClientLogos({ classes }) {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 ${classes}`}>
      <div className="flex items-center space-x-5">
          <div data-animate-right className="flex-1">
            <StaticImage className="client_logo md:px-0 px-2" objectFit="contain" width={150} src={'../images/logos/Singtel-logo.png'} alt="Singtel logo" />
          </div>
          <div data-animate-right className="flex-1">
            <StaticImage className="client_logo md:px-0 px-2" objectFit="contain" width={150} src={'../images/logos/Gorgi-logo.png'} alt="Gorgi logo" />
          </div>
          <div data-animate-right className="flex-1">
            <StaticImage className="client_logo md:px-0 px-2" objectFit="contain" width={150} src={'../images/logos/Goldfields-logo.png'} alt="Goldfields Money logo" />
          </div>
          <div data-animate-right className="flex-1">
            <StaticImage className="client_logo md:px-0 px-2" objectFit="contain" width={150} src={'../images/logos/Fremantle-Dockers-logo.png'} alt="Fremantle Dockers logo" />
          </div>
          <div data-animate-right className="flex-1">
            <StaticImage className="client_logo md:px-0 px-2" objectFit="contain" width={150} src={'../images/logos/Gumala-logo.png'} alt="Gumala logo" />
          </div>
      </div>
    </section>
  )
}
