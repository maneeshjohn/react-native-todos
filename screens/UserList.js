import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { fetchUsersAxios } from '../services/services'

class ListTasks extends React.Component{

  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  async componentDidMount(){
    const response = await fetchUsersAxios('/users')
    this.setState({ users: response.data })
  }

  renderUsers = () => {
    return this.state.users.map(user => {
      return(
        <View key={user.email}>
          <Text>{user.email}</Text>
        </View>
      )
    })
  }

  render(){
   
    return(
      <View style={styles.container}>
        {this.renderUsers()}
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