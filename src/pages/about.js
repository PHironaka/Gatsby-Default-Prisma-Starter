import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const About = ({ data: { prismicAbout } }) => (
  <Layout>
    <SEO
      title={prismicAbout.data.about_title.text}
    />
    <h1>{prismicAbout.data.about_title.text}</h1>
    <Img fluid={prismicAbout.data.about_hero_img.localFile.childImageSharp.fluid} />
    <div
      dangerouslySetInnerHTML={{ __html: prismicAbout.data.about_content.html }}
    />
  </Layout>
)
export default About

export const pageQuery = graphql`
  query AboutQuery {
    prismicAbout {
      data {
        about_title {
          text
        }
        about_hero_img {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        about_content {
          html
        }
      }
    }
  }
`