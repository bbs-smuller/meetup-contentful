import gql from 'graphql-tag'

export default gql`
  query GlobalContext($locale: String!) {
    configurationCollection(locale: $locale) {
      items {
        title
        meetupDate
      }
    }
    pagesCollection(locale: $locale) {
      items {
        sys {
          id
        }
        title
        isInMenu
      }
    }
    productCategoriesCollection(locale: $locale) {
      items {
        sys {
          id
        }
        title
      }
    }
  }
`
