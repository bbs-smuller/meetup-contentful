import React, { useMemo } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import withMemo from '../../decorators/WithMemo'

const ContentfulImage = props => {
  const { url, width, height, params } = props

  // https://www.contentful.com/developers/docs/references/images-api/#/reference/image-manipulation
  const transformer = {
    w: width,
    h: height,
    fm: 'png',
    // fl: 'progressive',
    ...params,
  }

  // memo

  const apiUrl = useMemo(() => {
    return `${url}?${queryString.stringify(transformer)}`
  }, [url, transformer])

  console.log({ apiUrl })

  // render

  return <Image source={{ uri: apiUrl }} style={{ width, height }} />
}

ContentfulImage.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  params: PropTypes.object,
}

ContentfulImage.defaultProps = {
  params: {},
}

export default withMemo()(ContentfulImage)
