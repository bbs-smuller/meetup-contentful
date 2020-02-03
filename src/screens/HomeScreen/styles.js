import { StyleSheet } from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
  container: theme.container,
  header: theme.header,
  highlights: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
