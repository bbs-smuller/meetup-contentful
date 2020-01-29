import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const ProductCategoryScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>ProductCategoryScreen</Text>
    </SafeAreaView>
  )
}

export default withMemo()(ProductCategoryScreen)
