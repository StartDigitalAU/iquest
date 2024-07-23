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
        title="Journey Together Partner Network (JTPN)"
        description=" Embark on a transformative business journey with JTPN, a
              collaborative platform designed for ambitious organizations
              seeking growth and innovation."
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="mb-2 text-blue-light">Our Vision</h2>
            <p data-animate className="mb-8">
              Established in 2020, JTPN fosters collaboration, knowledge
              sharing, and mutual growth among like-minded MSP partners across
              Australia.
            </p>
            <h3 className="mb-2">Key Benefits</h3>
            <ul data-animate className="mb-8">
              <li>
                <p>Accelerator Program</p>
              </li>
              <li>
                <p>Regular knowledge-sharing sessions</p>
              </li>
              <li>
                <p>New business opportunities and collaborations</p>
              </li>
              <li>
                <p>Shared resources for increased efficiency</p>
              </li>
              <li>
                <p>Collective strategy development</p>
              </li>
            </ul>
            <h3 className="mb-2">JTPN Accelerator Program</h3>
            <p data-animate className="mb-8">
              Boost your business growth with our proven program.
            </p>
            <h3 className="mb-2">Program Structure</h3>
            <ul data-animate className="mb-8">
              <li>
                <p>Bi-weekly 1.5-hour meetings</p>
              </li>
              <li>
                <p>Quarterly 4-hour strategy sessions</p>
              </li>
              <li>
                <p>Monthly focused discussions</p>
              </li>
            </ul>
            <h3 className="mb-2">Focus Areas</h3>
            <ul data-animate className="mb-8">
              <li>
                <p>Growth Mindset</p>
              </li>
              <li>
                <p>Client Relations</p>
              </li>
              <li>
                <p>Products & Services</p>
              </li>
              <li>
                <p>Processes & Documentation</p>
              </li>
              <li>
                <p>Financial Management</p>
              </li>
              <li>
                <p>Team Building</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 data-animate className="text-blue-light mb-2">
              Why Join?
            </h2>
            <p data-animate>
              Consistent support and guidance- Strategic planning opportunities-
              Work "on" your business, not just "in" it- Proven track record of
              partner growth and profitability
            </p>
            <p data-animate className="mb-10">
              Join JTPN today and accelerate your MSP business growth through
              proven program, collaboration and strategic development.
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
            <StaticImage
              className="w-full mt-20 max-h-80 rounded-b-xl lg:rounded-bl-none lg:rounded-tr-xl lg:max-h-full"
              src="../images/iQuest-Journey-Brochure.png"
              alt="iQuest Brochure Mockup"
              placeholder="none"
              height={600}
              quality="100"
            />
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
