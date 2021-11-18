import * as React from "react"
import { Helmet } from "react-helmet"
import InternalLayout from "../../components/layout/InternalLayout"
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {description: 'Saves you money on unnecessary hardware and software you would have otherwise needed to purchase' },
  {description: 'Virtual access to your files and emails remotely' },
  {description: 'Automatic Cloud upgrades for security and performance' },
  {description: 'Huge storing capacity for all types of files' },
  {description: 'The risk of data loss lies with your host' },
  {description: 'Security and peace of mind' },
]

function CloudServicesPerth() {

  return (
    <>
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet="utf-8" />
        <title>Cloud Services Perth | iQuest IT Services</title>
        <meta name="description" content="iQuest provides simple, effective IT support and consulting services that allow you to focus on your business." />
      </Helmet>
      <InternalLayout title="Cloud Services Perth" >
        <div className="flex flex-col space-y-20">
          <div className="grid lg:grid-cols-1 gap-6 items-center">
            <div>
              <h2 className="text-blue-light" data-animate>iQuest can offer your business the perfect Cloud Computing solutions with access from anywhere in the world.</h2>
              <p data-animate>Save on hardware costs and have remote access to your emails and files from anywhere in the world. Cloud Computing has been around for almost a decade and it works as a ‘virtual server’ to store your data without needing physical space.</p>
              <dl className="space-y-10 sm:space-y-0 mt-12 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative">
                        <dt>
                        <CheckIcon className="absolute h-6 w-6 text-blue-light" aria-hidden="true" />
                        </dt>
                        <p className="ml-9 text-base">{feature.description}</p>
                    </div>
                    ))}
                </dl>
            </div>

          </div>
          <div>
            <p data-animate>iQuest’s business helpdesk support is like having your very own IT helpdesk onsite. With only a phone call, you have access to our 24/7 helpdesk support for any difficulties or questions about your IT needs and arrangements. We are your own personal Helpdesk Support, especially here to support you and your business.</p>
            <p data-animate>The iQuest Operations Support centre also provides proactive 24 hours, 7 days a week monitoring of routers, firewalls, servers, desktops and any other equipment you might have on your business premises. With this kind of help, there is no need for in-house staff, you can simply call upon iQuest whenever the need arises.</p>
          </div>
        </div>
      </InternalLayout>
    </>
  )
}

export default CloudServicesPerth