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
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  price: {
    marginLeft: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontFamily: 'Raleway',
    letterSpacing: 2,
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
    letterSpacing: 3,
    color: colors.white,
    backgroundColor: colors.darkMediumGray,
    paddingVertical: 16,
    paddingHorizontal: 48,
  },
  relatedProducts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
