import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const Post = ({ data: { prismicBlogPost } }) => {
  const { data } = prismicBlogPost
  return (
    <Layout title={data.title}>
    <SEO
      title={data.title.text}
    />
      <Img fluid={data.header_image.localFile.childImageSharp.fluid} />
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.main_content.html }} />
    </Layout>
  )
}


export default Post

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    prismicBlogPost(id: { eq: $id }) {
      data {
        title {
          text
        }

        main_content {
          html
        }

        header_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        
      }
    }
  }
`