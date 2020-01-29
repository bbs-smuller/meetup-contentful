import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>ProductScreen</Text>
    </SafeAreaView>
  )
}

export default withMemo()(ProductScreen)
