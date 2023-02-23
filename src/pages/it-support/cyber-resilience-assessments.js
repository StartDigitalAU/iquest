import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import InternalLayout from "../../components/layout/InternalLayout"
import { Link } from "gatsby"

function CyberResilienceAssessments() {

  return (
    <>
      <GatsbySeo
        title="Cyber Resilience Assessments"
        description="Protect Your Business from Cyber Attacks."
      />
      <InternalLayout title="Cyber Resilience Assessments">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-blue-light mb-8" data-animate>Protect Your Business from Cyber Attacks.</h2>
            <p data-animate className="text-lg text-gray-300">
            At iQuest, we understand the importance of ensuring the cyber
            security of your business. With the increasing frequency of cyber
            attacks, it's more critical than ever to make sure you know your
            companies Cyber security posture from the outside in.
          </p>
          <p data-animate className="text-lg text-gray-300">
            Our goal is to help businesses like yours stay protected from cyber
            threats. Our sophisticated team have access to the most powerful and
            flexible toolset in the Cyber space. Whether you’re looking to
            mitigate your risk of a data breach, monitor third-party vendors, or
            understand your attack surface, we have you covered.
          </p>
          <p data-animate className="text-lg text-gray-300">
            If you are working towards an industry recognised standard for ISO
            27001, CPS 243 or the NIST Cybersecurity framework, we are here to
            help.
          </p>
          <p data-animate className="text-lg text-gray-300">
            Don’t wait around and let your business become the next headline,
            act today and secure your future with the right people in the right
            seat.
          </p>
          <p className="is-h2 mt-16">Contact us now before it's too late</p>
          <Link to={"/contact-us"} className="btn text-white mt-8">
            Contact us
          </Link>
          </div>
        </div>
      </InternalLayout>
    </>
  )
}

export default CyberResilienceAssessments
