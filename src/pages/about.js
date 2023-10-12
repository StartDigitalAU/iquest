import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import InternalLayout from "../components/layout/InternalLayout"
import { Link } from "gatsby";
import ClientLogos from "../components/ClientLogos"
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  return (
    <>
      <GatsbySeo
        title="iQuest is Perth's Leading IT Consulting Company With A Range Of Services"
        description="iQuest is a dynamic and progressive company with a clear objective of helping businesses access content anywhere through local IT services!"
      />
      <InternalLayout title="About iQuest" description="We're Perth's leading IT consulting company, ready to deploy experts anytime & anywhere.">
        <h2 className="max-w-4xl text-blue-light">iQuest are a dynamic and progressive company founded with a clear objective</h2>
        <h3 className="is-h4">Local IT Services helping you access your content anywhere!</h3>
        <p>
          Our goal is to provide our West Australian clients with the most effective technology support and solutions for their business. We strive to be innovative and cost-effective across all areas of our work, from network installations and software deployment through to helpdesk support and cloud technology, iQuest are the leaders in Perth IT support and technology systems.
        </p>
        <p>
          iQuest may be a technology company, but at the very core we provide exceptional good old-fashioned service. In a highly competitive market, we are able to distinguish ourselves by offering a personal, tailored service that delivers the very best IT solutions for each and every one of our clients. iQuest was created not only to provide professional IT services to Perth and West Australian businesses but to educate our clients on how technology can run and support businesses. Our success is measured by a high customer satisfaction rate and determined by the commitment and competence of our team of IT Engineers.
        </p>
        <ClientLogos classes="py-10 md:py-20 my-8 md:my-16" />
        <h2 className="mb-0 text-blue-light">The iQuest Team</h2>
        <p className="text-xl font-bold">A message from the directors</p>
        <p>
          In this fast paced world where everything beeps, blinks and connects, Information Technology (IT) is one of those industries which every single business relies so heavily upon yet, most people don’t understand it. It is the way we connect, operate, and build systems. The ‘ignorance is bliss’ approach can be tempting until systems break down and you are at risk of losing everything. Is this something you have experienced in the past? We come across so many who have.
        </p>
        <p>
          We give you the right solutions because your business needs them, not because it’s a ‘one size fits all’ template. And we look at each individual business to create solutions that are right for you. I can say, along with the other Directors, that we are so proud of the business iQuest has become in this day. Likewise we are also proud of the fantastic team of experienced and passionate IT professionals who work hard with us at providing exceptional service. We hope you will give us the opportunity to work with you too.
        </p>
        <p className="font-bold">- Anderson Chong, Managing Director</p>
        <div className="relative py-12">
          <span className="absolute inset-0 -mt-12 md:-mt-0 z-10 flex items-center justify-center font-display text-2xl text-white px-16 text-center">Our reason for ‘being’ is simple. <br />We strive to create exceptional trust with whomever we encounter.</span>
          <StaticImage
            src="../../src/images/holographic-bg.png"
            alt="A holographic image for decorative purposes"
            placeholder="none"
            width={1200}
            className="rounded-xl drop-shadow-lg h-screen max-h-56"
          />
        </div>
        <p>We give you the right solutions because your business needs them, not because it’s a ‘one size fits all’ template. And we look at each individual business to create solutions that are right for you.</p>
        <p>I can say, along with the other Directors, that we are so proud of the business iQuest has become in this day. Likewise we are also proud of the fantastic team of experienced and passionate IT professionals who work hard with us at providing exceptional service.  We hope you will give us the opportunity to work with you too.</p>
        <Link className="btn btn-blue mt-12" to="/contact-us">Get In Touch</Link>
      </InternalLayout>
    </>
  )
}