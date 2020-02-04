import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import ContentfulImage from '../ContentfulImage'
import styles from './styles'

const ProductCard = props => {
  const { navigation, item } = props

  // memo

  const onPress = useCallback(() => {
    navigation.navigate('Product', { id: item.sys.id })
  }, [navigation, item.sys.id])

  // render

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ContentfulImage
        url={item.image.url}
        width={160}
        height={160}
        params={{ f: 'center', fit: 'pad', r: 50, bg: 'transparent' }}
      />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  )
}

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withMemo()(withNavigation(ProductCard))
