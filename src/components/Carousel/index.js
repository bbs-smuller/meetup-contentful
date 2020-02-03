import React from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import ContentfulImage from '../ContentfulImage'

const Carousel = props => {
  const { images } = props

  // layout

  const { width } = Dimensions.get('window')
  const height = width * 0.8

  // render

  return (
    <>
      {images.length > 0 && (
        <View style={{ width, height }}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
            {images.map(image => (
              <ContentfulImage url={image} width={width} height={height} params={{ fit: 'crop' }} key={image} />
            ))}
          </ScrollView>
        </View>
      )}
    </>
  )
}

Carousel.propTypes = {
  images: PropTypes.array,
}

Carousel.defaultProps = {
  images: [],
}

export default withMemo()(Carousel)
