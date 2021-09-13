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
        <div className="mt-12 lg:mt-0">
            <dl className="space-y-4">
                {items.map((item) => (
                    <div key={item} className="relative">
                        <dt>
                            {icon && <IconLoader icon={icons[icon.toString().toLowerCase()]} classes="absolute h-6 w-6 text-green-500" />}
                            <p className={`leading-6 font-medium ${icon ? 'ml-9' : ''}`}>{item}</p>
                        </dt>
                    </div>
                ))}
            </dl>
        </div>
    )
}

export default List
