import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        {/* Título da Aplicação */}
        <Text style={styles.sectionTitle}>Tarefas </Text>
          <View style={styles.quadrado}>

          </View>
          <KeyboardAvoidingView style={styles.writeTaskWrapper}>
              <TextInput style={styles.input} placeholder={'Adicionar tarefa'} value={task} onChangeText={text => setTask(text)}/>
              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
          </KeyboardAvoidingView>
          <ScrollView>
            <View style={styles.items}>
              {/* Aqui fica os container com Tasks! */}
              {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                      <Task text={item} />
                    </TouchableOpacity>
                  )
                })
              }

              {/*<Task text={'Task 1'}/>
              <Task text={'Task 2'}/> */}

            </View>
          </ScrollView>
      </View>
    

      {/* seção de escrita da tarefa */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  }, 
  sectionTitle: {
    fontSize: 30,
    opacity: 0.7,
    color: '#125B50',
    fontWeight: 'bold',
  },
  items: {
    marginBottom: 110,
  },
  writeTaskWrapper: {
    marginTop: -210,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }, 
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
    height: 50,
  }, 
  addWrapper: {
    width: 60, 
    height: 60,
    backgroundColor: '#FFF', 
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center', 
    borderColor: '#c0c0c0',
    borderWidth: 1,
  }, 
  addText: {
  },
  quadrado: {
    width: 800, 
    height: 100,
    marginTop: 120,
    marginLeft: 16,
  }
});
