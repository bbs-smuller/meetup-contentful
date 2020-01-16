import React, { useCallback } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const HomeScreen = props => {
  const { navigation } = props

  // memo

  const alertAskMeLater = useCallback(() => {
    console.log('Ask me later pressed')
  }, [])

  const alertCancel = useCallback(() => {
    console.log('Cancel pressed')
  }, [])

  const alertOk = useCallback(() => {
    console.log('OK pressed')
  }, [])

  const onButtonPress = useCallback(() => {
    navigation.navigate('About', { name: 'SMU' })
  }, [navigation])

  const onAlertPress = useCallback(() => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: alertAskMeLater },
        { text: 'OK', onPress: alertOk },
        { text: 'Cancel', onPress: alertCancel, style: 'cancel' },
      ],
      { cancelable: false },
    )
  }, [alertAskMeLater, alertOk, alertCancel])

  // render

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Button onPress={onButtonPress} title="About" />
      <Button onPress={onAlertPress} title="Alert" />
    </View>
  )
}

export default withMemo()(HomeScreen)
