import { StyleSheet } from 'react-native'
import theme, { colors } from '../../theme'

export default StyleSheet.create({
  container: theme.container,
  header: theme.header,
  subtitle: {
    fontFamily: 'Raleway',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  priceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  price: {
    marginLeft: 16,
    padding: 5,
    fontFamily: 'Raleway',
    color: colors.white,
    backgroundColor: colors.darkMediumGray,
  },
  imageContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginHorizontal: 32,
    marginBottom: 16,
  },
  button: {
    fontFamily: 'Bebas Neue',
    color: colors.white,
    backgroundColor: colors.darkMediumGray,
    paddingVertical: 16,
    paddingHorizontal: 48,
  },
})
