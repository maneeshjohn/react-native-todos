import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Input from '../components/common/Input'
import AppButton from '../components/common/Button'

class CreateTask extends React.Component{

  constructor(){
    super()
    this.state = {
      title: '',
      task: ''
    }
  }

  handleChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  // handleChangeTask = (i) => {
  //   this.setState({
  //     task: i
  //   })
  // }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <Text style={styles.header}>Create New Task</Text>
          <Input
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
          />
          <Input
            placeholder="Task"
            value={this.state.task}
            onChange={this.handleChange}
            name="task"
          />
          <AppButton title="Submit" />
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
  }
})

export default CreateTask