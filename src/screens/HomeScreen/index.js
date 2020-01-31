import React, { useCallback, useContext } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import { formatDate } from '../../helpers/DateHelper'
import styles from './styles'

const HomeScreen = props => {
  const { navigation } = props
  const { globalContext } = useContext(GlobalContext)

  // memo

  const goToLocaleSwitcher = useCallback(() => {
    navigation.navigate('LocaleSwitcher')
  }, [navigation])

  const goToProducts = useCallback(() => {
    navigation.navigate('ProductCategories')
  }, [navigation])

  const goToLegals = useCallback(() => {
    navigation.navigate('Pages', { id: '5rG2MavTiuhVZM6gkpXVIe' })
  }, [navigation])

  // render

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{`HomeScreen ${globalContext.config.title}`}</Text>
      <Text>{formatDate(globalContext.config.meetupDate, globalContext.locale)}</Text>
      <Text>{JSON.stringify(globalContext.locale)}</Text>
      <Button onPress={goToLocaleSwitcher} title="Locale switcher" />
      <Button onPress={goToProducts} title="Products" />
      <Button onPress={goToLegals} title="Legals" />
    </SafeAreaView>
  )
}

export default withMemo()(HomeScreen)
