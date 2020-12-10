import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.listItem} onPress={props.deleteTask}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ffe4e1',
        borderColor: "#928C8C",
        borderColor: "darkgrey",
        borderWidth: 2,
        borderRadius: 5,
    }
})


export default ListItem