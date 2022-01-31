import React from "react"
import { Link } from "gatsby"
import logoLight from "/src/images/iquest-white-logo.png"
import logoDark from "/src/images/iQuest-Perth-Logo.png"
import menuJson from "../../../content/menu.json"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import MenuPopover from "../MenuPopover"
import IconLoader from "../IconLoader"
import Loader from "../Loader"
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline"

const Header = () => {
  const menuItems = menuJson.menuItems
  const icons = {
    bookmarkalticon: BookmarkAltIcon,
    calendaricon: CalendarIcon,
    chartbaricon: ChartBarIcon,
    cursorclickicon: CursorClickIcon,
    menuicon: MenuIcon,
    phoneicon: PhoneIcon,
    playicon: PlayIcon,
    supporticon: SupportIcon,
    viewgridicon: ViewGridIcon,
    xicon: XIcon,
  }

  return (
    <>
      <Loader />
      <Popover data-animate-down className="relative z-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto pt-12 px-4 xl:px-0">
              <div className="flex justify-between items-center md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to={"/"}>
                    <span className="sr-only">iQuest</span>
                    <img
                      className="h-8 w-auto sm:h-10 mb-2"
                      src={logoLight}
                      width="180"
                      height="45"
                      alt="iQuest Logo"
                    />
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="transparent btn-blue rounded-md p-2 inline-flex items-center justify-center text-white-400 hover:text-white-500 hover:bg-white-100">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group
                  as="nav"
                  className="hidden md:flex space-x-10 items-center"
                >
                  {menuItems.map(menuItem => {
                    const title = menuItem[0].title
                    return (
                      <MenuPopover
                        key={title}
                        title={title}
                        menu={menuItem[1]}
                      />
                    )
                  })}
                  <Link
                    to="/partnership"
                    className="text-base font-display lowercase font-medium text-white hover:text-white-900"
                  >
                    Partnership & Succession
                  </Link>
                  <Link
                    to="/case-studies"
                    className="text-base font-display lowercase font-medium text-white hover:text-white-900"
                  >
                    Case Studies
                  </Link>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end">
                  <Link
                    to="/contact-us"
                    className="btn btn-blue md:text-base font-display lowercase"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

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
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={logoDark}
                          alt="Workflow"
                        />
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
                              <div>
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
                        <Link
                          to="/contact-us"
                          className="btn btn-blue btn-small"
                        >
                          Contact Us
                        </Link>
                        <Link
                          to="/case-studies"
                          className="btn btn-white btn-small"
                        >
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
          </>
        )}
      </Popover>
    </>
  )
}

export default Header
