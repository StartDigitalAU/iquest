import React, { Fragment } from 'react'
import { Link } from "gatsby"
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import IconLoader from './IconLoader'
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
    WifiIcon,
    DocumentTextIcon,
    ChatIcon
} from '@heroicons/react/outline'

const MenuPopover = ({ title, menu }) => {
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
        wifiicon: WifiIcon,
        documenttexticon: DocumentTextIcon,
        chaticon: ChatIcon
    }

    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button className='group transparent rounded-md inline-flex items-center text-base font-medium text-white'>
                        <span>{title}</span>
                        <ChevronDownIcon
                            className='ml-2 h-5 w-5 text-white'
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel static className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {menu.map((item) => {
                                        const Icon = item.icon.toString().toLowerCase()
                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            >
                                                <IconLoader icon={icons[Icon]} classes={"flex-shrink-0 h-6 w-6 text-indigo-600"} />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default MenuPopover
