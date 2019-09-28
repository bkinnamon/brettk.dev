import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, social }) => (
  <header className="header">
    <div className="mx-3">
      <h1 className="m-0">
        <Link to="/">{title}</Link>
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
    <div className="mx-3">
      <a href={`https://github.com/${social.github}`} className="mx-3">
        <i className="fab fa-lg fa-github"></i>
      </a>
      <a href={`https://twitter.com/${social.twitter}`} className="mx-3">
        <i className="fab fa-lg fa-twitter"></i>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
