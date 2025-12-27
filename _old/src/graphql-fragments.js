import { graphql } from 'gatsby'

export const bannerImage = graphql`
  fragment bannerImage on File {
    childImageSharp {
      fluid(maxWidth: 640, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const gridPngImage = graphql`
  fragment gridPngImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const projectJpgImage = graphql`
  fragment projectJpgImage on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const projectPngImage = graphql`
  fragment projectPngImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
