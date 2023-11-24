import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppStackParamList} from './types';
import AppHome from './screens/home';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name="home" component={AppHome} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
