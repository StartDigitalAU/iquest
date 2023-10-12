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
              After spending 14 successful years in the banking industry across
              Singapore and Australia, I took a leap of faith in 2004 and
              founded iQuest, an information technology (IT) company dedicated
              to providing scalable and flexible outsourcing solutions. My
              vision was to support businesses of all sizes and industries, both
              locally and internationally, with innovative IT services. Today,
              iQuest stands as a testament to my commitment to fostering
              collaborative partnerships and recognition for its ability to
              provide scalable services that fueled clients' growth.
            </p>
            <p data-animate>
              In 2018, iQuest underwent a transformative shift to a
              management-operated model. By involving two trusted business
              partners and assembling a dedicated team, I aimed to solidify
              client relationships, explore new business opportunities, and
              pursue personal and professional growth. This transition served as
              a major milestone in iQuest's journey, positioning the company for
              even greater achievements.
            </p>
            <p data-animate>
              In addition to my role as an entrepreneur and business leader, I
              am deeply committed to mentoring and advising others. Leveraging
              my extensive experience and broad expertise, I eagerly share
              insights and guidance with companies within and beyond the Journey
              Together Partners Network (JPTN). Through this dedication, I aim
              to foster collaboration and build a vibrant business community.
            </p>
          </div>
          <div data-animate-right>
            <StaticImage
              className="w-full shadow-xl rounded-xl lg:w-auto aspect-1"
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
            className="w-full shadow-xl rounded-xl lg:w-auto aspect-1"
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
            className="w-full shadow-xl rounded-xl lg:w-auto aspect-1"
            src="../../images/iQuest-Matthew.jpg"
            alt="iQuest About Us Banner"
            placeholder="none"
          />
        </div>
      </InternalLayout>
    </>
  )
}
