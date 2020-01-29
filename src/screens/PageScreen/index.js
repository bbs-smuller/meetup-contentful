import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const PageScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>PageScreen</Text>
    </SafeAreaView>
  )
}

export default withMemo()(PageScreen)
