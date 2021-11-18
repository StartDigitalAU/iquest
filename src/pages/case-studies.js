import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby";
import InternalLayout from "../components/layout/InternalLayout"
import CaseStudy from "../components/CaseStudy";

const CaseStudies = () => {
  const data = useStaticQuery(query)
  const caseStudies = data.allMdx.edges
  return (
    <>
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet="utf-8" />
        <title>iQuest Case Studies | IT Services Perth</title>
        <meta name="description" content="Since its establishment in 2004, iQuest has delivered the expertise, hands on knowledge and experience to clients in the successful identification and management of their IT requirements." />
      </Helmet>
      <InternalLayout title="Case Studies">
        <h2 data-animate className="text-blue-light">Since its establishment in 2004, iQuest has delivered the expertise, hands on knowledge and experience to clients in the successful identification and management of their IT requirements.</h2>
        <p data-animate>We listen to your needs and provide customised solutions. If you’re looking for a qualified business to assist in your IT requirements, iQuest is a sound investment for your IT spend. iQuest provides professional IT solutions to a diverse range of business sectors such as leading WA sporting entities, construction companies and  Not For Profit organisations, ensuring their businesses have the very best in IT services and solutions.  We pride ourselves on our mission where “We strive to create exceptional trust with whomever we encounter.” Below, we share a few of our many victories...</p>
        <div className="grid gap-6 lg:grid-cols-2 mt-12">
          {caseStudies.length > 0 && caseStudies.map(caseStudy => <CaseStudy key={caseStudy.node.frontmatter.client} caseStudy={caseStudy} />)}
        </div>
      </InternalLayout>
    </>
  )
}

const query = graphql`
  query MyQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            client
            featuredImage
            path
            industry
            numberOfEmployees
          }
        }
      }
    }
  }
`;

export default CaseStudies