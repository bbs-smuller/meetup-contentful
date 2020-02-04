import React from 'react'
import { ViewPropTypes, View } from 'react-native'
import PropTypes from 'prop-types'
import { MarkdownView } from 'react-native-markdown-view'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const Markdown = props => {
  const { text, style } = props

  // render

  return (
    <View style={style}>
      <MarkdownView styles={styles}>{text}</MarkdownView>
    </View>
  )
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
}

Markdown.defaultProps = {
  style: null,
}

export default withMemo()(Markdown)
