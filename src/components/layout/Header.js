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
import MobileMenu from "../MobileMenu"

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
      <Popover className="relative z-50">
        {({ open }) => (
          <>
            <div className="container bg-transparent mx-auto backdrop-blur-md rounded-b-full">
              <div className="max-w-7xl mx-auto py-12 px-4 xl:px-0">
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
                    <Link to="/contact-us" className="btn text-white lowercase">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <MobileMenu open={open} menuItems={menuItems} />
          </>
        )}
      </Popover>
    </>
  )
}

export default Header
