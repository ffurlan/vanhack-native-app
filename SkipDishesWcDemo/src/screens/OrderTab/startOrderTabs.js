import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startOrderTabs = () => {
    Promise.all([ 
        Icon.getImageSource(Platform.OS === "ios" ? "ios-people" : "md-people", 30),
        Icon.getImageSource(Platform.OS === "ios" ?  "ios-browsers-outline" : "md-browsers", 30),
        Icon.getImageSource(Platform.OS === "ios" ?  "ios-person-add-outline": "md-person-add", 30),
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
                                icon: sources[3],
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
                    screen: 'skipDemo.Chart',
                    label: 'My Chart',
                    title: 'My Chart',
                    icon: sources[1],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon: sources[3],
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

