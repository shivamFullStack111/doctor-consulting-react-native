import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/auth/login/Login'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './pages/auth/Welcome.jsx'
import LogSign from './pages/auth/logSign/LogSign.jsx'
import { PaperProvider } from 'react-native-paper';
import Register from './pages/register/Register.jsx'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
        <PaperProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='welcome' component={Welcome}></Stack.Screen>
          <Stack.Screen name='LogSign' component={LogSign}></Stack.Screen>
          <Stack.Screen name='login' component={Login}></Stack.Screen>
          <Stack.Screen name='register' component={Register}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
          </PaperProvider>

  )
}

export default App