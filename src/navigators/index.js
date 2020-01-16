import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import ModalScreen from '../screens/ModalScreen'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: `My HomeScreen`,
      }),
    },
    About: {
      screen: AboutScreen,
      path: 'about/:name',
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}'s Profile`,
      }),
    },
    Modal: {
      screen: ModalScreen,
      navigationOptions: () => ({
        title: `Modal example`,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6b52ae',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

export default createAppContainer(AppNavigator)
