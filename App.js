import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';
import Input from './components/Input';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 500);

  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false)

  const addHandler = (taskName) => {
    setTasks(prevTasks => [...prevTasks, { id: uuid.v4(), value: taskName }]);
    setOpenModal(false)
  }

  const deleteHandler = (taskId) => {
    setTasks(prevTasks => [...prevTasks.filter(item => item.id !== taskId)])
  }

  return (
    <View style={styles.container}>
      <Button title='Create Task' onPress={()=>setOpenModal(true)}/>
      <Input addTask={addHandler} isOpen={openModal}/>
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
    flex: 1,
    padding: 50,
    paddingTop: 150,
    backgroundColor: "#3c4044",
  },
  list: { 
    marginTop: 10 
  }
});

