import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const PageLink = props => {
  const { navigation, item } = props

  // memo

  const onPress = useCallback(() => {
    navigation.navigate('Page', { id: item.sys.id })
  }, [navigation, item.sys.id])

  // render

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  )
}

PageLink.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withMemo()(withNavigation(PageLink))
