import React, { Component } from "react"
import { Index } from "elasticlunr"
import {  Link } from "gatsby"
import styled from "styled-components"

const SearchItems = styled.ul`
  list-style:none;
  margin:1em 0;
  padding:0;
`
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search Articles" value={this.state.query} onChange={this.search} />
        <SearchItems>
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={"/" + page.path}>{page.title.text}</Link>
            </li>
          ))}
        </SearchItems>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}