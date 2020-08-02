import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/common/Button'

class ListTasks extends React.Component{

  pressHandler = () => {
    this.props.navigation.navigate('CreateTask')
  }

  render(){
    return(
      <View style={styles.container}>
        <Button
          pressHandler={this.pressHandler}
          title="Add Task"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1
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

export default ListTasks