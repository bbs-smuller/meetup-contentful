import React, { useCallback } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import query from '../../services/graphql/queries/configurationCollection'
import styles from './styles'

const HomeScreen = props => {
  const { navigation } = props

  const { loading, error, data } = useQuery(query)

  const onButtonPress = useCallback(() => {
    navigation.navigate('About', { name: 'SMU' })
  }, [navigation])

  return (
    <>
      {loading && <ActivityIndicator size="large" style={styles.loader} />}
      {!loading && error && <Text>Error</Text>}
      {!loading && !error && Boolean(data.configurationCollection) && (
        <View style={styles.container}>
          <Text style={styles.title}>{`HomeScreen ${data.configurationCollection.items[0].meetupDate}`}</Text>
          <Button onPress={onButtonPress} title="About" />
        </View>
      )}
    </>
  )
}

export default withMemo()(HomeScreen)
