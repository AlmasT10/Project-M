import React, { useEffect, useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import { Button, Input, Text } from "react-native-elements";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("MyTabs");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        props.navigation.navigate("MyTabs");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Text h1>Project-M</Text>
      </View>
      <View>
        <Input
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          inputContainerStyle={styles.inputContainer}
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          inputContainerStyle={styles.inputContainer}
          secureTextEntry={true}
        />
        <View>
          <Button title="Login" onPress={() => signIn()} />
        </View>
      </View>

      <View style={styles.newUser}>
        <Text h4>New User?</Text>
        <Button
          title="Register"
          onPress={() => {
            props.navigation.navigate("Register");
          }}
          type="clear"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginTop: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    width: Dimensions.get("window").width * 0.7,
    backgroundColor: "white",
    padding: 5,
    marginVertical: 5,
  },
  newUser: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
