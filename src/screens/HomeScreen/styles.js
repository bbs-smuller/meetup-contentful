import { StyleSheet } from 'react-native'
import theme, { colors } from '../../theme'

export default StyleSheet.create({
  container: {
    ...theme.container,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: theme.header,
  highlightsContainer: {
    backgroundColor: colors.whiteAntiFlash,
    flex: 1,
  },
  highlights: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoriesContainer: {
    backgroundColor: colors.sand,
    flex: 1,
  },
  categories: {
    //
  },
  footerContainer: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerLink: {
    fontFamily: 'Raleway',
  },
})
