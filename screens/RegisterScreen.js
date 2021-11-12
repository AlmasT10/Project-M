import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { Text, Input, Button } from "react-native-elements";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Text h2>Create New Account</Text>
      </View>
      <View>
        <Input
          label="Name"
          placeholder="Enter Email"
          inputContainerStyle={styles.inputContainer}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          inputContainerStyle={styles.inputContainer}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          inputContainerStyle={styles.inputContainer}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Input
          label="Confirm Password"
          placeholder="Enter Password again"
          inputContainerStyle={styles.inputContainer}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <View>
          <Button title="Sign Up" onPress={() => signUp()} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: Dimensions.get("window").width * 0.7,
    backgroundColor: "white",
  },
});
