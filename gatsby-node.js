const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicBlogPost {
        edges {
          node {
            id
            slugs
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/post.jsx")

  pages.data.allPrismicBlogPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slugs}`,
      component: template,
      context: {
        id: edge.node.id,
        slugs: edge.node.slugs,
      },
    })
  })
}