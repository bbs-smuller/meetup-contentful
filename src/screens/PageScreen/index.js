import React, { useContext } from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import PageBlock from '../../components/PageBlock'
import ScreenLoader from '../../components/ScreenLoader'
import { GlobalContext } from '../../contexts'
import styles from './styles'
import query from './query'

const PageScreen = props => {
  const { navigation } = props
  const { globalContext } = useContext(GlobalContext)

  // data

  const id = navigation.getParam('id')

  const { loading, error, data } = useQuery(query, {
    variables: {
      id,
      locale: globalContext.locale,
    },
  })

  // render

  return (
    <>
      <ScreenLoader loading={loading} error={error} />
      {!loading && !error && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>{data.pages.title}</Text>
          <ScrollView>
            {data.pages.blocksCollection?.items?.map(item => (
              <PageBlock item={item} key={item.sys.id} />
            ))}
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  )
}

export default withMemo()(PageScreen)
