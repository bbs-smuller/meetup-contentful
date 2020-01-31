import { createContext } from 'react'
import gql from 'graphql-tag'

export const query = gql`
  query globalContext($locale: String!) {
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

export const GlobalContext = createContext(null)
