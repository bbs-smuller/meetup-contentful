import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import PageScreen from '../screens/PageScreen'
import ProductCategoriesScreen from '../screens/ProductCategoriesScreen'
import ProductCategoryScreen from '../screens/ProductCategoryScreen'
import ProductScreen from '../screens/ProductScreen'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
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
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'normal',
        fontFamily: 'Bangers',
        letterSpacing: 3,
      },
    },
  },
)

export default createAppContainer(AppNavigator)
