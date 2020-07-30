import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

class AppButton extends Component{

  render(){
    return(
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2ecc71',
    padding: '5%',
    borderRadius: 100
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  }
})

export default AppButton