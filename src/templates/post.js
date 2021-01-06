import React from 'react'
import { graphql } from 'gatsby'

export default function Post({ data }) {
  const { frontmatter, html } = data.post

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <small>{frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
