import React from 'react'
import InternalLayout from "../components/layout/InternalLayout"
import PageTransition from 'gatsby-plugin-page-transitions';

const ContactUs = () => {
    return (
        <>
            <PageTransition>
                <InternalLayout title="Contact Us">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2>Get in touch with us today!</h2>
                            <p>iQuest may be a technology company, but at the very core we provide exceptional good old-fashioned service. In a highly competitive market, we are able to distinguish ourselves by offering a personal and premium service delivery experience. iQuest was created on the premise of providing understanding as well as true professionalism. Our success is mainly determined by the commitment and competence of our team of IT Engineers.</p>
                            <h3 className="mt-6 mb-2">Contact Us</h3>
                            <div className="flex flex-col">
                                <span>General Manager: Pietro Bertolini</span>
                                <a className="hover:underline" href="mailto:sales@iquest.com.au">sales@iquest.com.au</a>
                                <a className="hover:underline" href="mailto:pietro.bertolini@iquest.com.au">pietro.bertolini@iquest.com.au</a>
                            </div>
                            <h3 className="mt-6 mb-2">Helpdesk</h3>
                            <div className="flex flex-col">
                                <p>The iQuest Helpdesk is here to primarily support our Australian and International clients in urgent need of our IT support team.</p>
                                <span>
                                    Australian line: <a className="hover:underline" href="tel:1300769859">1300 769 859</a>
                                </span>
                                <span>
                                    International line: <a className="hover:underline" href="tel:+61862086510">(+61)8 6208 6510</a>
                                </span>
                            </div>
                            <h3 className="mt-6 mb-2">iQuest Offices</h3>
                            <span className="block">Perth Office: Level 5, 68 St Georges Terrace, WA 6000</span>
                            <span className="block">Melbourne Office: Unit 201, 50 Market Street, VIC 3000</span>
                        </div>
                        <form className="lg:sticky top-8 grid lg:grid-cols-2 gap-6 self-start" action="/success" name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="contact" value="contact" />
                            <Input label="name" placeholder="John Doe" />
                            <Input label="subject" placeholder="IT Support Services" />
                            <Input label="email" type="email" placeholder="jane.doe@example.com.au" />
                            <Input label="phone" type="tel" placeholder="0412345678" />
                            <TextArea />
                            <button type="submit" className="btn btn-blue btn-small w-32 lg:col-span-full ml-auto">Submit</button>
                        </form>
                    </div>
                </InternalLayout>
            </PageTransition>
        </>
    )
}

const Input = ({ label, type = 'text', placeholder = '' }) => {
    return (
        <div className="self-start relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
                htmlFor={label}
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900 capitalize"
            >
                {label}
            </label>
            <input
                type={type}
                name={label}
                id={label}
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    )
}

const TextArea = () => (
    <div className="self-start relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 lg:col-span-full">
        <label
            htmlFor="message"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900 capitalize"
        >
            Message
        </label>
        <textarea
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            name="message"
            id="message"
            rows="5"
            placeholder="I'd like to talk to you about...">
        </textarea>
    </div>
)

export default ContactUs
