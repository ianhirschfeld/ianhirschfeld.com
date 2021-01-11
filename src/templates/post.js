import React from 'react'
import { graphql } from 'gatsby'

import { PageLayout } from '../components/layouts'
import SEO from '../components/seo'

export default function Post({ data }) {
  const { excerpt, html, timeToRead, frontmatter } = data.post

  return (
    <PageLayout>
      <SEO title="Writing" description={excerpt} />

      <section className="section">
        <h1 className="section-heading1 post-title">{frontmatter.title}</h1>
        <div className="post-meta">
          {frontmatter.date} &middot; {timeToRead} min read
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
      }
    }
  }
`
