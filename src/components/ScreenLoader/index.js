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
      {!loading && Boolean(error) && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.error}>{JSON.stringify(error)}</Text>
        </SafeAreaView>
      )}
    </>
  )
}

ScreenLoader.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
}

ScreenLoader.defaultProps = {
  loading: true,
  error: null,
}

export default withMemo()(ScreenLoader)
