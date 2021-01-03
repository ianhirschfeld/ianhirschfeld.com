import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './pages.module.css'

import { PageLayout } from '../components/layouts'
import ProjectList from '../components/ProjectList'
import SEO from '../components/seo'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      balancesImage: file(relativePath: { eq: "projects/Balances.jpg" }) {
        ...jpgImage
      }
      beyondtokyoImage: file(relativePath: { eq: "projects/BeyondTokyo.jpg" }) {
        ...jpgImage
      }
      hackdesignImage: file(relativePath: { eq: "projects/HackDesign.png" }) {
        ...pngImage
      }
      neverBoutUsImage: file(relativePath: { eq: "projects/NeverBoutUs.jpg" }) {
        ...jpgImage
      }
      retinaMacAppsImage: file(relativePath: { eq: "projects/RetinaMacApps.jpg" }) {
        ...jpgImage
      }
      roleClassicImage: file(relativePath: { eq: "projects/RoleClassic.jpg" }) {
        ...jpgImage
      }
    }
  `)

  const projects = [
    {
      title: 'Role Classic',
      description:
        'A role-playing party game built for your phone. Designed around the question: "What if D&D was as easy to play as Apples to Apples?" With no social media and $0 in marketing, Role Classic gained over 100,000 players.',
      image: data.roleClassicImage.childImageSharp.fluid,
      url: 'https://apps.apple.com/us/app/role-classic/id933599454',
    },
    {
      title: 'Hack Design',
      description:
        'An introductory product design course. With lessons written by industry professionals, Hack Design has more than 350,000 students.',
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
        "A ground breaking 360 music video created for VR viewing. Released in 2016, it went on to gain over 800,000 views. It's release was accompanied by a physical press kit including a custom cardbord VR viewer and memorabilia from the artist.",
      image: data.neverBoutUsImage.childImageSharp.fluid,
      url: 'https://www.youtube.com/watch?v=_dw-Q6seOOk',
    },
    {
      title: 'Balances',
      description:
        'A Bitcoin financial app. Send & receive payments and track the balances of all your cryptocurrencies.',
      image: data.balancesImage.childImageSharp.fluid,
      url: 'https://web.archive.org/web/20170709185626/https://balances.io/',
    },
    {
      title: 'Retina Mac Apps',
      description:
        'The #1 resource for discovering retina supported apps after the 2012 launch of the first Retina Macbook Pro.',
      image: data.retinaMacAppsImage.childImageSharp.fluid,
      url: 'https://web.archive.org/web/20121206183502/http://retinamacapps.com/',
    },
  ]

  return (
    <PageLayout isFullWidth>
      <SEO title="Projects" />
      <div className={styles.projectsHeading}>
        <h1 className="section-heading">Work &amp; Projects</h1>
      </div>

      <section className="section">
        <ProjectList items={projects} />
      </section>
    </PageLayout>
  )
}

export default ProjectsPage
