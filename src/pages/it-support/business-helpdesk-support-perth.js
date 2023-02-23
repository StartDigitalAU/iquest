import * as React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import InternalLayout from "../../components/layout/InternalLayout"
import { StaticImage } from "gatsby-plugin-image"

function BusinessHelpdeskSupportPerth() {

  return (
    <>
      <GatsbySeo
        title="Business Helpdesk Support Services in Perth From Expert IT Personnel"
        description="Our resourceful technical experts in Perth provide helpdesk support and other business IT support services for most industries."
      />
      <InternalLayout title="Business Helpdesk Support" >
        <div className="flex flex-col">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-blue-light" data-animate>We have a team of resourceful technical support experts in Perth providing helpdesk support.</h2>
              <p data-animate>The iQuest team consists of highly experienced IT support engineers, armed with the latest help desk ticketing systems, remote support consulting tools and diagnostic software. We provide first level through to third level desktop, server and application assistance for all your business IT needs.</p>
            </div>
            <div data-animate-right>
              <StaticImage
                className="w-full rounded-xl shadow-md"
                src="../../images/iQuest-Helpdesk-Support.jpeg"
                alt="Two men looking at a their work on a computer screen"
                placeholder="none"
              />
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

export default BusinessHelpdeskSupportPerth