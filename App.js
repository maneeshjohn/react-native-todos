import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native'
import CreateTask from './screens/CreateTask'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        <CreateTask />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
})

export default App
