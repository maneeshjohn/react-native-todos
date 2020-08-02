import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CreateTask from '../screens/CreateTask'
import ListTasks from '../screens/ListTasks'
import ViewTask from '../screens/ViewTask'

const { Navigator, Screen } = createStackNavigator()

const Navigation = () => {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen
          name="ListTask"
          component={ListTasks}
          options={{
            headerStyle: {
              backgroundColor: '#2ecc71'
            },
            headerTitle: 'List Tasks',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20
            }
          }}
        />
        <Screen
          name="CreateTask"
          component={CreateTask}
          options={{
            headerStyle: {
              backgroundColor: '#2ecc71'
            },
            headerTitle: 'Create Task',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20
            }
          }}
        />
        <Screen
          name="ViewTask"
          component={ViewTask}
          options={{
            headerStyle: {
              backgroundColor: '#2ecc71'
            },
            headerTitle: 'Task Details',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation