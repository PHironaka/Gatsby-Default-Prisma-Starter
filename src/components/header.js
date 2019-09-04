import React from "react"
import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"
import Search from "./search"
import styled from "styled-components"

const HeaderContent = styled.header`
  display:grid;
  grid-template-columns:1fr 2fr;
  grid-gap:1em;
  margin-bottom:2em;
`

const HeaderNav = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-gap:1em;
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
 
  <HeaderContent
    
  >

   
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          Prisma Skeleton Starter
        </Link>
      </h1>
      <HeaderNav>
        <Search searchIndex={data.siteSearchIndex.index} />
        <Link to="/about">About</Link>
      </HeaderNav>
  </HeaderContent>
    )}
    />
  )
export default Header
