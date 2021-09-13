import React from 'react'
import { Link } from 'gatsby'
import { OfficeBuildingIcon, UserGroupIcon } from '@heroicons/react/solid'

const CaseStudy = ({ caseStudy }) => {
    const data = caseStudy.node.frontmatter
    return (
        <div className="flex flex-col bg-gray-50 shadow-md rounded-md">
            <img className="w-full rounded-t-md" src={`/${data.featuredImage}`} alt="" />
            <div className="p-4 flex flex-col space-y-3">
                <div className="flex items-center space-x-1">
                    <span className="text-xl font-bold">{data.client}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <OfficeBuildingIcon className="w-4 text-gray-500" />
                        <span className="text-sm uppercase tracking-wide font-bold">{data.industry}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <UserGroupIcon className="w-4 text-gray-500" />
                        <span className="text-sm uppercase tracking-wide font-bold">{data.numberOfEmployees}</span>
                    </div>
                </div>
            </div>
            <Link to={`/case-studies${data.path}`} className="m-4 btn btn-small btn-blue">View Case Study</Link>
        </div>
    )
}

export default CaseStudy
