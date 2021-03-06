import { createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen/AuthLoadingScreen';
import SingInScreen from './src/screens/SingIn/SingIn';
import SingUpScreen from './src/screens/SingUp/SingUp';
import HomeScreen from './src/screens/Home/Home';
import ChatScreen from './src/screens/Chat/Chat';
//import Location from './src/screens/Location/Location';
import Camera from './src/screens/Camera/Camera';
import Map from './src/screens/Map/Map';
import Profile from './src/screens/Profile/Profile';
import ProfileEdit from './src/screens/Profile/ProfileEdit/ProfileEdit';
import Lists from './src/screens/Lists/Lists';
import Settings from './src/screens/Settings/Settings.js';
const AppStack = createDrawerNavigator({
  Home: HomeScreen,
  Chat: ChatScreen,
  Camera: Camera,
  Map: Map,
  Profile: Profile,
  ProfileEdit: ProfileEdit,
  Lists: Lists,
  Settings: Settings
});
const AuthStack = createBottomTabNavigator({
  SingIn: SingInScreen,
  SingUp: SingUpScreen
});
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
