import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import AppContainer from './navigators'
import client from './services/graphql/client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  )
}

export default App
