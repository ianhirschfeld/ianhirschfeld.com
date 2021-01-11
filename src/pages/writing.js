import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import { PageLayout } from '../components/layouts'
import SEO from '../components/seo'

const WritingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      writing: allMarkdownRemark {
        posts: nodes {
          id
          html
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <PageLayout>
      <SEO title="Writing" />
      <section className="section">
        <h1 className="section-heading1">Writing</h1>
      </section>

      {data.writing.posts.map(post => {
        const { id, html, timeToRead, fields, frontmatter } = post
        return (
          <section key={id} className="section">
            <Link to={fields.slug} className="post-title">
              <h2>{frontmatter.title}</h2>
            </Link>
            <div className="post-meta">
              {frontmatter.date} &middot; {timeToRead} min read
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} className="post-content" />
          </section>
        )
      })}
    </PageLayout>
  )
}

export default WritingPage
