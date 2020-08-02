import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native'
import Navigation from './navigation/Navigation'
// import CreateTask from './screens/CreateTask'

function App(){
  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        {/* <CreateTask /> */}
        <Navigation />
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
