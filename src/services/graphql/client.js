import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT, CONTENTFUL_DELIVERY_TOKEN } from 'react-native-dotenv'

const link = new HttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`,
  headers: {
    Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
    'Content-Type': 'application/json',
  },
})
const cache = new InMemoryCache()

export default new ApolloClient({
  link,
  cache,
})
