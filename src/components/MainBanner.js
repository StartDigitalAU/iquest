import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ClientLogos from "./ClientLogos"
// import PerlinNoise from "./PerlinNoise"
import ReactPlayer from 'react-player';

export default function MainBanner() {

  const BannerVideo = () => {
    return (
      <div>
        <ReactPlayer
          url='https://www.dropbox.com/s/9k9xx61o8fl4tgr/iquest_video_loop.mp4?dl=0'
          playing={true}
          loop={true}
          muted={true}
          width='100%'
          height='100%'
          className="absolute top-[-200px] left-0 w-screen"
        />
      </div>
    );
  };


  return (
    <div className="pb-16 lg:pb-32 xl:pb-24 pt-36 md:pt-48 relative">
      {/* Video */}

      <div className="relative z-10 text-white px-6 md:px-12 xl:px-0">
        <div className="container max-xl:max-w-5xl mx-auto flex flex-col gap-6">
          <div className="max-w-3xl flex flex-col gap-6 lg:gap-6 mb-10 lg:mb-0">
            <h2 className="text-sm font-sans inline-block md:text-lg tracking-wide text-purple">
              18 Years of Exceptional Perth IT Support
            </h2>
            <h1 className="text-4xl leading-normal lg:text-6xl">
              Future Focused
              <br /> IT Support & Management
            </h1>
            <p className="xl:pr-28">
              Since 2004, iQuest have helped businesses across Perth to feel safe
              online, whilst improving the daily performance and productivity of
              their team. Discover how we can do the same for you.
            </p>
            <a href={"/contact-us"} className="btn">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <BannerVideo />

      {/* <PerlinNoise /> */}
      {/* <div className="absolute top-0 right-0 transform translate-x-1/4 lg:w-3/4 xl:w-3/5 ">
        <StaticImage
          src="../images/circular-data.png"
          placeholder="none"
          alt="Large abstract shape that represents data"
          className="opacity-50 xl:opacity-100"
        />
      </div> */}
      <div className="relative">
        <StaticImage
          src="../images/data-lines-flipped.png"
          placeholder="none"
          alt="Abstract lines"
          objectFit="cover"
          className="mix-blend-hard-light 2xl:top-0 w-screen"
        />
        <ClientLogos classes="absolute inset-0 my-auto h-fit w-full" />
      </div>
    </div>
  )
}
