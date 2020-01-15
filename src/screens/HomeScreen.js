import React, { useCallback } from 'react'
import { Button, Text, View } from 'react-native'
import withMemo from '../decorators/WithMemo'
import styles from '../styles'

const HomeScreen = props => {
  const { navigation } = props

  // memo

  const onButtonPress = useCallback(() => {
    navigation.navigate('About', { name: 'SMU' })
  }, [navigation])

  // render

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button onPress={onButtonPress} title="About" />
    </View>
  )
}

export default withMemo()(HomeScreen)
