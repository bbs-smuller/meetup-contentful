import React, { useCallback, useContext, useMemo } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import ScreenLoader from '../../components/ScreenLoader'
import ContentfulImage from '../../components/ContentfulImage'
import Markdown from '../../components/Markdown'
import styles from './styles'
import query from './query'

const ProductScreen = props => {
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

  // memo

  const product = useMemo(() => {
    return data?.products ? data.products : null
  }, [data])

  const onPress = useCallback(() => {
    console.log(`Buy product on Shopify`)
  }, [])

  // render

  return (
    <>
      <ScreenLoader loading={loading} error={error} />
      {product && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>{product.title}</Text>
          <Text style={styles.subtitle}>{product.category.title}</Text>
          {product.price && (
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{`${product.price} €`}</Text>
            </View>
          )}
          <ScrollView>
            <View style={styles.imageContainer}>
              <ContentfulImage url={product.image.url} width={240} height={240} params={{ fit: 'pad' }} />
            </View>
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
              <Text style={styles.button}>{globalContext.config.labels.productBuy}</Text>
            </TouchableOpacity>
            {product.description && <Markdown text={product.description} />}
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  )
}

export default withMemo()(ProductScreen)
