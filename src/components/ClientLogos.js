import * as React from "react"

export default function ClientLogos({ classes }) {
  const clientLogos = [
    {
      src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Singtel-Logo.png",
      alt: "Singtel"
    },
    {
      src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Gorgi-Logo.png",
      alt: "Gorgo"
    },
    {
      src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Fremantle-Dockers-Logo.png",
      alt: "Fremantle Dockers"
    },
    {
      src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Goldfields-Logo.png",
      alt: "Goldfields"
    },
    {
      src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Gumala-Logo.png",
      alt: "Gumala"
    },
  ]

  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 ${classes}`}>
      <div className="flex items-center space-x-5">
        {clientLogos.map(logo => {
          return (
            <div key={logo.alt} className="flex-1"><img className="client_logo md:px-0 px-2" src={logo.src} width="150" height="81" alt={`${logo.alt} Logo`} /></div>
          )
        })}
      </div>
    </section>
  )
}
