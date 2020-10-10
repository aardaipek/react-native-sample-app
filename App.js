import 'react-native-gesture-handler';
import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // not used

import Theme from './src/utils/theme'

import HomeView from './src/pages/home';
import ProfileView from './src/pages/profile';
import ActivityView from './src/pages/activity';
import TabBar from './src/components/tab-bar';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme ={Theme}>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="Home" component={HomeView} />
            <Tab.Screen name="Activity" component={ActivityView} />
            <Tab.Screen name="Profile" component={ProfileView} />
          </Tab.Navigator>
        </NavigationContainer>
    </ThemeProvider>
  );
}


