import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
const Index = ({ data: { prismicBlogPost } }) => (
  <Layout>
    <SEO
      title="Index"
    />
    <Link to={prismicBlogPost.slugs}><h1>{prismicBlogPost.data.title.text}</h1></Link>
  </Layout>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    prismicBlogPost {
      slugs
      data {
        title {
          text
        }
        main_content {
          html
        }
      }
    }
  }
`