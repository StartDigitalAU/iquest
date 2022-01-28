import * as React from "react"
import { Helmet } from "react-helmet"
import InternalLayout from "../../components/layout/InternalLayout"
import { StaticImage } from "gatsby-plugin-image";

export default function Directors() {
  return (
    <>
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet="utf-8" />
        <title>Our Directors | IT Support Services Perth</title>
        <meta name="description" content="Delivering exceptional corporate IT support to Perth and WA since 1999. iQuest provide IT support Perth services allowing you to focus on your business." />
      </Helmet>
      <InternalLayout title="Our Directors" description="We're Perth's leading IT consulting company, ready to deploy experts anytime & anywhere.">
        <div className="relative z-10 grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col space-y-6">
            <h2 data-animate className="mb-0">
              Anderson Chong<br />
              <span className="text-base text-blue-light">Managing Director</span>
            </h2>
            <p data-animate>
              Our partnerships with these companies are advantageous for our clients as it’s through our relationships that we can offer better pricing and service. Our close relationships with our partners also means we can build upon our knowledge and seek answers quickly on issues of hardware and software.
            </p>
            <p data-animate>
              By having these extremely experienced and influential companies providing us with resources we can provide a range of Technology Consulting activities to you, including Strategic IT planning, Application Software Development, and Business Analyst roles with highly experienced senior IT Consultants by your side. Through iQuest, we specialise in assisting small, medium and corporate businesses to get the most out of their IT systems.
            </p>
          </div>
          <div data-animate-right>
            <StaticImage
              className="w-full rounded-xl shadow-xl lg:w-auto"
              src="../../images/iQuest-Anderson.jpeg"
              alt="iQuest About Us Banner"
              placeholder="none"/>
          </div>
        </div>
        <div className="relative z-10 mt-20 grid lg:grid-cols-1 gap-16">
          <div className="flex flex-col space-y-6">
            <h2 data-animate className="mb-0">
            Vincent Chia<br />
              <span className="text-base text-blue-light">Director Finance & Administration</span>
            </h2>
            <p data-animate>
            In a career spanning over 30 years, Vincent’s CV is head-spinning! It’s this kind of diversity which has seen Vincent develop the financial knowledge and experience to help iQuest’s clients grow and develop their businesses. As a Director with iQuest for the past 4 years, Vincent oversees iQuest’s operational, strategic and financial management with a focus on devising business development plans for future growth of the organisation.
            </p>
            <p data-animate>
            Vincent has been pivotal in streamlining company processes. He is also responsible for all strategic financial activities including business planning, forecasting and analysis, management systems and statutory compliance as well as contributing to business development. Vincent was integral in establishing a new, responsive finance system to support the operational business. Along with Anderson and Pietro, Vincent continues to play a major role developing iQuest’s strong company culture.
            </p>
            <p data-animate>
            Like Anderson, Vincent’s career was forged in the Banking Sector where he gained strong and extensive international experience in senior finance roles. Vincent participated in several projects involving due diligence works and restructuring of banks in Indonesia, South Korea and Uzbekistan during the Asia financial crisis. These projects were mainly involved in implementing best practices in the banks according to the requirements of International Monetary Fund.
            </p>
          </div> 
        </div>
        <div className="relative z-10 mt-20 grid lg:grid-cols-1 gap-16">
          <div className="flex flex-col space-y-6">
            <h2 data-animate className="mb-0">
            Pietro Bertolini<br />
              <span className="text-base text-blue-light">General Manager</span>
            </h2>
            <p data-animate>
            As Director of Sales & Operations, Pietro’s focus is on creating excellence throughout the organisation by building close business relationships that utilise and enhance the technical and operational knowledge of the team.He is responsible for strategic growth initiatives, whilst also providing leadership vision in maintaining a strong company culture.
            </p>
            <p data-animate>
            Pietro’s exceptional interpersonal skills developed while working for a global sales company within the telecommunications industry.  During that period, he was recognised for his excellent sales track record and won the company’s Rising Star Award for 2003. This accolade was only the beginning of many achievements to come. While working in the UK in 2005 Pietro was assigned a Technical Lead position; he managed teams of technicians across an international rollout of updated EFTPOS and core systems for one of the biggest news agency chains in Europe; spanning across England, Scotland, Wales, Ireland and the Czech Republic. This complex project was deployed over 2 years and incorporated over 100,000 people with budgets up to 100 million dollars.
            </p>
            <p data-animate>
            Pietro commenced with iQuest in 2008 and worked his way through various technical roles, eventually becoming a Company Director.
            </p>
          </div> 
        </div>
      </InternalLayout>
    </>
  )
}