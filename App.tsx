import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerPersonalizado } from './src/navigator/DrawerPersonalizado';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerPersonalizado/>
    </NavigationContainer>
  );
};

export default App;