import React, { useCallback } from 'react'
import { Button } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'

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

  return <Button onPress={onButtonPress} title={title} color="#6b52ae" />
}

PrimaryButton.propTypes = {
  onPress: PropTypes.func,
  route: PropTypes.object,
  title: PropTypes.string,
}

PrimaryButton.defaultProps = {
  onPress: () => {
    console.log('PrimaryButton pressed')
  },
  route: {},
  title: 'OK',
}

export default withMemo()(withNavigation(PrimaryButton))
