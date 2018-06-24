import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

import DishesList from '../../components/DishesList/DishesList';

import { addDishToCart } from '../../store/actions/index';


class Order extends Component{
    state = {
        searchTerm: '',
        selectedDishes: []
    }
    
    static navigatorStyle = {
        navBarButtonColor: "#fff"
      };
    
      constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
      }

    onNavigatorEvent = event => {
        if (event.type === "ScreenChangedEvent"){
            if (event.id === "willAppear"){
                
            }
        }
        if (event.type === "NavBarButtonPress"){
            if (event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }

    itemSelectedHandler = key => {

        const selDish = this.props.selectedRestaurant.dishes.find(dish => {
            return dish.key === key;
        });

        this.props.onAddDish(selDish)
    }

    placesSearchHandler = () => {
    }

    render(){
        let dishes = _.difference(this.props.selectedRestaurant.dishes, this.props.selectedDishes);

        return (
            <View style={styles.container}>
                <DishesList dishes={dishes} onItemSelected={this.itemSelectedHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: '#1f1f1f',
        borderRadius: 20,
        paddingTop: 20,
        borderTopWidth: 10
      },
      searchIcon: {
          padding: 10,
      },
      input: {
          color: '#fff',
          borderRadius: 10,
          width: "100%",
      },
})

const mapStateToProps = state => {
    return {
        selectedRestaurant: state.restaurants.currentRestaurant,
        selectedDishes: state.restaurants.selectedDishes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddDish: (dish) => dispatch(addDishToCart(dish))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);