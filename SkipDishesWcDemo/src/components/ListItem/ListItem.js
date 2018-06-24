import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.image} style={styles.image} />
            <Text style={{color: "#fff"}}>{props.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#1c1f27",
        margin: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    image:{
        marginRight: 8,
        height: 40,
        width: 40
    },
})

export default listItem;