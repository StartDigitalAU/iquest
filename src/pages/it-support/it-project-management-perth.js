import * as React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';
import InternalLayout from "../../components/layout/InternalLayout"
import { StaticImage } from "gatsby-plugin-image"

function ITProjectManagementPerth() {

  return (
    <>
      <PageTransition>
        <InternalLayout title="Project Management">
          <div className="flex flex-col space-y-6">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2>iQuest's IT support Perth network & IT engineers are highly experienced with Project Management.</h2>
                <p>The challenging nature of IT project management can be exemplified by the high failure rate reported by The Standish Group. According to an extensive survey undertaken, only 32% of IT projects undertaken are deemed to be a success. This type of failure rate demonstrates the value of specialised project management skills to keep technology projects on track and, ultimately, ensure they’re successful.</p>
                <p>The iQuest Project Management team combine local industry experience and clear management methodologies with strategies that ensure your project is delivered on time and on budget. From upgrading a desktop fleet and the installation of new servers, through to complex network setup and VOIP telephony services, our team has the capability and experience to help your organisation with all your IT needs.</p>
              </div>
              <StaticImage
                className="w-full h-full rounded-xl shadow-md"
                src="../../images/iQuest-IT-Project-Management.jpeg"
                alt="Two men looking at a their work on a computer screen"
                placeholder="blurred"
              />
            </div>
            <div>
              <p>We also extend our services by assisting you to match your existing software with the required upgrades. Whether your organisation requires Microsoft’s Dynamics CRM or Microsoft SharePoint, our extensive network of vendors will help us find the right solution that aligns with your requirements.</p>
              <p>So why not engage iQuest for your next project to ensure you’re getting the right IT solutions for your business? You’ll be glad you made the right choice!</p>
            </div>
          </div>
        </InternalLayout>
      </PageTransition>
    </>
  )
}

export default ITProjectManagementPerth