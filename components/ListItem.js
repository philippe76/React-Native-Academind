import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const ListItem = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.listItem} >
                <Text>{props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.deleteTask} style={styles.button}>
                <Text>X</Text>
            </TouchableOpacity>     
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ffe4e1',
        borderColor: "#928C8C",
        borderColor: "darkgrey",
        borderWidth: 2,
        borderRadius: 5,
        width: '75%'
    },
    button: {
        padding: 10,
        marginVertical: 10,
        marginLeft: 10,
        backgroundColor: '#ea6969',
        borderColor: "#928C8C",
        borderColor: "darkgrey",
        borderWidth: 2,
        borderRadius: 5,
        width: '21%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default ListItem