import React from "react"
import TestimonialCarousel from "./TestimonialCarousel"
import { StaticImage } from "gatsby-plugin-image"
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
// register Swiper custom elements
register()

const Testimonials = () => {
  return (
    <section className="bg-overlay pt-[550px] pb-16 md:pb-32 relative rounded-t-[50px] md:rounded-t-[100px] mb-[-100px]">
      <StaticImage
        src={"../images/perth-afternoon.jpg"}
        alt="Perth in the Afternoon"
        className="absolute inset-0 rounded-t-[100px]"
      />
      <div className="relative z-10 text-center mb-24">
        <p className="text-white text-md font-sans inline-block md:text-lg tracking-wide mb-6">
          Exceptional IT Support Since 2004
        </p>
        <h4 className="lg:text-5xl text-white lg:leading-tight font-display mb-6">
          Hear How We’ve Helped
        </h4>
      </div>
      <TestimonialCarousel />
    </section>
  )
}

export default Testimonials
