import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function MainBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 lg:py-32 xl:px-0 xl:py-46">
      <div data-animate className="relative z-10 transform lg:w-3/4 -translate-y-4">
        <span className="text-md inline-block md:text-lg text-blue-light tracking-wide mb-4">Perth's leading IT solutions team since 2004</span>
        <h1 className="text-4xl leading-tight lg:text-7xl text-blue-lighter">iQuest provide<br/> exceptional IT support</h1>
        <p className="text-white lg:w-2/3">
          “I cannot thank iQuest enough. Professional, responsive and willing to assist on such short notice”. <span className="font-bold">Elvira Mustafa</span>
        </p>
        <a href="https://www.google.com/search?q=iquest&oq=iquest&aqs=chrome..69i57j46i175i199i512j0i512j0i10i512j69i60l3j69i61.1321j0j7&sourceid=chrome&ie=UTF-8#lrd=0x2a32bad600ac12cb:0x11b59d901fa06ebf,1,,," target="_blank" rel="noopener">
          <StaticImage placeholder="none" className="mt-6 object-contain" src="../images/google-reviews.png" width="180" alt="A 5-star Google review rating" />
        </a>
      </div>
      <div className="absolute top-0 right-0 transform translate-x-1/4 lg:w-3/4 xl:w-3/5 ">
        <StaticImage
          src="../images/circular-data.png"
          placeholder="none"
          alt="Large abstract shape that represents data"
          className="opacity-50 xl:opacity-100"
        />
      </div>
    </div>
  )
}

