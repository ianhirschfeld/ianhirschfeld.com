import { graphql } from 'gatsby'

export const jpgImage = graphql`
  fragment jpgImage on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pngImage = graphql`
  fragment pngImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
