import * as  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailView from './detail';

import BoxCenter from '../components/box-center';
import Box from '../components/box';

 
const SearchStack = createStackNavigator();

function SearchView({ navigation }) {
  return (
    <BoxCenter >
      <Text>Search!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </BoxCenter>
  );
}

function SearchViewStack() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchView} />
      <SearchStack.Screen name="Detail" component={DetailView} />
    </SearchStack.Navigator>
  );
}

export default SearchViewStack;