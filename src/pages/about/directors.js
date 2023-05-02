import * as React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import InternalLayout from "../../components/layout/InternalLayout"
import { StaticImage } from "gatsby-plugin-image"

export default function Directors() {
  return (
    <>
      <GatsbySeo
        title="iQuest Directors are IT Experts in Perth with Rich Business IT Experience"
        description="As Perth's leading IT consulting company, our Directors are ready to deploy IT experts to our clients anytime and anywhere."
      />
      <InternalLayout
        title="Our Directors"
        description="We're Perth's leading IT consulting company, ready to deploy experts anytime and anywhere."
      >
        <div className="relative z-10 grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h2 data-animate className="mb-0">
              Anderson Chong
              <br />
              <span className="text-base text-blue-light">
                Managing Director
              </span>
            </h2>
            <p data-animate>
              Our partnerships with these companies are advantageous for our
              clients as it’s through our relationships that we can offer better
              pricing and service. Our close relationships with our partners
              also means we can build upon our knowledge and seek answers
              quickly on issues of hardware and software.
            </p>
            <p data-animate>
              By having these extremely experienced and influential companies
              providing us with resources we can provide a range of Technology
              Consulting activities to you, including Strategic IT planning,
              Application Software Development, and Business Analyst roles with
              highly experienced senior IT Consultants by your side. Through
              iQuest, we specialise in assisting small, medium and corporate
              businesses to get the most out of their IT systems.
            </p>
          </div>
          <div data-animate-right>
            <StaticImage
              className="w-full shadow-xl rounded-xl lg:w-auto"
              src="../../images/iQuest-Anderson.jpeg"
              alt="iQuest About Us Banner"
              placeholder="none"
            />
          </div>
        </div>
        <div className="relative z-10 grid gap-16 mt-20 lg:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h2 data-animate className="mb-0">
              Pietro Bertolini
              <br />
              <span className="text-base text-blue-light">General Manager</span>
            </h2>
            <p data-animate>
              As a Company Director at iQuest, Pietro oversees the Sales &
              Operations department. His primary focus is on building strong
              relationships with clients to leverage the technical and
              operational expertise of his team. Additionally, he leads
              strategic growth initiatives and provides a clear vision for
              maintaining a positive company culture.
            </p>
            <p data-animate>
              Pietro's exceptional interpersonal skills were honed during his
              time with a global sales company in the telecommunications
              industry. He was recognized for his outstanding sales record and
              received the company's Rising Star Award in 2003. Pietro's
              achievements did not end there. In 2005, he was appointed to a
              Technical Lead position while working in the UK. During this time,
              he managed teams of technicians for a large news agency chain's
              international rollout of updated EFTPOS and core systems, spanning
              across England, Scotland, Wales, Ireland, and the Czech Republic
              and involved over 100,000 people with budgets up to 100 million
              dollars.
            </p>

            <p data-animate>
              Pietro joined iQuest in 2008 and started in various technical
              roles, working his way up to become a Company Director in 2016.
            </p>
          </div>
          <StaticImage
            className="w-full shadow-xl rounded-xl lg:w-auto"
            src="../../images/iQuest-Pietro.jpg"
            alt="iQuest About Us Banner"
            placeholder="none"
          />
        </div>
        <div className="relative z-10 grid gap-16 mt-20 lg:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h2 data-animate className="mb-0">
              Mathew McCabe
              <br />
              <span className="text-base text-blue-light">
                Operations Manager
              </span>
            </h2>
            <p data-animate>
              Mathew started his career at iQuest in 2013 as a work experience
              student. From there he has had the chance to work in almost every
              facet at the company from the service desk, system administration
              and sales.  In 2020 he was give given the generous opportunity to
              step up as the Director of Operations and part business owner.
            </p>
             
            <p data-animate>
              As the Director of Operations at iQuest, Mathew brings his learned
              skills and experiences to the team and is responsible for managing
              and overseeing the company's daily operations to ensure efficiency
              and profitability. This is done through developing and
              implementing operational strategies, monitoring performance
              metrics, identifying areas for improvement, and leading process
              improvement initiatives. He works closely with other senior
              leaders to align operations with company goals and objectives and
              has a deep understanding of the company's products and services.
            </p>
          </div>
          <StaticImage
            className="w-full shadow-xl rounded-xl lg:w-auto"
            src="../../images/iQuest-Matthew.jpg"
            alt="iQuest About Us Banner"
            placeholder="none"
          />
        </div>
      </InternalLayout>
    </>
  )
}
