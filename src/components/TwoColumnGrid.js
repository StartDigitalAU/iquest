import React from "react"

export default function TwoColumnGrid({ title, description, items }) {
    return (
        <div className="py-16 bg-white">
            <div className="mx-auto px-4 lg:px-0">
                <div className="lg:text-center">
                    {title && <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>}
                    {description && <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        {description}
                    </p>}
                </div>

                {items && <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {items.map((item) => (
                            <div key={item.name} className="relative">
                                <dt>
                                    <p className="font-bold">{item.name}</p>
                                </dt>
                                <dd className="mt-2 text-gray-600">{item.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>}
            </div>
        </div>
    )
}
