import React, { useMemo, useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import AppContainer from './navigators'
import client from './services/GraphQL/client'
import { GlobalContext } from './GlobalContext'

const App = () => {
  const [globalContext, setGlobalContext] = useState(null)
  const value = useMemo(() => ({ globalContext, setGlobalContext }), [globalContext, setGlobalContext])

  return (
    <ApolloProvider client={client}>
      <GlobalContext.Provider value={value}>
        <AppContainer />
      </GlobalContext.Provider>
    </ApolloProvider>
  )
}

export default App
