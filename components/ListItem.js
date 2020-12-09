import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
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