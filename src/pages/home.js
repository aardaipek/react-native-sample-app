import * as React from "react";
import {StyleSheet,Button,SafeAreaView,Text,TouchableOpacity, View,StatusBar,Image} from "react-native";

import axios from "axios";

import theme from '../utils/theme';

function HomeView() {
  return (
    <View style={styles.container}>
    <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      
    </View>
  );
}

function api() {
  axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    console.log(res);
  });
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  container:{flex:1, justifyContent: "center", alignItems: "center"},
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default HomeView;
