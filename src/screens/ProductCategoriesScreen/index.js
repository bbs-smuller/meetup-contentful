import React, { useContext } from 'react'
import { FlatList, Text, SafeAreaView } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../GlobalContext'
import ProductCategoryCard from '../../components/ProductCategoryCard'
import styles from './styles'

const ProductCategoriesScreen = () => {
  const { globalContext } = useContext(GlobalContext)

  return (
    <SafeAreaView>
      <FlatList
        data={globalContext.productCategories}
        renderItem={({ item }) => <ProductCategoryCard item={item} />}
        keyExtractor={item => item.sys.id}
      />
      <Text style={styles.text}>{`ProductCategoriesScreen ${globalContext.config.title}`}</Text>
    </SafeAreaView>
  )
}

export default withMemo()(ProductCategoriesScreen)
