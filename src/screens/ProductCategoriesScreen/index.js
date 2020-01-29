import React, { useContext } from 'react'
import { Text, SafeAreaView } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../GlobalContext'
import styles from './styles'

const ProductCategoriesScreen = () => {
  const { globalContext } = useContext(GlobalContext)

  return (
    <SafeAreaView>
      <Text style={styles.text}>{`ProductCategoriesScreen ${globalContext.config.title}`}</Text>
    </SafeAreaView>
  )
}

export default withMemo()(ProductCategoriesScreen)
