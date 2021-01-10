import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import styles from './ProjectList.module.css'

class ProjectList extends Component {
  renderLink = (children, className) => {
    const {
      item: { url, path },
    } = this.props

    if (path)
      return (
        <Link to={path} className={className}>
          {children}
        </Link>
      )
    else
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      )
  }

  render() {
    const {
      item: { image, title, description },
    } = this.props

    return (
      <li className={styles.item}>
        {this.renderLink(<Img className={styles.image} fluid={image} alt={title} />, styles.imageContainer)}
        <div className={styles.content}>
          {this.renderLink(<h3 className={styles.title}>{title}</h3>, styles.titleLink)}
          <p className={styles.description}>{description}</p>
        </div>
      </li>
    )
  }
}

export default ProjectList
