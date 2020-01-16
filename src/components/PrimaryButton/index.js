import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const PrimaryButton = props => {
  const { navigation, onPress, route, title } = props

  // memo

  const onButtonPress = useCallback(() => {
    if (route.routeName) {
      navigation.navigate(route)
    } else {
      onPress()
    }
  }, [navigation, onPress, route])

  // render

  return (
    <TouchableOpacity onPress={onButtonPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

PrimaryButton.propTypes = {
  onPress: PropTypes.func,
  route: PropTypes.object,
  title: PropTypes.string,
}

PrimaryButton.defaultProps = {
  onPress: () => {},
  route: {},
  title: 'OK',
}

export default withMemo()(withNavigation(PrimaryButton))
