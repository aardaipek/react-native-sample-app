import * as  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailView from './detail';
import BoxCenter from '../components/box-center';
import SvgBrand from '../components/icons/brand';

import SearchBar from '../components/search-bar'
import Box from '../components/box'

const SearchStack = createStackNavigator();

function SearchView({ navigation }) {
  return (
    <Box>
      <Text>Arama Geçmişi</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box py={20} >
      <SvgBrand width={86} height={60}></SvgBrand>
      </Box>

      <Box p={10} >
      <SearchBar></SearchBar>
      </Box>
    </Box>
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