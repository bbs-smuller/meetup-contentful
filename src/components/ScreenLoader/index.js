import React from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native'
import PropTypes from 'prop-types'
import withMemo from '../../decorators/WithMemo'
import styles from './styles'

const ScreenLoader = props => {
  const { loading, error } = props

  return (
    <>
      {loading && (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" />
        </SafeAreaView>
      )}
      {error.length > 0 && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.error}>Error</Text>
        </SafeAreaView>
      )}
    </>
  )
}

ScreenLoader.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.array,
}

ScreenLoader.defaultProps = {
  loading: true,
  error: [],
}

export default withMemo()(ScreenLoader)
