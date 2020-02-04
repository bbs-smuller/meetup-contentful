import React, { useContext, useMemo } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import ProductCard from '../../components/ProductCard'
import ScreenLoader from '../../components/ScreenLoader'
import { GlobalContext } from '../../contexts'
import styles from './styles'
import query from './query'
import reducer from './reducer'

const ProductCategoryScreen = props => {
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

  const items = useMemo(() => {
    return reducer(data, id)
  }, [data, id])

  // render

  return (
    <>
      <ScreenLoader loading={loading} error={error} />
      {!loading && !error && (
        <SafeAreaView>
          <Text style={styles.header}>{data.productCategories.title}</Text>

          {data.productCategories.description && (
            <ScrollView style={styles.descriptionContainer}>
              <Text style={styles.description}>{data.productCategories.description}</Text>
            </ScrollView>
          )}
          <FlatList
            data={items}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={item => item.sys.id}
          />
        </SafeAreaView>
      )}
    </>
  )
}

export default withMemo()(ProductCategoryScreen)
