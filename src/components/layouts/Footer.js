import React, { Component } from 'react'

import { SOCIAL_LINKS } from '../../constants'

import styles from './Footer.module.css'

import SocialLink from '../SocialLink'

class Footer extends Component {
  renderSocialLinks = () => {
    return (
      <ul className={styles.socials}>
        {Object.values(SOCIAL_LINKS).map(link => {
          return (
            <li key={link.id} className={styles.socialItem}>
              <SocialLink link={link} size={24} />
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <footer className={styles.container}>
        {this.renderSocialLinks()}
        <div>&copy; {new Date().getFullYear()}, Ian Hirschfeld</div>
      </footer>
    )
  }
}

export default Footer
