import * as React from "react"
import { Helmet } from "react-helmet"
import InternalLayout from "../../components/layout/InternalLayout"
import Quote from "../../components/Quote"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "At Argonaut, we need to have confidence that the company has the technology infrastructure and support to maintain its business consistently and reliably. iQuest IT Support gives us that confidence…",
      company: "Argonaut",
    },
    {
      quote: "I have found iQuest team friendly, very knowledgeable , quick to respond and offer solutions that work for us. Since we have made the switch, we now have a reliable network and peace of mind…",
      company: "Subiaco Church of Christ",
    },
    {
      quote: "The team assigned to our implementation deserves the highest praise, as we cannot speak highly enough of their remarkable qualities. Our new infrastructure presents a greater level of complexity compared to our previous systems. Throughout the process, the iQuest team has proven to be a valuable asset, offering unwavering support, approachability, and extensive knowledge. We deeply appreciate and rely on the continuous excellence of their assistance.",
      company: "Fremantle Dockers",
    },
    {
      quote: "We have been using iQuest IT Support to look after our 3 offices in Perth for more than 5 years now. They are a great partner to have, almost a natural extension to our business as iQuest takes an interest and the time to understand our business…",
      company: "Florace Pty Ltd",
    },
    {
      quote: "As a client of iQuest, I am thoroughly impressed with the quality of their IT services. Their team is knowledgeable, responsive, and goes above and beyond to ensure our IT needs are met. I highly recommend iQuest for their exceptional services.",
      company: "Artrya",
    },
    {
      quote: "iQuest has been the most reliable, knowledgeable and consistent company I can ever remember working with in the IT sector",
      company: "Giorgi",
    }
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet="utf-8" />
        <title>Our Testimonials | IT Support Services Perth</title>
        <meta name="description" content="Hear from iQuest's partners and clients" />
      </Helmet>
      <InternalLayout title="Our Testimonials">
        <h2 data-animate>Hear from iQuest's partners and clients</h2>
        <div className="md:grid md:grid-cols-2 md:px-6 lg:px-8">
          {testimonials.map(({ quote, company, image }) => (
            <Quote quote={quote} company={company} image={image} />
          ))}
        </div>
      </InternalLayout>
    </>
  )
}