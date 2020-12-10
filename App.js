import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';
import Input from './components/Input';

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addHandler = (taskName) => {
    setTasks(prevTasks => [...prevTasks, { id: uuid.v4(), value: taskName }]);
  }

  const deleteHandler = (taskId) => {
    setTasks(prevTasks => [...prevTasks.filter(item => item.id !== taskId)])
  }

  return (
    <View style={styles.container}>
      <Input addTask={addHandler}/>
      <FlatList 
        data={tasks} 
        keyExtractor={(item, index)=> item.id}
        renderItem={itemData => <ListItem title={itemData.item.value} deleteTask={()=> deleteHandler(itemData.item.id)} />}     
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  list: { 
    marginTop: 10 
  }
});

