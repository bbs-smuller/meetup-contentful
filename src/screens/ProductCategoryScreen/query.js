import gql from 'graphql-tag'

export default gql`
  query ProductCategoryScreen($locale: String!, $id: String!) {
    productCategories(locale: $locale, id: $id) {
      sys {
        id
      }
      title
      image {
        url
      }
      description
    }
    productsCollection(locale: $locale) {
      items {
        sys {
          id
        }
        title
        image {
          url
        }
        category {
          sys {
            id
          }
        }
      }
    }
  }
`
