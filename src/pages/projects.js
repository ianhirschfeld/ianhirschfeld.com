import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { PageLayout } from '../components/layouts'
import ProjectList from '../components/ProjectList'
import SEO from '../components/seo'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      beyondtokyoImage: file(relativePath: { eq: "projects/BeyondTokyo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hackdesignImage: file(relativePath: { eq: "projects/HackDesign.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      neverBoutUsImage: file(relativePath: { eq: "projects/NeverBoutUs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      roleClassicImage: file(relativePath: { eq: "projects/RoleClassic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const projects = [
    {
      title: 'Role Classic',
      description:
        'The precursor to the new Role platform. A mobile game designed around the question: "What if D&D was as easy to play as Apples to Apples?" With $0 in marketing or social media, Role Classic gained over 100,000 players.',
      image: data.roleClassicImage.childImageSharp.fluid,
      url: 'https://apps.apple.com/us/app/role-classic/id933599454',
    },
    {
      title: 'Hack Design',
      description:
        'An easy to follow course for people interested in product design. With more than 350,000 students, Hack Design delivers over 1M lessons each month.',
      image: data.hackdesignImage.childImageSharp.fluid,
      url: 'https://hackdesign.org',
    },
    {
      title: 'Beyond Tokyo',
      description:
        'A roomscale VR travel experience built for the HTC Vive. Explore fantasy versions of famous locations in Japan while taking a journey through an interactive story about Hachiko, Japan’s most loyal dog.',
      image: data.beyondtokyoImage.childImageSharp.fluid,
      url: 'https://www.beyondtokyovr.com',
    },
    {
      title: 'Never Bout Us',
      description:
        'Released in 2016, this ground breaking 360 music video was created specifically for VR viewing. Going on to reach over 800,000 views, it was accompanied by a physical press kit including a custom cardbord VR viewer and memorabilia from the artist.',
      image: data.neverBoutUsImage.childImageSharp.fluid,
      url: 'https://www.youtube.com/watch?v=_dw-Q6seOOk',
    },
  ]

  return (
    <PageLayout>
      <SEO title="Projects" />
      <h1 className="section-heading">Work &amp; Projects</h1>

      <section className="section">
        <ProjectList items={projects} />
      </section>
    </PageLayout>
  )
}

export default ProjectsPage
