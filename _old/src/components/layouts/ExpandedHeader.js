import React, { Component } from 'react'

import { CORNER, BLUE_BLOBS, RED_BLOBS, TAN_BLOBS, SOCIAL_LINKS } from '../../constants'

import styles from './ExpandedHeader.module.css'

import ArrowIcon from '../../images/icons/ArrowIcon.svg'
import Blob from '../Blob'
import SocialLink from '../SocialLink'

class ExpandedHeader extends Component {
  arrowButtonContentRef = React.createRef()

  onArrowButtoEnter = () => {
    this.arrowButtonContentRef.current.classList.add(styles.customSwing)
    this.arrowButtonContentRef.current.classList.add('animate__animated')
  }

  onArrowButtonLeave = () => {
    this.arrowButtonContentRef.current.classList.remove(styles.customSwing)
    this.arrowButtonContentRef.current.classList.remove('animate__animated')
  }

  renderSocialLinks = () => {
    return (
      <ul className={styles.socials}>
        {Object.values(SOCIAL_LINKS).map(link => {
          return (
            <li key={link.id} className={`animate__animated animate__bounceIn animate__delay-2s ${styles.socialItem}`}>
              <SocialLink link={link} />
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    const { onScrollClick } = this.props
    return (
      <header className={`animate__animated animate__fadeIn animate__faster ${styles.container}`}>
        <div className={`animate__animated animate__bounceIn animate__delay-2s ${styles.banner}`}>
          <div className={styles.blobs}>
            <div className={`${styles.blob} ${styles.tanBlob}`}>
              <Blob blobs={TAN_BLOBS} corner={CORNER.topRight} color="var(--color-tan)" />
            </div>
            <div className={`${styles.blob} ${styles.blueBlob}`}>
              <Blob blobs={BLUE_BLOBS} corner={CORNER.bottomLeft} color="var(--color-blue)" />
            </div>
            <div className={`${styles.blob} ${styles.redBlob}`}>
              <Blob blobs={RED_BLOBS} corner={CORNER.bottomRight} color="var(--color-red)" />
            </div>
          </div>

          <div className={styles.headshotContainer}>
            <div className={styles.headshot}>Ian Hirschfeld's Headshot</div>
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={`animate__animated animate__fadeInDown animate__delay-1s ${styles.heading}`}>
            Ian Hirschfeld
          </h1>
          <p className={`animate__animated animate__fadeInDown animate__delay-1s heading ${styles.subheading}`}>
            Code <span className="grey">&middot;</span> Movies <span className="grey">&middot;</span> TTRPGs
          </p>
          {this.renderSocialLinks()}
        </div>

        <div className={`animate__animated animate__fadeInDown animate__delay-3s ${styles.arrowButtonContainer}`}>
          <div ref={this.arrowButtonContentRef} className={styles.arrowButtonContent}>
            <button
              onClick={onScrollClick}
              onMouseEnter={this.onArrowButtoEnter}
              onMouseLeave={this.onArrowButtonLeave}
              className={`animate__swing ${styles.arrowButton}`}
            >
              <ArrowIcon /> Learn More
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default ExpandedHeader
