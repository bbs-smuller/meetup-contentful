import gql from 'graphql-tag'

export default gql`
  query PageScreen($locale: String!, $id: String!) {
    pages(locale: $locale, id: $id) {
      sys {
        id
      }
      title
      slidesCollection(locale: $locale) {
        items {
          sys {
            id
          }
          url
        }
      }
      blocksCollection(locale: $locale) {
        items {
          sys {
            id
          }
          title
          body
          image {
            url
          }
        }
      }
    }
  }
`
