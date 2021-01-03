module.exports = {
  siteMetadata: {
    title: `Ian Hirschfeld`,
    description: `Ian Hirschfeld is a Fullstack Software Engineer and Co-Founder of Role, Inc.`,
    author: `@ianhirschfeld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ian-hirschfeld`,
        short_name: `ianhirschfeld`,
        start_url: `/`,
        background_color: `#efece2`,
        theme_color: `#efece2`,
        display: `minimal-ui`,
        icon: `src/images/IanHirschfeld_Headshot.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-svg`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
