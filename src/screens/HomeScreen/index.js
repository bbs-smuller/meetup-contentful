import React, { useCallback, useContext } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import ScreenLoader from '../../components/ScreenLoader'
import HighlightProductCard from '../../components/HighlightProductCard'
import PageLink from '../../components/PageLink'
import ProductCategoryCard from '../../components/ProductCategoryCard'
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

  const goToLocaleSwitcher = useCallback(() => {
    navigation.navigate('LocaleSwitcher')
  }, [navigation])

  const goToProducts = useCallback(() => {
    navigation.navigate('ProductCategories')
  }, [navigation])

  // render

  return (
    <>
      <ScreenLoader loading={loading} error={error} />
      {!loading && !error && (
        <SafeAreaView style={styles.container}>
          <View style={styles.highlightsContainer}>
            <Text style={styles.header}>{globalContext.config.labels.highlightedProducts}</Text>
            <View style={styles.highlights}>
              {data.productsCollection.items.map(item => (
                <HighlightProductCard item={item} key={item.sys.id} />
              ))}
            </View>
          </View>
          <View style={styles.categoriesContainer}>
            <TouchableOpacity onPress={goToProducts}>
              <Text style={styles.header}>{globalContext.config.labels.productCategoriesTitle}</Text>
            </TouchableOpacity>
            <View style={styles.categories}>
              <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
                {globalContext.productCategories.map(item => (
                  <ProductCategoryCard
                    item={item}
                    style={{ marginHorizontal: 32, marginBottom: 32 }}
                    key={item.sys.id}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={goToLocaleSwitcher}>
              <Text style={styles.footerLink}>{globalContext.config.labels.locales}</Text>
            </TouchableOpacity>
            {globalContext.pages.map(page => page.isInMenu && <PageLink item={page} key={page.sys.id} />)}
          </View>
        </SafeAreaView>
      )}
    </>
  )
}

export default withMemo()(HomeScreen)
