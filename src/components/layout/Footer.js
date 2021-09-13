import * as React from "react"
import logoLight from "/src/images/iquest-white-logo.png"

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  about: [
    { name: 'About Us', href: '#' },
    { name: 'Our Partners', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Directors', href: '#' },
  ],
  ITsupport: [
    { name: 'IT Support Services Perth', href: '#' },
    { name: 'Business Helpdesk Support', href: '#' },
    { name: 'Technology Consulting', href: '#' },
    { name: 'Project Management', href: '#' },
  ],
  company: [
    { name: 'Case Studies', href: '#' },
    { name: 'Cloud Services', href: '#' },
    { name: 'Office 365', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/iQuestConsulting/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/company/iquest-consulting-pty-ltd/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img src={logoLight} width="180" height="45" alt="iQuest Logo" />
            <p className="text-white text-base leading-relaxed max-w-md">
              iQuest provide a complete suite of IT support services that allow you to focus on what's important - your business.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white">Our Services</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.ITsupport.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-white hover:text-gray-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0 md:ml-10">
                <h3 className="text-lg font-semibold text-white">About</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-white hover:text-gray-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-semibold text-white">More</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-white hover:text-gray-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-white xl:text-center">&copy; 2021 iQuest, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}