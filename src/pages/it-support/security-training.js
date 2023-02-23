import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import InternalLayout from "../../components/layout/InternalLayout"
import FourColumnGrid from "../../components/FourColumnGrid"
import List from "../../components/List"
import { Link } from "gatsby"

function SecurityTraining() {
  const items = [
    {
      name: "Baseline Testing",
      description:
        "We provide baseline testing to assess the Phish-Prone percentage of your team through a free simulated phishing attack.",
    },
    {
      name: "Train Your Users",
      description:
        "Access the world’s largest library of security awareness training content, including interactive modules, videos, games and posters.",
    },
    {
      name: "Phish Your Users",
      description:
        "Experience best-in-class, fully automated simulated phishing attacks with thousands of templates ready to use.",
    },
    {
      name: "See The Results",
      description:
        "See your ROI with enterprise-strength reporting, showing stats and graphs for both training and phishing.",
    },
  ]

  return (
    <>
      <GatsbySeo
        title="Cyber Security Training"
        description="Put Your Business To The Test."
      />
      <InternalLayout
        title="Cyber Security Training">
        <div className="lg:grid pb-16">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <h2 data-animate className="text-blue-light mb-8">
                Put Your Business To The Test.
              </h2>
              <h3 data-animate className="text-blue-light mb-6">
                Technology shouldn't distract you from running your business
              </h3>
              <p data-animate className="text-lg text-gray-300">
                Your employees are frequently exposed to sophisticated social
                engineering attacks. It is time for a comprehensive approach to
                effectively manage this problem, managed by people with a
                technical background.
              </p>
              <p data-animate className="text-lg text-gray-300">
                At iQuest, we have partnered with <i>KnowBe4</i>, a globally
                renowned platform to help us better assist you in managing this
                ongoing problem, whilst keeping your business protected from
                potential threats.
              </p>
            </div>
            <div className="flex flex-col">
              <p data-animate className="text-lg text-gray-300">
                <i>KnowBe4</i> is the world’s largest Cyber Security Awareness
                training platform. It combines real world simulated phishing
                attacks, which allows us to assess your Phish-Prone percentage to
                ultimately deliver a robust and relevant training program. With
                over 6.6 million users world wide, and a database of engaging
                content thats ever growing, there has never been a better way to
                empower your team with they need in this ever evolving landscape.
              </p>
            </div>
          </div>
        </div>
        <FourColumnGrid title="Our Process" items={items} />
        <p className="is-h2 mt-16">Enquire about Cyber Security Training</p>
        <Link to={"/contact-us"} className="btn text-white mt-8">
          Contact us
        </Link>
      </InternalLayout>
    </>
  )
}

export default SecurityTraining
