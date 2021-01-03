import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import 'normalize.css'
import 'animate.css'
import '../../styles/global.css'
import styles from './PageLayout.module.css'

import PageHeader from './PageHeader'
import Footer from './Footer'

class PageLayout extends Component {
  render() {
    const { isFullWidth } = this.props
    return (
      <div className={styles.container}>
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/hai2oqv.css" />
        </Helmet>
        <PageHeader />
        <article className={`${styles.content} ${isFullWidth ? styles.isFullWidth : ''}`}>
          {this.props.children}
        </article>
        <Footer />
      </div>
    )
  }
}

PageLayout.defaultProps = {
  isFullWidth: false,
}

export default PageLayout
