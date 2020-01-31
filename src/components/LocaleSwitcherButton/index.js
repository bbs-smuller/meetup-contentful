import React, { useCallback, useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import { GlobalContext } from '../../contexts'
import { colors } from '../../theme'
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

  const activeColor = locale === globalContext.locale ? colors.black : colors.darkMediumGray

  // render

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ color: activeColor, ...styles.text }}>{globalContext.config.labels[`locale_${locale}`]}</Text>
    </TouchableOpacity>
  )
}

LocaleSwitcherButton.propTypes = {
  locale: PropTypes.string.isRequired,
}

export default withMemo()(withNavigation(LocaleSwitcherButton))
