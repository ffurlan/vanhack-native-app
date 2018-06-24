import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import DishListItem from '../ListItem/DishListItem';


const dishesList = props => {

    return (
        <FlatList 
            style={styles.listContainer}
            data={props.dishes}
            renderItem={(info) => (
                <DishListItem 
                    name={info.item.description}
                    value={info.item.value}
                    image={null}
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

export default dishesList;