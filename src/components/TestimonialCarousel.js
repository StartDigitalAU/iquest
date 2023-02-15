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
      <button
        className="text-5xl bg-white rounded-full text-black w-12 h-12 grid place-items-center absolute top-1/2 left-0 z-50"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </button>

      <button
        className="text-5xl bg-white rounded-full text-black w-12 h-12 grid place-items-center absolute top-1/2 right-0 z-50"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
      <swiper-container
        ref={sliderRef}
        slides-per-view="1"
        speed="500"
        loop="true"
      >
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
      </swiper-container>
    </div>
  )
}

export default TestimonialCarousel
