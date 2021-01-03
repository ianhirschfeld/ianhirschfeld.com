import React, { Component } from 'react'

import { CORNER } from '../../constants'
import { randomIntBetween } from '../../utilities'

import styles from './Blob.module.css'

const SPEED = 10000

class Blob extends Component {
  containerRef = React.createRef()
  pathRef = React.createRef()

  corner = null
  timer = null

  constructor(props) {
    super(props)
    this.corner = this.props.corner
  }

  componentDidMount() {
    setTimeout(() => this.updateBlob(), 0)
    this.timer = setInterval(() => this.updateBlob(), SPEED)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  getNewCorner = () => {
    const newCorner = this.randomCorner()
    if (newCorner !== this.corner) {
      this.corner = newCorner
    } else {
      this.getNewCorner()
    }
  }

  getNewTransform = () => {
    const { deltaMin, deltaMax } = this.props

    let x = 0
    let y = 0

    switch (this.corner) {
      case CORNER.topLeft:
        x = randomIntBetween(deltaMin, deltaMax) * -1
        y = randomIntBetween(deltaMin, deltaMax) * -1
        break

      case CORNER.topRight:
        x = randomIntBetween(deltaMin, deltaMax) * -1
        y = randomIntBetween(deltaMin, deltaMax)
        break

      case CORNER.bottomLeft:
        x = randomIntBetween(deltaMin, deltaMax)
        y = randomIntBetween(deltaMin, deltaMax) * -1
        break

      case CORNER.bottomRight:
        x = randomIntBetween(deltaMin, deltaMax)
        y = randomIntBetween(deltaMin, deltaMax)
        break

      default:
        x = 0
        y = 0
        break
    }

    return `translate(${x}px, ${y}px)`
  }

  randomBlob = () => {
    const { blobs } = this.props
    return blobs[randomIntBetween(0, blobs.length - 1)]
  }

  randomCorner = () => {
    const corners = Object.values(CORNER)
    return corners[randomIntBetween(0, corners.length - 1)]
  }

  updateBlob = () => {
    const blobEl = this.containerRef.current
    const pathEl = this.pathRef.current
    const currentBlob = pathEl.getAttribute('d')
    const newBlob = this.randomBlob()

    if (currentBlob !== newBlob) {
      this.getNewCorner()
      blobEl.style.transform = this.getNewTransform()
      pathEl.setAttribute('d', newBlob)
    } else {
      this.updateBlob()
    }
  }

  render() {
    const { blobs, color, className } = this.props

    return (
      <div ref={this.containerRef} className={`${styles.container} ${className || ''}`}>
        <svg style={{ fill: color }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path ref={this.pathRef} d={blobs[0]} transform="translate(100 100)" />
        </svg>
      </div>
    )
  }
}

Blob.defaultProps = {
  deltaMin: 0,
  deltaMax: 10,
}

export default Blob
