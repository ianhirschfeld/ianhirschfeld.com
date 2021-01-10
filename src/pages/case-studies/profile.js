import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from '../pages.module.css'

import { PageLayout } from '../../components/layouts'
import SEO from '../../components/seo'

const ProfileCaseStudy = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "ProfileBanner.jpg" }) {
        ...bannerImage
      }
      leftZoneImage: file(relativePath: { eq: "projects/profile/Profile_04.png" }) {
        id
        ...gridPngImage
      }
      middleZoneImage: file(relativePath: { eq: "projects/profile/Profile_00.png" }) {
        id
        ...gridPngImage
      }
      rightZoneImage: file(relativePath: { eq: "projects/profile/Profile_05.png" }) {
        id
        ...gridPngImage
      }
      screenshot01: file(relativePath: { eq: "projects/profile/Profile_01.png" }) {
        id
        ...gridPngImage
      }
      screenshot02: file(relativePath: { eq: "projects/profile/Profile_02.png" }) {
        id
        ...gridPngImage
      }
      screenshot03: file(relativePath: { eq: "projects/profile/Profile_03.png" }) {
        id
        ...gridPngImage
      }
      screenshot06: file(relativePath: { eq: "projects/profile/Profile_06.png" }) {
        id
        ...gridPngImage
      }
      screenshot07: file(relativePath: { eq: "projects/profile/Profile_07.png" }) {
        id
        ...gridPngImage
      }
      screenshot08: file(relativePath: { eq: "projects/profile/Profile_08.png" }) {
        id
        ...gridPngImage
      }
      screenshot09: file(relativePath: { eq: "projects/profile/Profile_09.png" }) {
        id
        ...gridPngImage
      }
    }
  `)

  return (
    <PageLayout isFullWidth>
      <SEO title="Profile Case Study" />
      <section className="section content-width">
        <h1 className="section-heading1">Profile</h1>
        <div className="banner">
          <Img fluid={data.bannerImage.childImageSharp.fluid} alt="Profile Banner" />
        </div>
      </section>

      <section className="section content-width post-content">
        <h2 className="section-heading2">Overview</h2>
        <p>
          While working at The Soap Collective, we wanted to find a unique way to introduce the agency to potential
          clients. We had two objectives:
        </p>
        <ol>
          <li>Showcase members of our team</li>
          <li>Show off our skills as interactive designers</li>
        </ol>
        <p>
          After a brainstorming session, we settled on a digital look book that would feature our team’s background,
          skills, and personal interests. The book would be packaged in a native app giving us full control over the UI
          and interactions. We developed custom swipe and transition mechanics to create a unique flow of information
          through the app.
        </p>

        <h2 className="section-heading2">About the Digital Look Book</h2>
        <p>
          Once we had our concept locked in, we began experimenting with different types of interactions. Since we were
          putting our Look Book into a native app, we played around with what kind of swipe interactions we could come
          up with. After some prototyping we designed a UX flow that always presented information no matter what
          direction you swiped in.
        </p>
      </section>

      <section className="section">
        <div className={styles.imageGrid}>
          <Img fluid={data.leftZoneImage.childImageSharp.fluid} alt="Profile Screenshot: Left Zone" />
          <Img fluid={data.middleZoneImage.childImageSharp.fluid} alt="Profile Screenshot: Middle Zone" />
          <Img fluid={data.rightZoneImage.childImageSharp.fluid} alt="Profile Screenshot: Right Zone" />
        </div>
      </section>

      <section className="section content-width post-content">
        <p>
          We broke the app into three zones: left, middle, right. The middle zone is the primary space and where the app
          launches into. From there, you can swipe left to reveal info about The Soap Collective. Swiping right reveals
          a table of contents allowing you to quickly jump to any section within the middle zone. The middle is the
          primary flow of information. Starting from the launch screen, swiping down will progressively take your
          through various projects that the agency has worked on. Swiping up from the launch screen, will take your
          through the background and skills of our team.
        </p>
        <p>
          In addition to the swipe mechanics, we wanted to allow users to be able to tap to get to any section of the
          app. We added icons that always show you how you can get to the next piece of information either by tapping
          the icon or swiping in the direction indicated.
        </p>
      </section>

      <section className="section">
        <div className={styles.imageGrid}>
          <Img fluid={data.screenshot01.childImageSharp.fluid} alt="Profile Screenshot: Portrait" />
          <Img fluid={data.screenshot02.childImageSharp.fluid} alt="Profile Screenshot: Background" />
          <Img fluid={data.screenshot03.childImageSharp.fluid} alt="Profile Screenshot: Project" />
        </div>
      </section>

      <section className="section content-width post-content">
        <h2 className="section-heading2">Hidden Interaction</h2>
        <p>
          For one final piece to the look book, we added an Easter egg. If you flip your phone upside down, the app
          transitions to its B-side. In this mode, all project information becomes “behind-the-scenes” and all team
          member bios get a little more personal.
        </p>
      </section>

      <section className="section">
        <div className={styles.imageGrid}>
          <Img fluid={data.screenshot06.childImageSharp.fluid} alt="Profile Screenshot: B-side" />
          <Img fluid={data.screenshot07.childImageSharp.fluid} alt="Profile Screenshot: B-side Portrait" />
          <Img fluid={data.screenshot08.childImageSharp.fluid} alt="Profile Screenshot: B-side Background" />
          <Img fluid={data.screenshot09.childImageSharp.fluid} alt="Profile Screenshot: B-side Project" />
        </div>
      </section>
    </PageLayout>
  )
}

export default ProfileCaseStudy
