import gql from 'graphql-tag'

export default gql`
  query GlobalContext($locale: String!) {
    configurationCollection(locale: $locale) {
      items {
        title
        meetupDate
        labels
      }
    }
    pagesCollection(locale: $locale, order: [title_ASC]) {
      items {
        sys {
          id
        }
        title
        isInMenu
      }
    }
    productCategoriesCollection(locale: $locale, order: [title_ASC]) {
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
