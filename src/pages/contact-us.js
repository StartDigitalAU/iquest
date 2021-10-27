import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import InternalLayout from "../components/layout/InternalLayout"

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const ContactUs = () => {
    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': "contact",
                ...state,
            }),
        })
            .then((data) => {
                navigate(form.getAttribute('action'))
            })
            .catch((error) => console.log('Form submission error: ', error))
    }

    return (
        <>
            <InternalLayout title="Contact Us">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 data-animate className="text-blue-light">Get in touch with us today!</h2>
                        <p data-animate>iQuest may be a technology company, but at the very core we provide exceptional good old-fashioned service. In a highly competitive market, we are able to distinguish ourselves by offering a personal and premium service delivery experience. iQuest was created on the premise of providing understanding as well as true professionalism. Our success is mainly determined by the commitment and competence of our team of IT Engineers.</p>
                        <h3 data-animate className="mt-6 mb-2 text-blue-light">Contact Us</h3>
                        <div data-animate className="flex flex-col">
                            <span>General Manager: Pietro Bertolini</span>
                            <a className="hover:underline" href="mailto:sales@iquest.com.au">sales@iquest.com.au</a>
                            <a className="hover:underline" href="mailto:pietro.bertolini@iquest.com.au">pietro.bertolini@iquest.com.au</a>
                        </div>
                        <h3 data-animate className="mt-6 mb-2 text-blue-light">Helpdesk</h3>
                        <div data-animate className="flex flex-col">
                            <p>The iQuest Helpdesk is here to primarily support our Australian and International clients in urgent need of our IT support team.</p>
                            <span>
                                Australian line: <a className="hover:underline" href="tel:1300769859">1300 769 859</a>
                            </span>
                            <span>
                                International line: <a className="hover:underline" href="tel:+61862086510">(+61)8 6208 6510</a>
                            </span>
                        </div>
                        <h3 data-animate className="mt-6 mb-2 text-blue-light">iQuest Offices</h3>
                        <span data-animate className="block">Perth Office: Level 5, 68 St Georges Terrace, WA 6000</span>
                        <span data-animate className="block">Melbourne Office: Unit 201, 50 Market Street, VIC 3000</span>
                    </div>
                    <form
                        data-animate-right
                        className="lg:sticky top-8 grid lg:grid-cols-2 gap-6 self-start"
                        action="/success"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <Input label="name" placeholder="John Doe" changeHandler={handleChange} />
                        <Input label="subject" placeholder="IT Support Services" changeHandler={handleChange} />
                        <Input label="email" type="email" placeholder="john@example.com.au" changeHandler={handleChange} />
                        <Input label="phone" type="tel" placeholder="0412 345 678" changeHandler={handleChange} />
                        <TextArea changeHandler={handleChange} />
                        <button type="submit" className="btn btn-blue btn-medium w-32 lg:col-span-full ml-auto">Submit</button>
                    </form>
                </div>
            </InternalLayout>
        </>
    )
}

const Input = ({ label, type = 'text', placeholder = '', changeHandler }) => {
    return (
        <div className="">
            <label
                htmlFor={label}
                className="text-sm text-white mb-6 font-medium capitalize"
            >
                {label}
            </label>
            <input
                type={type}
                name={label}
                id={label}
                className="block w-full px-4 py-4 rounded-md border-0 p-0 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-light sm:text-sm"
                placeholder={placeholder}
                onChange={changeHandler}
            />
        </div>
    )
}

const TextArea = ({ changeHandler }) => (
    <div className="w-full lg:col-span-full">
        <label
            htmlFor="message"
            className="text-sm text-white mb-6 font-medium capitalize"
        >
            Message
        </label>
        <textarea
            className="block w-full rounded-md border-0 p-4 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-light sm:text-sm"
            name="message"
            id="message"
            rows="5"
            placeholder="I'd like to talk to you about..."
            onChange={changeHandler}>
        </textarea>
    </div>
)

export default ContactUs
