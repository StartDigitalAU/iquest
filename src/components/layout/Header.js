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
      <Popover className="fixed top-0 left-0 w-full z-50">
        {({ open }) => (
          <>
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg mx-auto rounded-b-[35px] xl:rounded-b-[75px]">
            <div className="container mx-auto">
              <div className="mx-auto py-6 xl:py-10">
                <div className="flex justify-between items-center xl:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to={"/"}>
                      <span className="sr-only">iQuest</span>
                      <img
                        className="h-8 w-full sm:h-10 mb-2"
                        src={logoLight}
                        width="180"
                        height="45"
                        alt="iQuest Logo"
                      />
                    </Link>
                  </div>
                  <div className="-mr-2 xl:hidden mt-0 mb-2">
                    <Popover.Button className="transparent btn-blue rounded-md p-2 inline-flex items-center justify-center text-white-400 hover:text-white-500 hover:bg-white-100">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group
                    as="nav"
                    className="hidden xl:flex space-x-10 items-center"
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
                  <div className="hidden xl:flex items-center justify-end">
                    <Link to="/contact-us" className="btn text-white lowercase">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <MobileMenu open={open} menuItems={menuItems} />
            </div>
          </>
        )}
      </Popover>
    </>
  )
}

export default Header
