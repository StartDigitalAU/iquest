import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const InternalHeader = ({ title, description }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-0 py-8 lg:py-24">
            {title &&
                <h1 data-animate-left className="text-4xl relative z-10 md:leading-none font-extrabold text-blue-light sm:text-5xl md:text-6xl">
                    {title}
                </h1>}
            {description &&
                <p data-animate-left-more className="mt-3 relative z-10 text-lg leading-relaxed sm:max-w-xl sm:mx-auto lg:mx-0">{description}</p>}

            <div className="absolute inset-0 z-0">
                <StaticImage
                src="../images/line-data.png"
                alt="Line Data Background"
                aria-hidden="true"
                className="opacity-10"
                placeholder="none"
                />
            </div>                
        </div>
    )
}

export default InternalHeader
