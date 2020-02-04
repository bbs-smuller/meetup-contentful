import gql from 'graphql-tag'

export default gql`
  query ProductScreen($locale: String!, $id: String!) {
    products(locale: $locale, id: $id) {
      sys {
        id
      }
      title
      isHighlighted
      shopifyId
      price
      image {
        url
      }
      description
      category {
        title
        image {
          url
        }
      }
      relatedProductsCollection(locale: $locale) {
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
  }
`
