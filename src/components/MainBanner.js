import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function MainBanner() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 flex flex-wrap items-end sm:pb-16 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-32">
        <div data-animate className="mt-10 max-w-3xl px-4 float-left sm:mt-12 sm:px-6 md:mt-16 lg:mt-18 lg:px-8 xl:mt-18">
          <div className="sm:text-center lg:text-left">
            <span className="text-md inline-block md:text-lg text-blue-light tracking-wide mb-4">Perth's leading IT solutions team since 2004</span>
            <h1 className="text-4xl leading-tight sm:text-5xl md:leading-tight md:text-7xl text-blue-lighter">iQuest provide exceptional IT support</h1>
            <p className="mt-3 text-md leading-relaxed text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
              “I cannot thank Quest enough. Professional, responsive and willing to assist on such short notice”. <span className="font-bold">Elvira Mustafa</span>
            </p>
            <a href="https://www.google.com/search?q=iquest&oq=iquest&aqs=chrome..69i57j46i175i199i512j0i512j0i10i512j69i60l3j69i61.1321j0j7&sourceid=chrome&ie=UTF-8#lrd=0x2a32bad600ac12cb:0x11b59d901fa06ebf,1,,," target="_blank" rel="noopener">
              <StaticImage className="mt-6 w-1/3 object-contain" src="../images/google-reviews.png" alt="A 5-star Google review rating" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

