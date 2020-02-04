import React, { useCallback, useContext, useMemo } from 'react'
import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import ScreenLoader from '../../components/ScreenLoader'
import ContentfulImage from '../../components/ContentfulImage'
import HighlightProductCard from '../../components/HighlightProductCard'
import Markdown from '../../components/Markdown'
import styles from './styles'
import query from './query'

const formatPrice = price => {
  return Number(price).toLocaleString('fr-FR', { minimumFractionDigits: 2 })
}

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
    if (product?.shopifyId) {
      Alert.alert('SHOPIFY', `#${product.shopifyId}`)
    }
  }, [product])

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
              <Text style={styles.price}>{`${formatPrice(product.price)} €`}</Text>
            </View>
          )}
          <ScrollView>
            <View style={styles.imageContainer}>
              <ContentfulImage url={product.image.url} width={320} height={320} params={{ fit: 'pad' }} />
            </View>
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
              <Text style={styles.button}>{globalContext.config.labels.productBuy}</Text>
            </TouchableOpacity>
            {product.description && <Markdown text={product.description} />}
            {product.relatedProductsCollection?.items && (
              <>
                <Text style={{ ...styles.subtitle, marginVertical: 32 }}>
                  {globalContext.config.labels.relatedProductsTitle}
                </Text>
                <View style={styles.relatedProducts}>
                  {product.relatedProductsCollection.items.map(item => (
                    <HighlightProductCard item={item} key={item.sys.id} />
                  ))}
                </View>
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  )
}

export default withMemo()(ProductScreen)
