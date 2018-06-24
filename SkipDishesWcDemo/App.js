import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import RestaurantSelectorScreen from './src/screens/RestaurantSelector/RestaurantSelector';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import OrderScreen from './src/screens/Order/Order';
import ChartScreen from './src/screens/Chart/Chart';

import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent("skipDemo.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("skipDemo.RestaurantSelector", () => RestaurantSelectorScreen, store, Provider);
Navigation.registerComponent("skipDemo.Order", () => OrderScreen, store, Provider);
Navigation.registerComponent("skipDemo.Chart", () => ChartScreen, store, Provider);
Navigation.registerComponent("skipDemo.SideDrawer", () => SideDrawer, store, Provider);

//Start a App
Navigation.startSingleScreenApp({
  screen:{
    screen: 'skipDemo.AuthScreen',
    navigationBarStyle : {navBarHidden: true },
    navigatorStyle:{
      screenBackgroundColor: "black"
    }
  }
});

export default () => 
  Navigation.startSingleScreenApp({
    screen:{
      screen: 'skipDemo.AuthScreen',
      navigationBarStyle : {navBarHidden: true },
      navigatorStyle:{
        screenBackgroundColor: "black"
      }
    }
});