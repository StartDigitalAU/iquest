import React from "react"
import TestimonialCarousel from "./TestimonialCarousel"
import { StaticImage } from "gatsby-plugin-image"
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
// register Swiper custom elements
register()

const Testimonials = () => {
  return (
    <section className="px-6 md:px-12 xl:px-0 bg-background bg-overlay pt-[350px] md:pt-[600px] lg:pt-[550px] pb-16 md:pb-32 relative mb-[-100px]">
      <StaticImage
        src={"../images/perth-afternoon.jpg"}
        alt="Perth in the Afternoon"
        className="absolute inset-0 rounded-t-[50px] lg:rounded-t-[100px]"
      />
      <div className="relative z-10 text-center mb-12 lg:mb-24">
        <p className="text-white text-md font-sans inline-block md:text-lg tracking-wide mb-3 lg:mb-6">
          Exceptional IT Support Since 2004
        </p>
        <h3 className="text-white text-3xl leading-normal lg:text-5xl">
          Hear How We’ve Helped
        </h3>
      </div>
      <TestimonialCarousel />
    </section>
  )
}

export default Testimonials
