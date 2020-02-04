import React, { useCallback } from 'react'
import { TouchableOpacity, ViewPropTypes } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import ContentfulImage from '../ContentfulImage'
import styles from './styles'

const ProductCategoryCard = props => {
  const { navigation, item, style } = props

  // memo

  const onPress = useCallback(() => {
    navigation.navigate('ProductCategory', { id: item.sys.id })
  }, [navigation, item.sys.id])

  // render

  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...style }}>
      <ContentfulImage
        url={item.image.url}
        width={120}
        height={120}
        params={{ f: 'center', fit: 'pad', r: 50, bg: 'transparent' }}
      />
    </TouchableOpacity>
  )
}

ProductCategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
  style: ViewPropTypes.style,
}

ProductCategoryCard.defaultProps = {
  style: null,
}

export default withMemo()(withNavigation(ProductCategoryCard))
