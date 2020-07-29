import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

class CreateTask extends React.Component{

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <Text style={styles.header}>Create New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Task"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '5%'
  },
  inputWrapper: {
    paddingHorizontal: '3%',
    paddingVertical: '5%'
  },
  header: {
    fontSize: 20,
    color: '#333',
    marginBottom: '5%',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: '4%',
    borderRadius: 100,
    color: '#999',
    marginBottom: '5%',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#333',
    padding: '5%',
    borderRadius: 100
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  }
})

export default CreateTask