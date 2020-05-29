module.exports = {
  siteMetadata: {
    title: `brettk.dev`,
    description: `Developer`,
    author: `Brett Kinnamon`,
    social: {
      github: `bkinnamon`,
      twitter: `bdkinnamon`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-postcss`,
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
        name: "markdown",
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `brettk.dev`,
        short_name: `brettk.dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `##1a202c`,
        display: `minimal-ui`,
        icon: `src/images/bk-icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {},
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
