import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import styled from 'styled-components'

const theme = {
  red: '#FF0000',
  black: '#000',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1200px',
};


const PageContainer = styled.div`
  max-width:1200px;
  margin:0 auto;
  padding:0 2em;

`


const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
  overflow-x:hidden;
}

body {
    font-family: aktiv-grotesk-extended, sans-serif;
    font-weight: 300;
    margin:0;
    padding:0;
    color: #000;
    -webkit-text-size-adjust: 100%;
    -webkit-font-feature-settings: "kern" 1;
    -moz-font-feature-settings: "kern" 1;
    -o-font-feature-settings: "kern" 1;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
    line-height: 1.5;
    font-size: 16px;
}

h2 {
  font-weight:400;
  font-size:1.2em;
}

ul{
  padding:0;
}

.section {
  margin-top:2em;
}

a {
  color: ${props => props.theme.black};
  text-decoration:none;
}



img {
  max-width:100%;
}




`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
  <ThemeProvider theme={theme}>
    <PageContainer>
    <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </PageContainer>
      
  </ ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
