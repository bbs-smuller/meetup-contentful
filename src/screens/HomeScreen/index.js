import React, { useCallback } from 'react'
import { ActivityIndicator, Alert, Button, Text, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import query from '../../services/graphql/queries/configurationCollection'
import styles from './styles'

const HomeScreen = props => {
  const { navigation } = props

  // state

  const { loading, error } = useQuery(query)
  if (error) {
    console.warn('Contentful Query ERROR')
    console.warn(error)
  }

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
    <>
      {loading && <ActivityIndicator size="large" />}
      {!loading && (
        <View style={styles.container}>
          <Text style={styles.title}>HomeScreen</Text>
          <Button onPress={onButtonPress} title="About" />
          <Button onPress={onAlertPress} title="Alert" />
        </View>
      )}
    </>
  )
}

export default withMemo()(HomeScreen)
