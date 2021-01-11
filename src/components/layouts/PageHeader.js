import React, { Component } from 'react'
import { Link } from 'gatsby'

import { CORNER, BLUE_BLOBS, RED_BLOBS, TAN_BLOBS, SOCIAL_LINKS } from '../../constants'

import styles from './PageHeader.module.css'

import Blob from '../Blob'
import Nav from './Nav'
import SocialLink from '../SocialLink'

class PageHeader extends Component {
  renderSocialLinks = () => {
    return (
      <ul className={styles.socials}>
        {Object.values(SOCIAL_LINKS).map(link => {
          return (
            <li key={link.id} className={styles.socialItem}>
              <SocialLink link={link} />
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <header className={styles.container}>
        <div className={styles.blobs}>
          <div className={`${styles.blob} ${styles.tanBlob}`}>
            <Blob blobs={TAN_BLOBS} corner={CORNER.topRight} color="var(--color-tan)" deltaMax={5} />
          </div>
          <div className={`${styles.blob} ${styles.blueBlob}`}>
            <Blob blobs={BLUE_BLOBS} corner={CORNER.bottomLeft} color="var(--color-blue)" deltaMax={5} />
          </div>
          <div className={`${styles.blob} ${styles.redBlob}`}>
            <Blob blobs={RED_BLOBS} corner={CORNER.bottomRight} color="var(--color-red)" deltaMax={5} />
          </div>
        </div>

        <Link to="/" className={styles.headshotContainer}>
          <span className={styles.headshot}>Ian Hirschfeld's Headshot</span>
        </Link>

        <div className={styles.content}>
          <Nav className={styles.nav} />
          <div className={styles.spacer} />
          {this.renderSocialLinks()}
        </div>
      </header>
    )
  }
}

export default PageHeader
