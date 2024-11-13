import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ModuleCrudlerScreen from '../Screens/ModuleCrudlerScreen';
import UserCrudlerScreen from '../Screens/UserCrudlerScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="ModuleCrudler">
      <Drawer.Screen 
        name="ModuleCrudler" 
        component={ModuleCrudlerScreen} 
        options={{ title: 'Modules CRUDLer' }}
      />
      <Drawer.Screen 
        name="UserCrudler" 
        component={UserCrudlerScreen} 
        options={{ title: 'Users CRUDLer' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;