import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Testimonials = () => {
  return (
    <div className="bg-secondary-gradient">
      <section className="py-12 max-w-7xl mx-auto px-4 grid gap-6 md:py-32 md:grid-cols-3 xl:px-0">
        <blockquote className="text-blue-lighter lg:col-span-2">
          <p data-animate className="text-xl font-normal leading-loose">
            We cannot speak highly enough of the staff assigned to our implementation. Our new infrastructure more complex than our previous systems. The iQuest team were helpful, approachable, and knowledgeable. The ongoing excellent support is really something we sincerely appreciate and rely on.&rdquo;
          </p>
          <figcaption data-animate-left className="mt-6 text-xl font-bold">Minh Tran</figcaption>
          <cite data-animate-left className="italic font-normal">Manager, Information Technology, Fremantle Dockers</cite>
        </blockquote>
        <StaticImage
          data-animate
          className="mx-auto"
          width={250}
          src="../images/Fremantle-Dockers-Client-Logo.png"
          alt="Fremantle Dockers Logo"
        />
      </section>
    </div>
  )
}

export default Testimonials