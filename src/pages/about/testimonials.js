import * as React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';
import InternalLayout from "../../components/layout/InternalLayout"
import Quote from "../../components/Quote"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "At Argonaut, we need to have confidence that the company has the technology infrastructure and support to maintain its business consistently and reliably. iQuest IT Support gives us that confidence…",
      company: "Argonaut",
      image: {
        src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Gorgi-Logo.png",
        alt: "Argonaut"
      }
    },
    {
      quote: "I have found iQuest team friendly, very knowledgeable , quick to respond and offer solutions that work for us. Since we have made the switch, we now have a reliable network and peace of mind…",
      company: "Subiaco Church of Christ",
      image: {
        src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Gorgi-Logo.png",
        alt: "Subiaco Church of Christ"
      }
    },
    {
      quote: "We cannot speak highly enough of the staff assigned to our implementation. Our new infrastructure more complex than our previous systems. We required careful assistance to ensure there were no issues when we went ‘live’. At every step, iQuest team were helpful, approachable, and knowledgeable. The ongoing excellent support is really something we sincerely appreciate and rely on.",
      company: "Fremantle Dockers",
      image: {
        src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Fremantle-Dockers-Logo.png",
        alt: "Fremantle Dockers"
      }
    },
    {
      quote: "We have been using iQuest IT Support to look after our 3 offices in Perth for more than 5 years now. They are a great partner to have, almost a natural extension to our business as iQuest takes an interest and the time to understand our business…",
      company: "Florace Pty Ltd",
      image: {
        src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Gorgi-Logo.png",
        alt: "Floraco Pty Ltd"
      }
    },
    {
      quote: "iQuest has been the most reliable, knowledgeable and consistent company I can ever remember working with in the IT sector",
      company: "Giorgi",
      image: {
        src: "https://dev.iquest.com.au/wp-content/uploads/2021/06/Gorgi-Logo.png",
        alt: "Giorgi"
      }
    }
  ];

  return (
    <>
      <PageTransition>
        <InternalLayout title="Our Testimonials">
          <h2>Hear from iQuest's partners and clients</h2>
          <div className="md:grid md:grid-cols-2 md:px-6 lg:px-8">
            {testimonials.map(({ quote, company, image }) => (
              <Quote quote={quote} company={company} image={image} />
            ))}
          </div>
        </InternalLayout>
      </PageTransition>
    </>
  )
}