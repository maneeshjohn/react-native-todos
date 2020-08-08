import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import store from '../redux/store'
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
    // this.setState({ users: response.data })
    store.dispatch({ type: 'ADD_USERS', newData: response.data })
  }

  renderUsers = () => {
    console.log(this.props.users)
    return this.props.users.userList.map(item => {
      return(
        <View key={item.email}>
          <Text>{item.email}</Text>
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

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getState: () => dispatch(fetchUserAxios())
//   }
// }

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

export default connect(mapStateToProps)(ListTasks)