import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          social {
            github
            twitter
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        title={data.site.siteMetadata.title}
        social={data.site.siteMetadata.social}
      />
      <div className="container mx-auto">
        <main>{children}</main>
        <footer>&copy; 2019 Brett Kinnamon</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
