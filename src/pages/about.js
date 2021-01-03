import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { SOCIAL_LINKS } from '../constants'

import styles from './page.module.css'

import { PageLayout } from '../components/layouts'
import SEO from '../components/seo'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      brandsImage: file(relativePath: { eq: "Brands.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <PageLayout>
      <SEO title="About" />
      <h1 className="section-heading">About Me</h1>

      <section className="section">
        <h2 className="section-heading">Background</h2>
        <p>
          I’m a Fullstack Software Engineer with a degree in Computer Science and Digital Art. These days my primary
          languages and frameworks consists of: React, Redux, Ruby on Rails, and Postgres. I’ve also done my fair share
          of infrastructure work across Amazon Web Services and Google Cloud Platform. In the past I’ve used Swift,
          Scala, C#, MySQL, along with a plethora of other tools and SDKs to support my work.
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">Companies I've Worked At</h2>
        <p>I've had the pleasure of working at some great companies over the years:</p>

        <ul className="section-list">
          <li>
            <a href="https://unity.com" target="_blank" rel="noopener noreferrer">
              Unity Technologies
            </a>
            : I joined as a Senior Fullstack Engineer on the Analytics team. After sometime, I transferred to the
            Artificial Intelligence team where I eventually became an Engineering Manager. I worked on various services
            and products that were responsible from anywhere between 750k-1M requests per minute.
          </li>
          <li>
            <a href="https://www.thesoapcollective.com" target="_blank" rel="noopener noreferrer">
              The Soap Collective
            </a>
            : A multimedia agency that I co-found. I worked with many brands on a range of products including mobile
            apps, interactive web apps, and virtual reality experiences.
          </li>
          <li>
            <a href="https://envoy.com" target="_blank" rel="noopener noreferrer">
              Envoy
            </a>
            : I was an early iOS Engineer at Envoy. I worked on their flagship iPad app as well as helped build the
            first version of their iPhone app. I designed and built their bluetooth check-in system.
          </li>
          <li>
            <a href="https://www.mightynetworks.com" target="_blank" rel="noopener noreferrer">
              Mighty Networks
            </a>
            : I was Employee #7 in the early days of Mighty Networks. I worked on both the frontend and backend of the
            platform helping build features to support the launch of Lean In Circles, The Bill and Melinda Gates
            Foundation, and American Express OPEN.
          </li>
        </ul>
        <p>
          For more a more in-depth look at my work history,{' '}
          <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noopener noreferrer">
            view my LinkedIn
          </a>
          .
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">Brands I've Worked With</h2>
        <p>
          Both personally, and through my former agency{' '}
          <a href="https://www.thesoapcollective.com" target="_blank" rel="noopener noreferrer">
            The Soap Collective
          </a>
          , I've been able to work along side some amazing brands. Together, we've built and delivered a variety of
          digital and in-person (pre-covid) experiences for their customers.
        </p>
        <div className={styles.brands}>
          <Img fluid={data.brandsImage.childImageSharp.fluid} alt="Brand Logos" />
        </div>
      </section>
    </PageLayout>
  )
}

export default AboutPage
