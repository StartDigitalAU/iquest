import React from 'react'

const InternalHeader = ({ title, description }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 lg:px-0 py-8 lg:py-24">
            {title &&
                <h1 className="text-4xl md:leading-none font-extrabold text-blue-light sm:text-5xl md:text-6xl">
                    {title}
                </h1>}
            {description &&
                <p className="mt-3 text-lg leading-relaxed text-white sm:max-w-xl sm:mx-auto lg:mx-0">{description}</p>}
        </div>
    )
}

export default InternalHeader
