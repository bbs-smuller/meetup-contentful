import React, { useContext } from 'react'
import { FlatList, Text, SafeAreaView } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import ProductCategoryCard from '../../components/ProductCategoryCard'
import styles from './styles'

const ProductCategoriesScreen = () => {
  const { globalContext } = useContext(GlobalContext)

  // render

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ ...styles.header, marginBottom: 64 }}>{globalContext.config.labels.productCategoriesTitle}</Text>
      <FlatList
        data={globalContext.productCategories}
        renderItem={({ item }) => <ProductCategoryCard item={item} style={{ marginBottom: 32 }} />}
        keyExtractor={item => item.sys.id}
      />
    </SafeAreaView>
  )
}

export default withMemo()(ProductCategoriesScreen)
