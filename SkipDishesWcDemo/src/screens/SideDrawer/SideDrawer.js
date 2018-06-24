import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import { authLogout, redirectToRestaurants } from '../../store/actions/index';

import logo from '../../assets/logo.png';

class SideDrawer extends Component {
    changeCompanyHandler = () => {
        this.props.onClearShareholder();
        this.props.onChangeCompany();
    };

    render(){
        return (
            <View style={[ styles.container, { width: Dimensions.get("window").width * 0.8 }]}>
                <View style={{marginLeft: 8}}>
                    <Image source={logo} style={styles.image} />
                </View>
                <TouchableOpacity onPress={() => this.props.onRedirectToRestaurant()}>
                    <View style={styles.drawerItem}>
                        <Icon name={Platform.OS === "ios" ? "ios-restaurant-outline" : "md-restaurant"} size={30} color="#fff" style={styles.drawerItemIcon} />
                        <Text style={styles.textIconStyle}>Restaurants</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.onOpenHolders()}>
                    <View style={styles.drawerItem}>
                        <Icon name={Platform.OS === "ios" ? "ios-reorder-outline" : "md-freorder"} size={30} color="#fff" style={styles.drawerItemIcon} />
                        <Text style={styles.textIconStyle}>My Orders</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onLogout}>
                    <View style={styles.drawerItem}>
                        <Icon name={Platform.OS === "ios" ? "ios-log-out" : "md-log-out"} size={30} color="#fff" style={styles.drawerItemIcon} />
                        <Text style={styles.textIconStyle}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 50,
        backgroundColor: "#121419",
        flex: 1
    },
    drawerItem:{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 30,
        backgroundColor: "#121419"
    },
    drawerItemIcon:{
        marginLeft: 10
    },
    image:{
        width: 76,
        height: 28,
    },
    textIconStyle:{
        color: "#fff", 
        marginLeft: 8
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authLogout()),
        onRedirectToRestaurant: () => dispatch(redirectToRestaurants())
    }
}

export default connect(null, mapDispatchToProps)(SideDrawer);