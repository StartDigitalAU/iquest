import React from 'react'
import { Link } from 'gatsby'
import { OfficeBuildingIcon, UserGroupIcon } from '@heroicons/react/solid'

const CaseStudy = ({ caseStudy }) => {
    const data = caseStudy.node.frontmatter
    return (
        <div data-animate className="flex flex-col rounded-md">
            <img className="w-full h-60 max-h-60 object-cover object-bottom rounded-t-md" src={`/${data.featuredImage}`} alt="" />
            <div className="py-8 px-6 flex flex-col space-y-4 bg-blue-darkest">
                <div className="flex items-center space-x-1">
                    <span className="text-xl font-bold">{data.client}</span>
                </div>
                <div className="flex items-center space-x-4 rounded-b-md">
                    <div className="flex items-center space-x-1">
                        <OfficeBuildingIcon className="w-4 text-gray-500" />
                        <span className="text-sm uppercase tracking-wide font-bold">{data.industry}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <UserGroupIcon className="w-4 text-gray-500" />
                        <span className="text-sm uppercase tracking-wide font-bold">{data.numberOfEmployees}</span>
                    </div>
                </div>
                <Link to={`/case-studies${data.path}`} className="mt-22 btn btn-small btn-blue">View Case Study</Link>
            </div>
        </div>
    )
}

export default CaseStudy
