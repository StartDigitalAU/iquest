import * as React from "react"
import clientLogo from "/src/images/Fremantle-Dockers-Client-Logo.png"

/* This example requires Tailwind CSS v2.0+ */
export default function Testimonials() {
  return (
    <section className="py-12  overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img
            className="mx-auto"
            src={clientLogo}
            width="250"
            alt="Fremantle Dockers Logo"
          />
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-xl leading-9 font-medium text-white">
              <p>
                &ldquo;We cannot speak highly enough of the staff assigned to our implementation. Our new infrastructure more complex than our previous systems. The iQuest team were helpful, approachable, and knowledgeable. The ongoing excellent support is really something we sincerely appreciate and rely on.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-white">Minh Tran</div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-400">IT Manager, Fremantle Dockers</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
