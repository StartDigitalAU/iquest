import React from "react"
import { Script, ScriptStrategy } from "gatsby"

const SendmarcWidget = () => {
  return (
    <>
      <Script
        strategy={ScriptStrategy.postHydrate}
        id="sendmarc"
        dangerouslySetInnerHTML={{
          __html: `(function (w,d,s,o,f,js,fjs) {w['SendmarcWidget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);}(window, document, 'script', 'smConfig', 'https://madox.sendmarc.com/widget.js'));const params = new URLSearchParams(window.location.search);smConfig('c5f2f7d8-e151-4af0-9f24-9a56a30be6a8', {});`,
        }}
      />

      <form
        id="sendmarc-widget-form"
        className="container text-center flex flex-col gap-4 text-blue-darkest mx-auto max-w-4xl p-12 bg-white rounded-3xl relative z-50 mt-48 mb-24"
        noValidate
      >
        <h3>Enter your email to get a free domain security score</h3>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="form-control block w-full px-4 py-4 rounded-md border-1 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-light sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="btn text-white bg-black w-64 lg:col-span-full mx-auto"
        >
          Check Score
        </button>
      </form>
    </>
  )
}

export default SendmarcWidget
