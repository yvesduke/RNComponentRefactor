import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CarsListComponent from './Components/CarsListComponent';
import CarDetailComponent from './Components/CarDetailComponent';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CarsList">
        <Stack.Screen
          name="CarsList"
          component={CarsListComponent}
          options={{title: 'Cars'}}
        />
        <Stack.Screen
          name="CarDetail"
          component={CarDetailComponent}
          options={{title: 'Car Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
