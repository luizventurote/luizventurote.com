/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header";
import Footer from './footer';

import "./styles/layout.module.css"
import containerStyles from './styles/container.module.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            twitter
            github
            linkedin
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={containerStyles.container}>
          <main>{children}</main>
        </div>
        <Footer copyright={data.site.siteMetadata.title} 
        twitter={data.site.siteMetadata.twitter} 
        github={data.site.siteMetadata.github} 
        linkedin={data.site.siteMetadata.linkedin}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout