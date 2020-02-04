import React, { useContext } from 'react'
import { Dimensions, SafeAreaView, ScrollView, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import PageBlock from '../../components/PageBlock'
import ScreenLoader from '../../components/ScreenLoader'
import { GlobalContext } from '../../contexts'
import ContentfulImage from '../../components/ContentfulImage'
import styles from './styles'
import query from './query'

const PageScreen = props => {
  const { navigation } = props
  const { globalContext } = useContext(GlobalContext)

  const { width } = Dimensions.get('window')
  // eslint-disable-next-line radix
  const height = parseInt(width * 0.8)

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
          {data.pages.slidesCollection?.items && (
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator style={styles.slider}>
              {data.pages.slidesCollection?.items?.map(item => (
                <ContentfulImage
                  url={item.url}
                  width={width}
                  height={height}
                  params={{ fit: 'pad' }}
                  key={item.sys.id}
                />
              ))}
            </ScrollView>
          )}
          {data.pages.blocksCollection?.items && (
            <ScrollView>
              {data.pages.blocksCollection?.items?.map(item => (
                <PageBlock item={item} key={item.sys.id} />
              ))}
            </ScrollView>
          )}
        </SafeAreaView>
      )}
    </>
  )
}

export default withMemo()(PageScreen)
