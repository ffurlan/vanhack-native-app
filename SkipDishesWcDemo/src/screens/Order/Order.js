import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ActivityIndicator, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';


class Order extends Component{
    state = {
        searchTerm: ''
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
                //this.props.onResetContactInformation();
                //this.props.onLoadContacts(this.props.selectedCompany.id);
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

        const selContact = this.props.contacts.find(contact => {
            return contact.key === key;
        });

        this.props.navigator.push({
            screen: "skipDemo.ContactProfile",
            title: selContact.name,
            passProps:{
                selectedContact: selContact.item
            }
        });
    }

    placesSearchHandler = () => {
    }

    render(){

        return (
            <View style={styles.container}>
              <View style={styles.searchSection}>
                  <Icon style={styles.searchIcon} name="ios-search" color="#fff"  size={20} />
                  <TextInput
                    value={this.state.searchTerm}
                    onChangeText={val => this.setState({ searchTerm: val })}
                    placeholder="Search contacts"
                    placeholderTextColor="#fff"
                    style={styles.input}
                  />
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
})

const mapStateToProps = state => {
    return {
    };
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);