import React from "react"
import InternalLayout from "./InternalLayout"
import { ChevronRightIcon } from '@heroicons/react/outline'

const CaseStudiesLayout = ({ pageContext }) => {
    const frontMatter = pageContext.frontmatter
    return (
        <InternalLayout title={frontMatter.client}>
            <div className="px-4 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div>
                    <h2>{frontMatter.client} Executive Summary</h2>
                    <em className="text-gray-600">"{frontMatter.testimonial}"</em>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                        <div className="flex flex-col space-y-10">
                            {frontMatter.industry && <SummaryPoint title="Industry" value={frontMatter.industry} />}
                            {frontMatter.numberOfEmployees && <SummaryPoint title="Number of Employees" value={frontMatter.numberOfEmployees} />}
                            {frontMatter.numberOfSites && <SummaryPoint title="Number of Sites" value={frontMatter.numberOfSites} />}
                        </div>
                        {frontMatter.requirements && <SummaryPoint title="Requirements" value={frontMatter.requirements} />}
                        {frontMatter.solutions && <SummaryPoint title="Solutions" value={frontMatter.solutions} />}
                        {frontMatter.results && <SummaryPoint title="Results" value={frontMatter.results} />}
                    </dl>
                </div>
            </div>
            {frontMatter.content && <p className="text-gray-600 mt-6">{frontMatter.content}</p>}
        </InternalLayout>
    )
}

const SummaryPoint = ({ title, value }) => {
    const isList = Array.isArray(value)

    return (
        <div className="relative">
            <dt>
                <ChevronRightIcon className="absolute h-6 w-6 text-blue-light" aria-hidden="true" />
                {title && <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{title}</p>}
            </dt>
            {value && !isList && <dd className="mt-2 ml-9 text-base text-gray-500">{value}</dd>}
            {value && isList &&
                <ul className="mt-2 ml-9 text-base text-gray-500">
                    {value.map(item => (
                        <li className="list-disc" key={item}>{item}</li>
                    ))}
                </ul>}
        </div>
    )
}

export default CaseStudiesLayout