import React, { useCallback } from 'react'
import { Button } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'

const PrimaryButton = props => {
  const { navigation, screen, title } = props

  // memo

  const onButtonPress = useCallback(() => {
    navigation.navigate(screen)
  }, [navigation, screen])

  // render

  return <Button onPress={onButtonPress} title={title} color="#6b52ae" />
}

PrimaryButton.propTypes = {
  screen: PropTypes.string.isRequired,
  title: PropTypes.string,
}

PrimaryButton.defaultProps = {
  title: 'OK',
}

export default withMemo()(withNavigation(PrimaryButton))
