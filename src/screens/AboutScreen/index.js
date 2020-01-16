import React from 'react'
import { Platform, Text, View } from 'react-native'
import PrimaryButton from '../../components/PrimaryButton'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const AboutScreen = () => {
  const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
  })

  // render

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.lastInstructions}>{instructions}</Text>
      <PrimaryButton route={{ routeName: 'Modal' }} title="Modal example" />
    </View>
  )
}

export default withMemo()(AboutScreen)
