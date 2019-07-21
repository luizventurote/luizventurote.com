import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from './menu';

import headerStyles from './styles/header.module.css';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.container}>
      <h1 className={headerStyles.h1}>
        <Link to="/" className={headerStyles.link}>
          {siteTitle}
        </Link>
      </h1>
      <Menu/>
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
