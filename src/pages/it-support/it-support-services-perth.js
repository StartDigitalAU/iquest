import * as React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';
import InternalLayout from "../../components/layout/InternalLayout"
import TwoColumnGrid from "../../components/TwoColumnGrid"
import List from "../../components/List"

function ITSupportServicesPerth() {
  const reasons = [
    'Support by a team of 20+ ICT Specialists (ICT = information and communications technology)',
    'A dedicated Technical Account Manager',
    'Unlimited IT support during business hours – 6:30am to 6.30pm (Monday-Friday) Western Standard Time',
    'After hours call out available',
    'Fully Managed IT Support Services',
    '24/7 monitoring on critical devices such as servers',
    'Onsite service technicians',
    'Proactive resolution of any issues that may arise',
    'General consultation included in your contract',
    'Fixed monthly contracts for your convenience'
  ]

  const items = [
    {
      name: 'Reduce Technology Costs',
      description:
        'The issues created by IT disruptions take your team away from their job, reducing productivity and affecting performance and morale. iQuests managed IT service significantly reduces the cost of your network, hardware and software. Contact us today to arrange a cost analysis.',
    },
    {
      name: 'Security focused',
      description:
        'iQuests managed IT service monitors your network at all times. From general errors and speed issues through to attacks from hackers, we’re able to track and prevent issues before they become an issue. Our service ensures your valuable data and all software are protected and ready to use at all times.',
    },
    {
      name: 'Improve Performance',
      description:
        'IT Services need to do more than react fast to issues. At iQuest we expect technology to improve a businesses performance. iQuests IT services help Perth businesses drive greater performance to achieve success that is both sustainable and cost effective.',
    },
    {
      name: 'Future proof your business',
      description:
        'Our team are passionate about new technology and stay abreast of the very latest equipment, software and broader tech trends. Our managed IT service ensures your systems not only meet your immediate business needs but that they provide the flexibility required to adapt with future business goals and directions.',
    },
  ]

  return (
    <>
      <PageTransition>
        <InternalLayout title="IT Support Services" description="Providing fully managed IT support services in Perth & Melbourne.">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 pb-16">
            <div>
              <h2 className="text-indigo-600">Technology shouldn't distract you from running your business</h2>
              <p className="text-lg">
                iQuest IT Support Perth ‘ provide fully managed IT Support Services and we take pride in being the offsite IT department for some of Perth’s most recognised businesses. Our mission is to remove issues before they occur, ensuring that our clients maximize their productivity. Our approach to IT support is customer focused and unique to Western Australia. By focusing on each of our clients needs we’re able to align technology with the overall goals of the business, in turn, improving productivity and reducing risk.
              </p>
            </div>
            <List items={reasons} icon="CheckIcon" />
          </div>
          <TwoColumnGrid title="Why use iQuest?" items={items} />
        </InternalLayout>
      </PageTransition>
    </>
  )
}

export default ITSupportServicesPerth