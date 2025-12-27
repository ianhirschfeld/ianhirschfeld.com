import React, { Component } from 'react'

import { SOCIAL_LINKS } from '../../constants'

import styles from './SocialLink.module.css'

import GithubIcon from '../../images/icons/GithubIcon.svg'
import LinkedinIcon from '../../images/icons/LinkedinIcon.svg'
import MediumIcon from '../../images/icons/MediumIcon.svg'
import TwitterIcon from '../../images/icons/TwitterIcon.svg'

class SocialLink extends Component {
  state = { blobs: [], blob: null }

  componentDidMount() {
    const {
      link: { blobs },
    } = this.props
    this.setState({ blobs: blobs, blob: blobs[0] })
  }

  onMouseEnter = () => {
    this.setState({ blob: this.props.link.blobs[1] })
  }

  onMouseLeave = () => {
    this.setState({ blob: this.props.link.blobs[0] })
  }

  renderIcon = () => {
    const {
      link: { id },
    } = this.props
    switch (id) {
      case 'github':
        return <GithubIcon />

      case 'linkedin':
        return <LinkedinIcon />

      case 'medium':
        return <MediumIcon />

      case 'twitter':
        return <TwitterIcon />

      default:
        return null
    }
  }

  render() {
    const { blob } = this.state
    const {
      link: { id, url },
      className,
    } = this.props
    const isGithub = id === SOCIAL_LINKS.github.id

    return (
      <a
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.container} ${className || ''}`}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.blob}>
          <path fill="var(--color-blue)" d={blob} transform="translate(100 100)" />
        </svg>
        <span className={`${styles.icon} ${isGithub ? styles.isGithub : ''}`}>{this.renderIcon()}</span>
      </a>
    )
  }
}

export default SocialLink
