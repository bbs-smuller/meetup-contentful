import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import ScreenLoader from '../../components/ScreenLoader'
import { formatDate } from '../../helpers/DateHelper'
import contentfulDeliveryApi from '../../services/Contentful/delivery'
import query from './query'
import styles from './styles'

const HomeScreen = props => {
  const { navigation } = props
  const [locales, setLocales] = useState(null)
  const { globalContext, setGlobalContext } = useContext(GlobalContext)

  // async

  const { loading, error, data } = useQuery(query, {
    variables: {
      locale: 'fr-FR',
    },
  })

  useEffect(() => {
    contentfulDeliveryApi
      .get('/locales')
      .then(response => {
        setLocales(response.data.items.map(item => item.code))
      })
      .catch(err => {
        console.warn(err)
      })
  }, [])

  // context

  useEffect(() => {
    if (!loading && !error && data && locales) {
      setGlobalContext({
        locale: 'fr-FR',
        locales,
        config: data.configurationCollection.items[0],
        pages: data.pagesCollection.items,
        productCategories: data.productCategoriesCollection.items,
      })
    }
  }, [loading, error, data, locales, setGlobalContext])

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
    <>
      <ScreenLoader loading={loading} error={error} />
      {Boolean(globalContext) && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>{`HomeScreen ${globalContext.config.title}`}</Text>
          <Text>{formatDate(globalContext.config.meetupDate, globalContext.locale)}</Text>
          <Text>{JSON.stringify(globalContext.locale)}</Text>
          <Button onPress={goToLocaleSwitcher} title="Locale switcher" />
          <Button onPress={goToProducts} title="Products" />
          <Button onPress={goToLegals} title="Legals" />
        </SafeAreaView>
      )}
    </>
  )
}

export default withMemo()(HomeScreen)
