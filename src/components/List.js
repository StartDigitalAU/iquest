import React from 'react'
import IconLoader from './IconLoader'
import { CheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'

const List = ({ items, icon }) => {
    if (!items) return null

    const icons = {
        checkicon: CheckIcon,
        questionmarkcircleicon: QuestionMarkCircleIcon
    }

    return (
        <div data-animate-right className="mt-12 lg:mt-0">
            <dl className="space-y-4">
                {items.map((item) => (
                    <div key={item} className="relative">
                        <dt>
                            {icon && <IconLoader icon={icons[icon.toString().toLowerCase()]} classes="absolute h-6 w-6 text-blue-light" />}
                            <p className={`leading-6 text-md ${icon ? 'ml-9' : ''}`}>{item}</p>
                        </dt>
                    </div>
                ))}
            </dl>
        </div>
    )
}

export default List
