import React from 'react'

const Quote = ({ quote, image, company }) => {
    return (
        <div className="px-4 sm:px-6 md:flex md:flex-col py-8 md:pl-0 md:pr-10 lg:pr-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                <div className="relative text-lg font-medium text-gray-600 md:flex-grow">
                    <svg
                        className="absolute -top-4 -left-6 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                    >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                        {quote}
                    </p>
                </div>
                <footer>
                    <div className="flex space-x-8 items-center">
                        <img
                            className="h-24 w-24 object-contain"
                            src={image.src}
                            alt={image.alt}
                        />
                        <div className="text-base font-medium text-gray-600">{company}</div>
                    </div>
                </footer>
            </blockquote>
        </div>
    )
}

export default Quote
