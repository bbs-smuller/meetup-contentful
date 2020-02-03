import React, { useCallback } from 'react'
import { Dimensions, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import ContentfulImage from '../ContentfulImage'
import styles from '../../screens/HomeScreen/styles'
import withMemo from '../../decorators/WithMemo'

const HighlightProductCard = props => {
  const { navigation, product } = props

  // layout

  const { width } = Dimensions.get('window') / 3
  const height = width * 0.8

  // memo

  const goToProduct = useCallback(() => {
    navigation.navigate('Product', { id: product.sys.id })
  }, [navigation, product.sys.id])

  // render

  return (
    <TouchableOpacity onPress={goToProduct}>
      <ContentfulImage url={product.image.url} width={width} height={height} />
      <Text style={styles.text}>{product.title}</Text>
    </TouchableOpacity>
  )
}

HighlightProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default withMemo()(withNavigation(HighlightProductCard))
