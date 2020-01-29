import React, { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import ContentfulImage from '../ContentfulImage'
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
      <ContentfulImage
        url={item.image.url}
        width={160}
        height={160}
        params={{ f: 'center', fit: 'fill', r: 50, bg: 'transparent' }}
      />
    </TouchableOpacity>
  )
}

ProductCategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withMemo()(withNavigation(ProductCategoryCard))
