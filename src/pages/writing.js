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
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            dateDifference: date(difference: "days")
            dateFromNow: date(fromNow: true)
            dateFormatted: date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <PageLayout>
      <SEO title="Writing" />
      <section className="section">
        <h1 className="section-heading">Writing</h1>
      </section>

      {data.writing.posts.map(post => {
        return (
          <section className="section">
            <Link to={`/posts${post.fields.slug}`}>
              <h2 className="section-heading">{post.frontmatter.title}</h2>
            </Link>
            <div className="section-subheading">{post.frontmatter.dateFormatted}</div>
            <p>{post.excerpt}</p>
          </section>
        )
      })}
    </PageLayout>
  )
}

export default WritingPage
