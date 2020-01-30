import React, { useCallback, useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../GlobalContext'
import styles from './styles'

const LocaleSwitcherButton = props => {
  const { navigation, locale } = props
  const { globalContext, setGlobalContext } = useContext(GlobalContext)

  // memo

  const onPress = useCallback(() => {
    setGlobalContext({
      ...globalContext,
      locale,
    })
    navigation.navigate('Home')
  }, [locale, navigation, globalContext, setGlobalContext])

  // render

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{globalContext.config.labels[`locale_${locale}`]}</Text>
    </TouchableOpacity>
  )
}

LocaleSwitcherButton.propTypes = {
  locale: PropTypes.string.isRequired,
}

export default withMemo()(withNavigation(LocaleSwitcherButton))
