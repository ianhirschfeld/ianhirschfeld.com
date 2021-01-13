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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
            },
          },
        ],
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
  ],
}
