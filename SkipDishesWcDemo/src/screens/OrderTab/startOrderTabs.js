import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startOrderTabs = () => {
    Promise.all([ 
        Icon.getImageSource(Platform.OS === "ios" ? "ios-restaurant" : "md-restaurant", 30),
        Icon.getImageSource(Platform.OS === "ios" ?  "ios-cart" : "md-cart", 30),
        Icon.getImageSource(Platform.OS === "ios" ?  "ios-menu": "md-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({      
            tabs: [
                {
                    screen: 'skipDemo.Order',
                    label: 'Restaurant Items',
                    title: 'Restaurant Items',
                    icon: sources[0],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    },
                    navigatorStyle:{
                        navBarBackgroundColor: "#242938",
                        navBarTextColor: "#fff",
                        screenBackgroundColor: "black"
                    }
                },
                {
                    screen: 'skipDemo.Cart',
                    label: 'My Cart',
                    title: 'My Cart',
                    icon: sources[1],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    },
                    navigatorStyle:{
                        navBarBackgroundColor: "#242938",
                        navBarTextColor: "#fff",
                        screenBackgroundColor: "black"
                    }
                },
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "#1392c0",
                tabBarBackgroundColor: "#121419"
            },
            drawer: {
                left:{
                    screen: "skipDemo.SideDrawer"
                }
            },
            appStyle:{
                tabBarSelectedButtonColor: "#1392c0",
                tabBarBackgroundColor: "#121419"
            }
        });
    })
}

export default startOrderTabs;

