module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth`,
    description: `Delivering exceptional corporate IT support to Perth since 1999, iQuest provides managed IT services to help you focus on your business.`,
    author: `@Start Digital`,
    siteUrl: `https://iquest.com.au/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    // `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-next-seo",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(
            "./src/components/layout/CaseStudiesLayout.js"
          ),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iQuest Website`,
        short_name: `iQuest`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/iQuest-Favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Inter"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "zgu5zvw",
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
