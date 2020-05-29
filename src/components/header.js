import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, social }) => (
  <header className="header">
    <div className="mx-3">
      <h1 className="header__title">
        <Link to="/">{title}</Link>
      </h1>
    </div>
    <nav className="mx-3">
      <Link className="header__link" to="/">
        Home
      </Link>
      <Link className="header__link" to="/projects">
        Websites
      </Link>
      <Link className="header__link" to="/games">
        Games
      </Link>
    </nav>
    <div className="flex-1"></div>
    <div className="mx-3">
      <a
        href={`https://github.com/${social.github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
        className="mx-3"
      >
        <i className="fab fa-lg fa-github"></i>
      </a>
      <a
        href={`https://twitter.com/${social.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="mx-3"
      >
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
