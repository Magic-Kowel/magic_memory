
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import MainWriteScreen from "./src/views/MainWriteScreen"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainWriteScreen" component={MainWriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
