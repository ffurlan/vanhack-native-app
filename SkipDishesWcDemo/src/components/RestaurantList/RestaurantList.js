import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';
import placeholderCompanyLogo from '../../assets/placeholder-company-logo.png';


const restaurantList = props => {

    return (
        <FlatList 
            style={styles.listContainer}
            data={props.restaurants}
            renderItem={(info) => (
                <ListItem 
                    name={info.item.display_name}
                    image={placeholderCompanyLogo}
                    onItemPressed={() => props.onItemSelected(info.item.key)} 
                />
            )}
        ></FlatList>
    );
};

const styles = StyleSheet.create({
    listContainer:{
      width: "100%",
      borderTopWidth: 10
    }
  });

export default restaurantList;