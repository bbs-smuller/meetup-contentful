import React from 'react'
import { NativeModules, Platform } from 'react-native'
import AppNavigator from './navigators'

const Init = () => {
  const locale = Platform.select({
    ios: NativeModules.SettingsManager.settings.AppleLocale,
    android: NativeModules.I18nManager.localeIdentifier,
  })

  console.log({ locale })

  return <AppNavigator />
}

export default Init
