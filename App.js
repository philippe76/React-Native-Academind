import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import uuid from 'react-native-uuid'

export default function App() {

  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([])

  const inputHandler = (text) => {
    setInputText(text)
  }

  const addHandler = () => {
    setTasks(prevTasks => [...prevTasks, inputText]);
    setInputText('')
  }

  return (
    <View style={{padding: 50}}>
      <View style={styles.container}>
        <TextInput 
          placeholder="Things To Do ..." 
          style={styles.input} 
          onChangeText={inputHandler}
          value={inputText}
        />
        <Button title="ADD" color="#b0c4de" onPress={addHandler}/>
      </View>
      <View>
        {tasks.map(item => <Text key={uuid.v4()}>{item}</Text>)}
      </View>
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
});

