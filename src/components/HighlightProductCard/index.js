import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import ContentfulImage from '../ContentfulImage'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const HighlightProductCard = props => {
  const { navigation, item } = props

  // layout

  const width = 80
  const height = 80

  // memo

  const goToProduct = useCallback(() => {
    navigation.navigate('Product', { id: item.sys.id })
  }, [navigation, item.sys.id])

  // render

  return (
    <TouchableOpacity onPress={goToProduct} style={styles.container}>
      <ContentfulImage url={item.image.url} width={width} height={height} params={{ fit: 'thumb' }} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  )
}

HighlightProductCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withMemo()(withNavigation(HighlightProductCard))
