import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Edit from '../screens/Edit';
import { HomeParamsType } from '../types/Routers';


const Stack = createNativeStackNavigator<HomeParamsType>();

export default function Router(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Add" component={Add} options={{headerShown: false}}/>
        <Stack.Screen name="Edit" component={Edit} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
