import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import { navigate } from 'gatsby-link'
import { StaticImage } from "gatsby-plugin-image"
import InternalLayout from "../components/layout/InternalLayout"

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const Partnership = () => {
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
                'form-name': "partnership",
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
            <Helmet htmlAttributes={{ lang: `en` }}>
                <meta charSet="utf-8" />
                <title>iQuest Partnership | IT Services Perth</title>
                <meta name="description" content="iQuest may be a technology company, but at the very core we provide exceptional good old-fashioned service." />
            </Helmet>
            <InternalLayout title="Let’s Journey Together" description="We want to assist you and your firm with all that we’ve learned throughout our own journey. With iQuest’s strong business acumen and technically competent team, we can help you achieve business growth while maintaining a work-life balance.">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 data-animate className="text-blue-light">Partnership</h2>
                        <p data-animate>Our mission is to help you establish a successful IT business as well as a happier balance of work and family. We will provide you with our back office support, ongoing training and mentoring.</p>
                        <StaticImage
                        className="w-full mt-20 max-h-80 rounded-b-xl lg:rounded-bl-none lg:rounded-tr-xl lg:max-h-full"
                        src="../images/iQuest-Journey-Brochure.png"
                        alt="iQuest Brochure Mockup"
                        placeholder="none"
                        layout="constrained"
                        height={600}
                        quality="100"
                        />
                    </div>
                    <div>
                        <h2 data-animate className="text-blue-light">Partnership</h2>
                        <p data-animate className="mb-12">Our mission is to help you establish a successful IT business as well as a happier balance of work and family. We will provide you with our back office support, ongoing training and mentoring.</p>
                        <p data-animate className="mb-12">Please complete the below form and we will email through your eBook and further information.</p>
                    <form
                        data-animate-right
                        className="lg:sticky top-8 grid lg:grid-cols-2 gap-6 self-start"
                        action="/success"
                        name="partnership"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <Input label="name" placeholder="John Doe" changeHandler={handleChange} />
                        <Input label="business name" placeholder="Insert Business" changeHandler={handleChange} />
                        <Input label="email" type="email" placeholder="john@example.com.au" changeHandler={handleChange} />
                        <Input label="phone" type="tel" placeholder="0412 345 678" changeHandler={handleChange} />
                        <button type="submit" className="btn btn-blue btn-medium w-32 lg:col-span-full ml-auto">Submit</button>
                    </form>
                    </div>
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

export default Partnership
