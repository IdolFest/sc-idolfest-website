require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `SC IdolFest`,
    shortDates: 'Aug 12, 2023',
    longDates: 'August 12, 2023',
    location: 'Torrance, CA',
    siteUrl: 'https://scidolfest.com',
    description: `Get ready to experience idol fun in the sun! Coming to the Torrance Cultural Center on Aug 12, 2023.`,
    author: `The SC IdolFest Team`,
    social: {
      twitter: '@SCIdolFest',
      facebook: 'SCIdolFest',
      instagram: 'SCIdolFest',
      discord: 'h5yJbXgTgE',
      email: 'chairs@scidolfest.com',
    }
  },
  plugins: [
    `nw-idolfest-theme`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-XPTSB6WENM",
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@images": "src/images",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@theme": "plugins/nw-idolfest-theme",
          "@pages": "src/pages"
        },
        extensions: [
          "js",
        ],
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `blog`,
        path: `${__dirname}/src/markdown-pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
        precision: 6,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SC IdolFest`,
        short_name: `scidolfest`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon/Icon-Orange.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://nwidolfest.us6.list-manage.com/subscribe/post?u=0d4a95e6064b7ded461f27bd9&amp;id=bcd7febf95', // string; add your MC list endpoint here; see instructions below
        timeout: 6000, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    `gatsby-plugin-catch-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
