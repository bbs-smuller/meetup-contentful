import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'

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
  },
  {
    initialRouteName: 'Home',
  },
)

export default createAppContainer(AppNavigator)
