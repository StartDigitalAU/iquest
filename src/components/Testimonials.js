import React from "react"
import TestimonialCarousel from "./TestimonialCarousel"
import { StaticImage } from "gatsby-plugin-image"
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
// register Swiper custom elements
register()

const Testimonials = () => {
  return (
    <section className="pt-[550px] pb-16 md:pb-32 relative rounded-t-[50px] md:rounded-t-[100px] mb-[-100px]">
      <StaticImage
        src={"../images/perth-afternoon.jpg"}
        alt="Perth in the Afternoon"
        className="absolute inset-0 rounded-t-[100px]"
      />

      <TestimonialCarousel />
    </section>
  )
}

export default Testimonials
