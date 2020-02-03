import React, { useContext } from 'react'
import { FlatList, Text, SafeAreaView } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import ProductCategoryCard from '../../components/ProductCategoryCard'
import styles from './styles'

const ProductCategoriesScreen = () => {
  const { globalContext } = useContext(GlobalContext)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{globalContext.config.labels.productCategoriesTitle}</Text>
      <FlatList
        data={globalContext.productCategories}
        renderItem={({ item }) => <ProductCategoryCard item={item} style={{ marginBottom: 64 }} />}
        keyExtractor={item => item.sys.id}
        style={styles.list}
      />
    </SafeAreaView>
  )
}

export default withMemo()(ProductCategoriesScreen)
