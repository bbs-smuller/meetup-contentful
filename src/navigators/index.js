import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import LocaleSwitcherScreen from '../screens/LocaleSwitcherScreen'
import PageScreen from '../screens/PageScreen'
import ProductCategoriesScreen from '../screens/ProductCategoriesScreen'
import ProductCategoryScreen from '../screens/ProductCategoryScreen'
import ProductScreen from '../screens/ProductScreen'
import { colors } from '../theme'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    LocaleSwitcher: {
      screen: LocaleSwitcherScreen,
    },
    Page: {
      screen: PageScreen,
      path: 'page/:id',
    },
    ProductCategories: {
      screen: ProductCategoriesScreen,
    },
    ProductCategory: {
      screen: ProductCategoryScreen,
      path: 'product-category/:id',
    },
    Product: {
      screen: ProductScreen,
      path: 'product/:id',
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Shopiful',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTintColor: colors.black,
      headerTitleStyle: {
        fontFamily: 'Bebas Neue',
        fontWeight: 'normal',
        letterSpacing: 2,
      },
    },
  },
)

export default createAppContainer(AppNavigator)
