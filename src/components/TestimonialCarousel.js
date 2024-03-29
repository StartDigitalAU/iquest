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
    <div className="relative max-w-6xl pb-32 mx-auto">
      <button
        className="text-5xl bg-white rounded-full text-black w-12 h-12 grid place-items-center bottom-[50px] left-1/3 absolute lg:top-1/2 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-full lg:left-0 z-50"
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
        className="text-5xl bg-white rounded-full text-black w-12 h-12 grid place-items-center bottom-[50px] right-1/3 translate-x-1/2 lg:translate-x-0 absolute lg:top-1/2 lg:-translate-y-full lg:right-0 z-50"
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
          <div className="flex flex-col items-center justify-center max-w-4xl gap-6 p-12 mx-auto bg-white rounded-2xl">
            <StaticImage
              className="mx-auto"
              width={200}
              src="../images/argonaut-logo.png"
              alt="Argonaut Logo"
              placeholder="none"
            />
            <blockquote className="text-center text-black-light">
              <p className="text-black-light">
                "We cannot speak highly enough of the staff assigned to our
                implementation. Our new infrastructure more complex than our
                previous systems. The iQuest team were helpful, approachable,
                and knowledgeable. The ongoing excellent support is really
                something we sincerely appreciate and rely on.&rdquo;
              </p>
              <figcaption data-animate-left className="mt-8 text-xl font-bold">
                Michael Price
              </figcaption>
              <cite data-animate-left className="italic font-normal">
                Chief Operating Officer
              </cite>
            </blockquote>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="flex flex-col items-center justify-center max-w-4xl gap-6 p-12 mx-auto bg-white rounded-2xl">
            <StaticImage
              className="mx-auto"
              width={100}
              src="../images/Fremantle-Dockers-Client-Logo2.png"
              alt="Fremantle Dockers Logo"
              placeholder="none"
            />
            <blockquote className="text-center text-black-light">
              <p className="text-black-light">
                "The team assigned to our implementation deserves the highest
                praise, as we cannot speak highly enough of their remarkable
                qualities. Our new infrastructure presents a greater level of
                complexity compared to our previous systems. Throughout the
                process, the iQuest team has proven to be a valuable asset,
                offering unwavering support, approachability, and extensive
                knowledge. We deeply appreciate and rely on the continuous
                excellence of their assistance.&rdquo;
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
          <div className="flex flex-col items-center justify-center max-w-4xl gap-6 p-12 mx-auto bg-white rounded-2xl">
            <StaticImage
              className="mx-auto"
              width={100}
              src="../images/artrya.jpg"
              alt="Artrya Logo"
              placeholder="none"
            />
            <blockquote className="text-center text-black-light">
              <p className="text-black-light">
                "As a client of iQuest, I am thoroughly impressed with the
                quality of their IT services. Their team is knowledgeable,
                responsive, and goes above and beyond to ensure our IT needs are
                met. I highly recommend iQuest for their exceptional
                services.&rdquo;
              </p>
              <figcaption data-animate-left className="mt-6 text-xl font-bold">
                Janice Marcon
              </figcaption>
              <cite data-animate-left className="italic font-normal">
                Chief People & Culture Officer
              </cite>
            </blockquote>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  )
}

export default TestimonialCarousel
