import 'react-native-gesture-handler';
import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // not used

import Theme from './src/utils/theme'

import SearchViewStack from './src/views/search';
import FavoriteView from './src/views/favorite';
import HistoryView from './src/views/history';
import TabBar from './src/components/tab-bar';
import Box from './src/components/box';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme ={Theme}>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search" component={SearchViewStack} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
    </ThemeProvider>
  );
}


