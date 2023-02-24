import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import InternalLayout from "../../components/layout/InternalLayout"
import TwoColumnGrid from "../../components/TwoColumnGrid"

function EmergencyDetectionResponse() {
  const items = [
    {
      name: "Recognise threats before they happen",
      description:
        "With a real-time view of your security standpoint, we’ll ensure your risk profile is proactively managed in order to prevent and resolve threats.",
    },
    {
      name: "Protect Your Customers Data",
      description:
        "Ensure you’re maintaining trust and respect with your client-base by protecting their data to the best of your ability.",
    },
    {
      name: "Reduced Risk of Breach",
      description:
        "A security breach can be detrimental for a business not only financially but on a reputational basis.",
    },
    {
      name: "Use The Tools That Are Right For You",
      description:
        "Our Perth IT team will ensure you’re recommended tools that are perfectly suited to your business. This ensures you’re using your tools to their full potential.",
    },
    {
      name: "Reduced Insurance Premiums",
      description:
        "Implementing a SOC demonstrates to insurance providers that your business has taken steps to minimise potential risks, which can result in lower insurance premiums.",
    },
  ]

  return (
    <>
      <GatsbySeo
        title="Emergency/Endpoint Detection & Response"
        description="Rely On Perth’s Leading IT team."
      />
      <InternalLayout title="Emergency/Endpoint Detection & Response">
        <div className="flex flex-col gap-20">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <h2 data-animate className="text-blue-light mb-8">
                Rely On Perth’s Leading IT team.
              </h2>
              <p data-animate className="text-lg text-gray-300">
                iQuest IT Support Perth ‘ provide fully managed IT Support
                Services and we take pride in being the offsite IT department
                for some of Perth’s most recognised businesses. Our mission is
                to remove issues before they occur, ensuring that our clients
                maximize their productivity. Our approach to IT support is
                customer focused and unique to Western Australia. By focusing on
                each of our clients needs we’re able to align technology with
                the overall goals of the business, in turn, improving
                productivity and reducing risk.
              </p>
              <p data-animate className="text-lg text-gray-300">
                That’s why at iQuest, we’re firm believers in thorough EDR as a
                means of monitoring your attack surface, preventing data
                breaches and discovering leaked credentials before it’s too
                late.
              </p>
              <p data-animate className="text-lg text-gray-300">
                Through continuous monitoring and surveillance, our Perth IT
                specialists have the ability to discover vulnerabilities within
                your entire organisation's IP footprint in order to take action
                before a breach occurs.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-blue-light mb-8">
                Security Operating Centre (SOC)
              </h2>
              <h3 className="mb-4">Trust Your Cybersecurity to iQuest</h3>
              <div>
                <p data-animate className="text-lg text-gray-300">
                  While many business owners have the perception that an SOC is
                  unattainable and unaffordable for their business, we’d urge
                  you to consider the cost associated with a breach, the loss of
                  data or a loss of brand reputation. Trust in iQuest’s Perth IT
                  professionals to ensure you’re utilising the right tools for
                  your business.
                </p>
                <p data-animate className="text-lg text-gray-300">
                  Our SOC not only has the ability to identify threats, but also
                  to analyse them, investigate the source, mitigate
                  zero-day-vulnerabilities and craft a roadmap to reduce risk.
                  Utilising world-class cybersecurity platforms, you can rely on
                  iQuest to proactively identify where you’re at risk and assist
                  you in navigating the world of cyber-security.
                </p>
              </div>
            </div>
          </div>
          <TwoColumnGrid title="Benefits of an SOC" items={items} />
        </div>
      </InternalLayout>
    </>
  )
}

export default EmergencyDetectionResponse
