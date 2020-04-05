import * as  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailView from './detail';

const SearchStack = createStackNavigator();

function SearchView({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
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