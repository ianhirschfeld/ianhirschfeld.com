import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import 'normalize.css'
import 'animate.css'
import '../../styles/global.css'
import styles from './MainLayout.module.css'

import ExpandedHeader from './ExpandedHeader'
import Footer from './Footer'
import Nav from './Nav'

class MainLayout extends Component {
  contentRef = React.createRef()

  onScrollClick = () => {
    this.contentRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div className={styles.container}>
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/hai2oqv.css" />
        </Helmet>
        <ExpandedHeader onScrollClick={this.onScrollClick} />
        <article ref={this.contentRef} className={styles.content}>
          <div className={styles.navContainer}>
            <div className={styles.navCorner}>
              <div></div>
            </div>
            <Nav className={styles.nav} />
            <div className={styles.navCorner}>
              <div></div>
            </div>
          </div>
          {this.props.children}
        </article>
        <Footer />
      </div>
    )
  }
}

export default MainLayout
