import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

class ViewTask extends React.Component{


  render(){
    return(
      <View style={styles.container}>
        <Text>View Task</Text>
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

export default ViewTask