import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import { PageLayout } from '../components/layouts'
import SEO from '../components/seo'

export default function Post({ data }) {
  const [origin, setOrigin] = useState(null)
  useEffect(() => setOrigin(window.location.origin), [])

  const { excerpt, html, timeToRead, frontmatter } = data.post
  const { title, date, featuredImage } = frontmatter
  const meta = []

  if (origin && featuredImage) {
    const image = `${origin}${featuredImage.childImageSharp.fluid.src}`
    meta.push(
      {
        property: `og:image`,
        content: image,
      },
      {
        property: `twitter:image`,
        content: image,
      }
    )
  }

  return (
    <PageLayout>
      <SEO title={title} description={excerpt} meta={meta} />

      <section className="section">
        <h1 className="section-heading1 post-title">{title}</h1>
        <div className="post-meta">
          {date} &middot; {timeToRead} min read
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} className="post-content" />
      </section>
    </PageLayout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
