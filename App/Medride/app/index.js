import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <MainStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
