import React, { useState } from "react"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
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
        "form-name": "contact",
        ...state,
      }),
    })
      .then(data => {
        navigate(form.getAttribute("action"))
      })
      .catch(error => console.log("Form submission error: ", error))
  }

  return (
    <div className="bg-white rounded-3xl container mx-auto -mt-[50%] translate-y-1/2">
      <div className="max-w-7xl mx-auto rounded-3xl p-16 bg-white">
        <h4 className="is-h1 text-black text-center">Why iQuest</h4>
        <p class="text-black-light max-w-sm mx-auto text-center">
          iQuest provides simple, effective IT support and consulting services
          that allow you to focus on your business. <br />
          <br />
          <strong>Get in touch with us today!</strong>
        </p>
        <form
          className="grid lg:grid-cols-2 gap-6 self-start mt-12"
          action="/success"
          name="new-contact-form"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="new-contact-form" />
          <Input label="name" placeholder="Name" changeHandler={handleChange} />
          <Input
            label="subject"
            placeholder="IT Support Services"
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
          <TextArea changeHandler={handleChange} />
          <button
            type="submit"
            className="btn text-white bg-black w-64 lg:col-span-full mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

const Input = ({ label, type = "text", placeholder = "", changeHandler }) => {
  return (
    <div>
      <label htmlFor={label} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        className="block w-full px-4 py-4 rounded-md border-1 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-light sm:text-sm"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  )
}

const TextArea = ({ changeHandler }) => (
  <div className="w-full lg:col-span-full">
    <label htmlFor="message" className="sr-only">
      Message
    </label>
    <textarea
      className="block w-full rounded-md border p-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-light sm:text-sm"
      name="message"
      id="message"
      rows="5"
      placeholder="I'd like to talk to you about..."
      onChange={changeHandler}
    ></textarea>
  </div>
)

export default ContactForm
