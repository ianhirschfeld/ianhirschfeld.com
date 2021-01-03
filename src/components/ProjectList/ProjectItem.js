import React, { Component } from 'react'
import Img from 'gatsby-image'

import styles from './ProjectList.module.css'

class ProjectList extends Component {
  render() {
    const {
      item: { image, title, description, url },
    } = this.props

    return (
      <li className={styles.item}>
        <a className={styles.imageContainer} href={url} target="_blank" rel="noopener noreferrer">
          <Img className={styles.image} fluid={image} alt={title} />
        </a>
        <div className={styles.content}>
          <a className={styles.titleLink} href={url} target="_blank" rel="noopener noreferrer">
            <h3 className={styles.title}>{title}</h3>
          </a>
          <p className={styles.description}>{description}</p>
        </div>
      </li>
    )
  }
}

export default ProjectList
