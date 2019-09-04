require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Prismic Skeleton Starter`,
    description: `Bare bones skeleton Gatsby Starter`,
    author: `Peter Hironaka`,
    siteUrl: `https://prisma-ph-gatsby-starter.netlify.com`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `gatsby-styled-starter`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ nodeS, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,     
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },

    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `path`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          PrismicBlogPost: {
            title: node => node.data.title,
            path: node => node.data.link,
          },
        },
       
      },
    },
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome.png`, // This path is relative to the root of the site.

      },
    },

    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
