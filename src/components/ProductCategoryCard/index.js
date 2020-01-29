import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const ProductCategoryCard = props => {
  const { navigation, item } = props

  // memo

  const onPress = useCallback(() => {
    navigation.navigate('ProductCategory', { id: item.sys.id })
  }, [item.sys.id, navigation])

  // render

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.sys.id}</Text>
    </TouchableOpacity>
  )
}

ProductCategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withMemo()(withNavigation(ProductCategoryCard))
