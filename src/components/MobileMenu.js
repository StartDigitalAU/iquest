import React from "react"
import { Link } from "gatsby"
import logoDark from "/src/images/iQuest-Perth-Logo.png"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"

const MobileMenu = ({ open, menuItems }) => {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        static
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right xl:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src={logoDark} alt="Workflow" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-6 text-blue-darker">
                {menuItems.map(item => {
                  const subMenuItems = item[1]
                  return (
                    <details key={item[0].title}>
                      <summary>{item[0].title}</summary>
                      <div className="max-h-[215px] overflow-y-scroll bg-gray-200 mt-3 rounded-xl">
                        {subMenuItems.map(subItem => {
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="p-3 flex items-center rounded-md hover:bg-gray-50"
                            >
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {subItem.name}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </details>
                  )
                })}
              </nav>
            </div>
            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/contact-us" className="btn btn-white btn-small">
                  Contact Us
                </Link>
                <Link to="/case-studies" className="btn btn-white btn-small">
                  Case Studies
                </Link>
              </div>
              <Link
                to="/partnership"
                className="btn btn-white btn-small w-full"
              >
                Partnership & Succession
              </Link>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default MobileMenu
