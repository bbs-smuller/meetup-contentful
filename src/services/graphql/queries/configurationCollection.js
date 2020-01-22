import gql from 'graphql-tag'

export default gql`
  query ConfigurationCollection {
    configurationCollection {
      items {
        sys {
          id
        }
        backendTitle
        meetupDate
      }
    }
  }
`
