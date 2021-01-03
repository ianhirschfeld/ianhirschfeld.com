import React, { Component } from 'react'
import { Link } from 'gatsby'

import styles from './Nav.module.css'

class Nav extends Component {
  render() {
    const { className } = this.props
    return (
      <nav className={`${styles.container} ${className || ''}`}>
        <Link to="/">Home</Link>
        <Link to="/now">Now</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    )
  }
}

export default Nav
