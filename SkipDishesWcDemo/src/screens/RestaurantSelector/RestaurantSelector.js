import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { getRestaurants, authLogout, selectRestaurant } from '../../store/actions/index';

import RestaurantList from '../../components/RestaurantList/RestaurantList';


class RestaurantSelector extends Component{
    state = {
        searchTerm: ''
    }
    
    constructor(props){
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentDidMount(){
        this.props.onLoadRestaurants();
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress"){
            if (event.id === "logout"){
                this.props.onLogout();
            }
        }
    }

    itemSelectedHandler = key => {
        const selRest = this.props.restaurants.find(rest => {
            return rest.key === key;
        });
        this.props.onSelectRestaurant(selRest);
    }

    placesSearchHandler = () => {
    }

    render(){
        if (this.props.restaurants.length === 0){
            return <View style={styles.container}><ActivityIndicator /></View>;
        }

        let filteredRestaurants = this.props.restaurants;
        let searchTerm = this.state.searchTerm;
        if (searchTerm !== ""){
            filteredRestaurants = this.props.restaurants.filter(item => 
                item.display_name.toUpperCase().includes(searchTerm.toUpperCase())
            )
        }
        return (
            <View style={styles.container}>
              <View style={styles.searchSection}>
                  <Icon style={styles.searchIcon} name="ios-search" color="#fff"  size={20} />
                  <TextInput
                    value={this.state.searchTerm}
                    onChangeText={val => this.setState({ searchTerm: val })}
                    placeholder="Filter restaurants"
                    placeholderTextColor="#fff"
                    style={styles.input}
                  />
              </View>
                <RestaurantList restaurants={filteredRestaurants} onItemSelected={this.itemSelectedHandler} />
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
        restaurants: state.restaurants.restaurants
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadRestaurants: () => dispatch(getRestaurants()),
        onLogout: () => dispatch(authLogout()),
        onSelectRestaurant: (restaurant) => dispatch(selectRestaurant(restaurant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSelector);