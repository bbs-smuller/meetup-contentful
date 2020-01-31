import React, { useMemo, useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './services/GraphQL/client'
import { GlobalContext } from './contexts'
import Init from './Init'

const App = () => {
  const [globalContext, setGlobalContext] = useState(null)
  const value = useMemo(() => ({ globalContext, setGlobalContext }), [globalContext, setGlobalContext])

  return (
    <ApolloProvider client={client}>
      <GlobalContext.Provider value={value}>
        <Init />
      </GlobalContext.Provider>
    </ApolloProvider>
  )
}

export default App
