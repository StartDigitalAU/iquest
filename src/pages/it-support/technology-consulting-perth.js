import * as React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import InternalLayout from "../../components/layout/InternalLayout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function TechnologyConsultingPerth() {
  return (
    <>
      <GatsbySeo
        title="Providing Expert Technology Consulting Services in Perth and Melbourne"
        description="iQuest specialises in assisting small, medium and corporate businesses to succeed by providing expert Technology Consulting services."
      />
      <InternalLayout title="Technology Consulting" description="A range of highly experienced IT consultants only a phone call away.">
        <div className="flex flex-col space-y-16">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-blue-light" data-animate>A range of highly experienced IT consultants only a phone call away.</h2>
              <p data-animate>iQuest specialises in assisting small, medium and corporate businesses to get the most out of their IT systems. With access to our skilled staff, you will get the best advice and expertise you need in today’s technology market without the overheads or burden of employing full time IT staff to your payroll</p>
              <p data-animate>This has to be beneficial to you in so many ways. In fact, you’re only paying for a service you need, when you need it, rather then paying for a full time employee. Makes sense, doesn’t it?</p>
              <p data-animate>At iQuest, our Technology Consulting services go beyond IT Consulting. We conduct regular monitoring of all our proposed plans and solutions to ensure project efficiency and security. Our final assessment includes recommendations and updates on the latest technology relevant to your industry.</p>
              <Link data-animate to="/contact-us" class="btn btn-blue mt-6">Get Support</Link>
            </div>
            <div data-animate-right className="h-full">
              <StaticImage
                className="w-full h-full rounded-xl shadow-md"
                src="../../images/iQuest-Technology-Consulting.jpeg"
                alt="Two men looking at a their work on a computer screen"
                placeholder="none"
              />
            </div>
          </div>
        </div>
      </InternalLayout>
    </>
  )
}

export default TechnologyConsultingPerth