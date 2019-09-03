import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import styled from 'styled-components'

const PostGrid = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-gap:2em;
`

const Index = ({ data: { allPrismicBlogPost } }) => (
  <Layout>
    <SEO
      title="Index"
    />
    <PostGrid>

  {allPrismicBlogPost.edges.map(({ node }) => (
    <div>
      <Img fluid={node.data.header_image.localFile.childImageSharp.fluid} alt={node.data.header_image.alt}/>
      <Link to={node.slugs}> <h1>{node.data.title.text}</h1></Link>
    </div>

    ))}
    </PostGrid>

  </Layout>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allPrismicBlogPost{
      edges {
        node {
          id
          slugs
          data {
            header_image {
              alt
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            link
            title {
              html
              text
            }
          }
        }
      }
    }
  }
`