import { Navigation } from 'react-native-navigation';

const startRestaurantSelector = () => {
    Navigation.startSingleScreenApp({
        screen:{
          screen: 'skipDemo.RestaurantSelector',
          title: 'Select a Restaurant',
          navigationBarStyle : {navBarHidden: false },
          navigatorButtons: {
            leftButtons: [
              {
                title: 'Logout', 
                id: 'logout', 
                disableIconTint: true, 
                showAsAction: 'ifRoom', 
                buttonColor: '#fff', 
                buttonFontSize: 14, 
                buttonFontWeight: '600',
              }
            ]
            },
            navigatorStyle:{
                navBarBackgroundColor: "#242938",
                navBarTextColor: "#fff",
                screenBackgroundColor: "black"
            }
        }
    });
}

export default startRestaurantSelector;

