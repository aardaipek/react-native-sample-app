import * as React from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

function FollowersView() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Followers!</Text>
      <Button title="Press me" onPress={api} />
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
});

export default FollowersView;
