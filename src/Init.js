import React, { useContext, useEffect, useState } from 'react'
import { NativeModules, Platform } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import AppNavigator from './navigators'
import ScreenLoader from './components/ScreenLoader'
import contentfulDeliveryApi from './services/Contentful/delivery'
import { GlobalContext, query } from './contexts'

const Init = () => {
  const [locales, setLocales] = useState(null)
  const { globalContext, setGlobalContext } = useContext(GlobalContext)

  // data

  let defaultLocale = Platform.select({
    ios: NativeModules.SettingsManager.settings.AppleLocale,
    android: NativeModules.I18nManager.localeIdentifier,
  })
  defaultLocale = defaultLocale.indexOf('fr') !== -1 ? 'fr-FR' : 'en-US'
  const locale = globalContext ? globalContext.locale : defaultLocale

  const { loading, error, data } = useQuery(query, {
    variables: {
      locale,
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
        locale,
        locales,
        config: data.configurationCollection.items[0],
        pages: data.pagesCollection.items,
        productCategories: data.productCategoriesCollection.items,
      })
    }
  }, [loading, error, data, locales, setGlobalContext, locale])

  // render

  return (
    <>
      <ScreenLoader loading={loading} error={error} />
      {!loading && Boolean(globalContext) && <AppNavigator />}
    </>
  )
}

export default Init
