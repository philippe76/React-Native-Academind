import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import uuid from 'react-native-uuid'

export default function App() {

  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

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
        <Button title="ADD" color="#85AFE5" onPress={addHandler}/>
      </View>
      <View>
        {tasks.map((item, index) => 
          <View style={styles.listItem}>
            <Text key={index + Math.round(Math.random()*10)}>{item}</Text>
          </View>
        )}
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffe4e1',
    borderColor: "#928C8C",
    borderColor: "darkgrey",
    borderWidth: 2,
    borderRadius: 5,
  }
});

