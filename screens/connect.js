import React from 'react'
import store from '../redux/store'

export const connect = (mapStateToProps) => {
  // console.log(mapStateToProps)
  // console.log(store.getState())
  const newProps = mapStateToProps(store.getState())
  console.log(newProps)
  return function(Component){
    return class ConnectedComponent extends React.Component{
      render() {
        return <Component {...this.props} { ...newProps } />
      }
    }
  }
}