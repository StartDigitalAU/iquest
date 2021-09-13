import * as React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';
import InternalLayout from "../../components/layout/InternalLayout"
import List from "../../components/List"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function HardwareSoftwareProcurement() {
  const questions = [
    'What operating system ',
    'What network type',
    'Is the new hardware compatible with the existing infrastructure ',
    'How well will the system work five years from now ',
    'What software solution ',
    'Will the system need to manage company growth ',
    'How will software updates be rolled out ',
    'What do you need your IT systems to achieve'
  ]

  return (
    <>
      <PageTransition>
        <InternalLayout title="Hardware & Software Procurement" >
          <div className="flex flex-col space-y-16">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2>iQuest can assist you with hardware & software procurement.</h2>
                <p>Though IT systems run in the background, they are critical to everyday business operations, especially in securing your data and making sure that you connect with your customers all over the world. From network, workstation and server hardware, there are so many leading brands claiming to provide the best solution, but how will you know which one’s the best for your business?</p>
                <p>At iQuest we’ve done the research for you. Speed, performance, reliability and security are our main criteria in narrowing down the best hardware and software applicable to different businesses and industries. With this in mind, we have partnered with some of the key providers of hardware and software worldwide, aligning us with the very best of what the IT industry offers. We are, therefore, well placed to assist you with your Hardware and Software Procurement.</p>
              </div>
              <StaticImage
                className="w-full rounded-xl shadow-md"
                src="../../images/iQuest-Hardware-Software.jpeg"
                alt="Two men looking at a their work on a computer screen"
                placeholder="blurred"
              />
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 pb-16">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-indigo-600">There is a lot to think about when implementing a new IT System:</h3>
                <List items={questions} icon="QuestionMarkCircleIcon" />
                <Link to="/contact-us" className="btn btn-blue mt-6">Get Support</Link>
              </div>
              <div>
                <p>
                  iQuest has partnered with global IT suppliers and system manufacturers such as Dell, HP, IBM and Microsoft, among many others. Not only do we have the experience and capability to deliver these systems and software solutions to Perth businesses but the iQuest team provides holistic IT support services that are tailored to each one of our client’s needs and requirements. Additionally, our relationships provide the opportunity to pass on software licensing, hardware and IT infrastructure at the best possible prices.
                </p>
              </div>
            </div>
          </div>
        </InternalLayout>
      </PageTransition>
    </>
  )
}

export default HardwareSoftwareProcurement