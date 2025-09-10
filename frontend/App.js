import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './pages/auth/Welcome.jsx'
import LogSign from './pages/auth/logSign/LogSign.jsx'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogSign' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='welcome' component={Welcome}></Stack.Screen>
          <Stack.Screen name='LogSign' component={LogSign}></Stack.Screen>
          <Stack.Screen name='login' component={Login}></Stack.Screen>
          <Stack.Screen name='register' component={Register}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App