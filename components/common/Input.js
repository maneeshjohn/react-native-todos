import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

class Input extends Component {

  render(){
    return(
      <TextInput
        style={{...styles.input, ...this.props.customStyle}}
        placeholder={this.props.placeholder}
        placeholderTextColor="#999"
        value={this.props.value}
        // onChangeText={this.props.onChange}
        onChange={(value) => this.props.onChange(value, this.props.name)}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: '4%',
    borderRadius: 100,
    color: '#999',
    marginBottom: '5%',
    textAlign: 'center'
  }
})

export default Input