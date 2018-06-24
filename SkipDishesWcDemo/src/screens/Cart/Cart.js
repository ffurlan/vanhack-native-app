import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import DishesList from '../../components/DishesList/DishesList';

import { addDishToCart } from '../../store/actions/index';


class Cart extends Component{
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

        return (
            <View style={styles.container}>
                <DishesList dishes={this.props.selectedDishes} onItemSelected={this.itemSelectedHandler} />
                <View style={styles.button}>
                        <ButtonWithBackground
                            style={styles.register}
                            color="#29aaf4"
                            onPress={this.checkout}
                        >
                            Order
                        </ButtonWithBackground>
                    </View>
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
      button:{
        flex: 1,
        alignItems: "center"
    },
    register:{
        width:"50%",
        height:50,
        backgroundColor: '#ffae',
        borderRadius: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);