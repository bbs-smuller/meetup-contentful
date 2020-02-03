import gql from 'graphql-tag'

export default gql`
  query HomeScreen($locale: String!) {
    productsCollection(locale: $locale, where: { isHighlighted: true }) {
      items {
        sys {
          id
        }
        title
        image {
          url
        }
      }
    }
  }
`
