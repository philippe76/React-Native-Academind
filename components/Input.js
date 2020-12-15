import React, {useState} from 'react';
import {View, TextInput, Button, Modal, StyleSheet } from 'react-native';



const Input = props => {

    const [inputText, setInputText] = useState('');

    const inputHandler = (text) => {
        setInputText(text)  
    }


    return (
        <Modal visible={props.isOpen} animationType='slide'>
            <View style={styles.container}>
                <TextInput 
                    placeholder="Things To Do ..." 
                    style={styles.input} 
                    onChangeText={inputHandler}
                    value={inputText}
                />
                <Button 
                    title="ADD" 
                    color="#85AFE5" 
                    onPress={()=> {
                    props.addTask(inputText);
                    setInputText('');
                    }}
                />
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#3c4044",
    },
    input: {
        borderColor: 'darkgrey',
        borderWidth: 2,
        borderRadius: 5,
        padding: 6,
        width:'70%',
        marginRight: 10,
        "backgroundColor": "white",
    }  
})


export default Input