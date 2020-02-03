import React, { useCallback, useContext } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import ScreenLoader from '../../components/ScreenLoader'
import ContentfulImage from '../../components/ContentfulImage'
import HighlightProductCard from '../../components/HighlightProductCard'
import query from './query'
import styles from './styles'

const HomeScreen = props => {
  const { navigation } = props
  const { globalContext } = useContext(GlobalContext)

  // data

  const { loading, error, data } = useQuery(query, {
    variables: {
      locale: globalContext.locale,
    },
  })

  // memo

  /*
  const goToLocaleSwitcher = useCallback(() => {
    navigation.navigate('LocaleSwitcher')
  }, [navigation])

  const goToProducts = useCallback(() => {
    navigation.navigate('ProductCategories')
  }, [navigation])
  */

  // render

  return (
    <>
      <ScreenLoader loading={loading} error={error} />
      {!loading && !error && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>{globalContext.config.labels.highlightedProducts}</Text>
          <View style={styles.highlights}>
            {data.productsCollection.items.map(product => (
              <HighlightProductCard product={product} key={product.sys.id} />
            ))}
          </View>
        </SafeAreaView>
      )}
    </>
  )
}

export default withMemo()(HomeScreen)
