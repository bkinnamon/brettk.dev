import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="mx-3">
      <h1 className="m-0">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <nav className="mx-3">
      <Link className="header__link" to="/">
        Home
      </Link>
      <Link className="header__link" to="/projects">
        Projects
      </Link>
    </nav>
    <div className="flex-1"></div>
    <div className="mx-3">Social Links</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
