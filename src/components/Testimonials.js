import React from "react"
import TestimonialCarousel from "./TestimonialCarousel"
import { StaticImage } from "gatsby-plugin-image"
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
// register Swiper custom elements
register()

const Testimonials = () => {
  return (
    <section className="pt-[500px] pb-32s relative rounded-t-[100px]">
      <StaticImage
        src={"../images/iQuest-Helpdesk-Support.jpeg"}
        alt=""
        className="absolute inset-0 rounded-t-[100px]"
      />

      <TestimonialCarousel />
    </section>
  )
}

export default Testimonials
