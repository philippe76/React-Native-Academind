import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet } from 'react-native';



const Input = props => {

    const [inputText, setInputText] = useState('');

    const inputHandler = (text) => {
        setInputText(text)  
    }


    return (
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
                setInputText('')
                }
                }/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderColor: 'darkgrey',
        borderWidth: 2,
        borderRadius: 5,
        padding: 8,
        width: '80%'    
    }  
})


export default Input