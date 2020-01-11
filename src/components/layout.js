import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import SlidingMenu from "./sliding-menu"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <div class="layout-nav">
        <Header
          siteAuthor={data.site.siteMetadata.author}
          siteTitle={data.site.siteMetadata.title}
        />
        <SlidingMenu />
        <main
          style={{
            padding: "15px",
          }}
        >
          {children}
        </main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
