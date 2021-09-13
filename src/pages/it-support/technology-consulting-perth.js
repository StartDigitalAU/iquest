import * as React from "react"
import InternalLayout from "../../components/layout/InternalLayout"
import PageTransition from 'gatsby-plugin-page-transitions';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function TechnologyConsultingPerth() {
  return (
    <>
      <PageTransition>
        <InternalLayout title="Technology Consulting" description="A range of highly experienced IT consultants only a phone call away.">
          <div className="flex flex-col space-y-16">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2>A range of highly experienced IT consultants only a phone call away.</h2>
                <p>iQuest specialises in assisting small, medium and corporate businesses to get the most out of their IT systems. With access to our skilled staff, you will get the best advice and expertise you need in today’s technology market without the overheads or burden of employing full time IT staff to your payroll</p>
                <p>This has to be beneficial to you in so many ways. In fact, you’re only paying for a service you need, when you need it, rather then paying for a full time employee. Makes sense, doesn’t it?</p>
                <p>At iQuest, our Technology Consulting services go beyond IT Consulting. We conduct regular monitoring of all our proposed plans and solutions to ensure project efficiency and security. Our final assessment includes recommendations and updates on the latest technology relevant to your industry.</p>
                <Link to="/contact-us" class="btn btn-blue mt-6">Get Support</Link>
              </div>
              <StaticImage
                className="w-full h-full rounded-xl shadow-md"
                src="../../images/iQuest-Technology-Consulting.jpeg"
                alt="Two men looking at a their work on a computer screen"
                placeholder="blurred"
              />
            </div>
          </div>
        </InternalLayout>
      </PageTransition>
    </>
  )
}

export default TechnologyConsultingPerth