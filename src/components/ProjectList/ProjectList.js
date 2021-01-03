import React, { Component } from 'react'

import styles from './ProjectList.module.css'

import ProjectItem from './ProjectItem'

class ProjectList extends Component {
  render() {
    return (
      <ul className={styles.list}>
        {this.props.items.map((item, i) => {
          return <ProjectItem key={i} item={item} />
        })}
      </ul>
    )
  }
}

export default ProjectList
