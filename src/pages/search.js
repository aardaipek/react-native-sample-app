import * as  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  Text,Button,ImageBackground,SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailView from './detail';
import BoxCenter from '../components/box-center';
import SvgBrand from '../components/icons/brand';

import SearchBar from '../components/search-bar'
import Box from '../components/box'

const SearchStack = createStackNavigator();

import bg from '../../assets/bg3.jpeg';

function SearchView({ navigation }) {
  return (
    <Box as={SafeAreaView}>
      <Box p={10} >
          <SearchBar></SearchBar>
      </Box>
    </Box>
  );
}

function SearchViewStack() {
  return (
    <SearchStack.Navigator headerMode='none'>
      <SearchStack.Screen name="Search" component={SearchView} />
      <SearchStack.Screen name="Detail" component={DetailView} />
    </SearchStack.Navigator>
  );
}

export default SearchViewStack;