import React from "react"

export default function FourColumnGrid({ title, description, items }) {
    return (
        <div className="py-16">
            <div className="mx-auto">
                <div className="lg:text-left">
                    {title && <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-blue-light sm:text-4xl">{title}</h2>}
                    {description && <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
                        {description}
                    </p>}
                </div>

                {items && <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
                        {items.map((item) => (
                            <div data-animate key={item.name} className="relative">
                                <dt>
                                    <p className="font-bold is-h3">{item.name}</p>
                                </dt>
                                <dd className="mt-2 text-gray-300">{item.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>}
            </div>
        </div>
    )
}
