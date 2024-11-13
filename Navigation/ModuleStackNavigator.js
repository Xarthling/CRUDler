import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ModuleCrudlerScreen from '../Screens/ModuleCrudlerScreen';

const Stack = createStackNavigator();

const ModuleStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ModuleCrudler" 
        component={ModuleCrudlerScreen} 
        options={{ title: 'Module CRUDLer' }}
      />
    </Stack.Navigator>
  );
};

export default ModuleStackNavigator;