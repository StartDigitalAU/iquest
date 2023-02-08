import React, { useRef, useCallback } from "react"
import { StaticImage } from "gatsby-plugin-image"
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
import SwiperCore, { Navigation } from "swiper"
SwiperCore.use([Navigation])
// register Swiper custom elements
register()

const TestimonialCarousel = () => {
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className="max-w-6xl mx-auto relative">
      <swiper-container slides-per-view="1" speed="500" loop="true">
        <div onClick={handlePrev}>no</div>
        <div onClick={handleNext}>yes</div>

        <swiper-slide>
          <div className="bg-white rounded-2xl p-12 flex flex-col gap-6 items-center justify-center max-w-4xl mx-auto">
            <StaticImage
              className="mx-auto"
              width={100}
              src="../images/Fremantle-Dockers-Client-Logo2.png"
              alt="Fremantle Dockers Logo"
              placeholder="none"
            />
            <blockquote className="text-black-light text-center">
              <p className="text-black-light">
                We cannot speak highly enough of the staff assigned to our
                implementation. Our new infrastructure more complex than our
                previous systems. The iQuest team were helpful, approachable,
                and knowledgeable. The ongoing excellent support is really
                something we sincerely appreciate and rely on.&rdquo;
              </p>
              <figcaption data-animate-left className="mt-6 text-xl font-bold">
                Minh Tran
              </figcaption>
              <cite data-animate-left className="italic font-normal">
                Manager, Information Technology, Fremantle Dockers
              </cite>
            </blockquote>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
    </div>
  )
}

export default TestimonialCarousel
