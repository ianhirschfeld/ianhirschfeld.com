import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './pages.module.css'

import { PageLayout } from '../components/layouts'
import ProjectList from '../components/ProjectList'
import SEO from '../components/seo'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      atlasImage: file(relativePath: { eq: "projects/Atlas.jpg" }) {
        ...jpgImage
      }
      balancesImage: file(relativePath: { eq: "projects/Balances.jpg" }) {
        ...jpgImage
      }
      beyondtokyoImage: file(relativePath: { eq: "projects/BeyondTokyo.jpg" }) {
        ...jpgImage
      }
      cedImage: file(relativePath: { eq: "projects/CED.jpg" }) {
        ...jpgImage
      }
      goodFridaysImage: file(relativePath: { eq: "projects/GoodFridays.jpg" }) {
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
        'Role-playing party game built for your phone. Designed around the question: "What if D&D was as easy to play as Apples to Apples?" With no social media and $0 in marketing, Role Classic gained over 100,000 players.',
      image: data.roleClassicImage.childImageSharp.fluid,
      url: 'https://apps.apple.com/us/app/role-classic/id933599454',
    },
    {
      title: 'Hack Design',
      description:
        'Introductory product design course. With lessons written by industry professionals, Hack Design has more than 350,000 students.',
      image: data.hackdesignImage.childImageSharp.fluid,
      url: 'https://hackdesign.org',
    },
    {
      title: 'Beyond Tokyo',
      description:
        'Roomscale VR travel experience built for the HTC Vive. Explore fantasy versions of famous locations in Japan while taking a journey through an interactive story about Hachiko, Japan’s most loyal dog.',
      image: data.beyondtokyoImage.childImageSharp.fluid,
      url: 'https://www.beyondtokyovr.com',
    },
    {
      title: 'Never Bout Us',
      description:
        "Ground breaking 360 music video created for VR viewing. Released in 2016, it went on to gain over 800,000 views. It's release was accompanied by a physical press kit including a custom cardbord VR viewer and memorabilia from the artist.",
      image: data.neverBoutUsImage.childImageSharp.fluid,
      url: 'https://www.youtube.com/watch?v=_dw-Q6seOOk',
    },
    {
      title: 'Atlas',
      description:
        'VR sci-fi adventure for the Oculus Rift & Touch. Explore the world on your hover bike and solve environmental puzzles to unlock the mysteries hiding within the world.',
      image: data.atlasImage.childImageSharp.fluid,
      url: 'https://vimeo.com/205636652',
    },
    {
      title: 'Balances',
      description:
        'Bitcoin financial app. Send & receive payments and track the balances of all your cryptocurrencies.',
      image: data.balancesImage.childImageSharp.fluid,
      url: 'https://web.archive.org/web/20170709185626/https://balances.io/',
    },
    {
      title: 'CED Innovators',
      description: 'Interactive data visualization. Created with D3.js.',
      image: data.cedImage.childImageSharp.fluid,
      url: 'https://cednc.org/innovatorsreport/',
    },
    {
      title: 'GOOD Fridays',
      description: 'iOS music player. An exploration in mobile audio player design with the music of Kanye West.',
      image: data.goodFridaysImage.childImageSharp.fluid,
      url: 'https://apps.apple.com/us/app/good-fridays-kanye-west-edition/id1078562945',
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
      <section className="section">
        <div className={styles.projectsHeading}>
          <h1 className="section-heading">Work &amp; Projects</h1>
          <div className="section-subheading">A sampling of some of my public work and personal projects</div>
        </div>
      </section>

      <section className="section">
        <ProjectList items={projects} />
      </section>
    </PageLayout>
  )
}

export default ProjectsPage
