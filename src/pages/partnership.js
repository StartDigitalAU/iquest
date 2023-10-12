import React, { useState } from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { navigate } from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"
import InternalLayout from "../components/layout/InternalLayout"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Partnership = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "partnership",
        ...state,
      }),
    })
      .then(data => {
        const downloadButton = document.querySelector("#download-button")
        downloadButton.click()
        navigate(form.getAttribute("action"))
      })
      .catch(error => console.log("Form submission error: ", error))
  }

  return (
    <>
      <GatsbySeo
        title="iQuest Partnership for Businesses Looking Establish their IT Services"
        description="Our mission is to help you establish a successful IT business through our back office IT support from expert IT consultants."
      />
      <InternalLayout
        title="Let’s Journey Together"
        description="We want to assist you and your firm with all that we’ve learned throughout our own journey. With iQuest’s strong business acumen and technically competent team, we can help you achieve business growth while maintaining a work-life balance."
      >
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 data-animate className="text-blue-light">
              Partnership
            </h2>
            <p data-animate>
              Our mission is to help you establish a successful IT business as
              well as a happier balance of work and family. We will provide you
              with our back office support, ongoing training and mentoring.
            </p>
            <StaticImage
              className="w-full mt-20 max-h-80 rounded-b-xl lg:rounded-bl-none lg:rounded-tr-xl lg:max-h-full"
              src="../images/iQuest-Journey-Brochure.png"
              alt="iQuest Brochure Mockup"
              placeholder="none"
              height={600}
              quality="100"
            />
          </div>
          <div>
            <h2 data-animate className="text-blue-light">
              Succession
            </h2>
            <p data-animate className="mb-12">
              Our mission is to help you establish a successful IT business as
              well as a happier balance of work and family. We will provide you
              with our back office support, ongoing training and mentoring.
            </p>
            <p data-animate className="mb-12">
              Please complete the below form to download your eBook with further
              information.
            </p>
            <a
              id="download-button"
              href={"/iQuest-brochure.pdf"}
              download
              className="hidden"
            >
              Download Button
            </a>
            <form
              data-animate-right
              className="lg:sticky top-8 grid lg:grid-cols-2 gap-6 self-start"
              action="/success"
              name="partnership"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="partnership" />
              <Input
                label="name"
                type="text"
                placeholder="John Doe"
                changeHandler={handleChange}
              />
              <Input
                label="business name"
                type="text"
                placeholder="Insert Business"
                changeHandler={handleChange}
              />
              <Input
                label="email"
                type="email"
                placeholder="john@example.com.au"
                changeHandler={handleChange}
              />
              <Input
                label="phone"
                type="tel"
                placeholder="0412 345 678"
                changeHandler={handleChange}
              />
              <button
                type="submit"
                className="btn btn-blue btn-medium w-32 lg:col-span-full ml-auto"
              >
                Download
              </button>
            </form>
          </div>
        </div>
      </InternalLayout>
    </>
  )
}

const Input = ({ label, type = "text", placeholder = "", changeHandler }) => {
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
        required
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
