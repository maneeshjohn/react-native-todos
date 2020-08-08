import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native'
import store from './redux/store'
import { Provider } from 'react-redux'
import Navigation from './navigation/Navigation'
// import CreateTask from './screens/CreateTask'

function App(){
  // console.log(store.getState())
  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        {/* <CreateTask /> */}
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaView>
      <SafeAreaView style={{flex: 0, backgroundColor: 'white'}}>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2ecc71'
  }
})

export default App
