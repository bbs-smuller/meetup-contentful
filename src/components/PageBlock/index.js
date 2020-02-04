import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import ContentfulImage from '../ContentfulImage'
import Markdown from '../Markdown'
import styles from './styles'

const PageBlock = props => {
  const { item } = props

  // render

  return (
    <View style={styles.container}>
      {item.title && <Text style={styles.header}>{item.title}</Text>}
      {item.body && <Markdown text={item.body} />}
      {item.image?.url && (
        <View style={styles.image}>
          <ContentfulImage url={item.image.url} width={240} height={240} params={{ fit: 'pad' }} />
        </View>
      )}
    </View>
  )
}

PageBlock.propTypes = {
  item: PropTypes.object.isRequired,
}

export default withMemo()(PageBlock)
