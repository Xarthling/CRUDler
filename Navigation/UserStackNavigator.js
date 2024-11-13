import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserCrudlerScreen from '../Screens/UserCrudlerScreen';

const Stack = createStackNavigator();

const UserStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="UserCrudler" 
        component={UserCrudlerScreen} 
        options={{ title: 'User CRUDLer' }}
      />
    </Stack.Navigator>
  );
};

export default UserStackNavigator;