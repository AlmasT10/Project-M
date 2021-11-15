import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { Text, Input, Button, Icon } from "react-native-elements";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AddUserData } from "../api/firebaseFunctions";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [user, setUser] = useState({ id, name, email, phone });

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
    <ScrollView>
      <View style={styles.container} behavior="padding">
        <View>
          <Text h2>Create New Account</Text>
        </View>
        <View>
          <Input
            label="Name"
            placeholder="Enter Name"
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
            textContentType="emailAddress"
          />
          <Input
            label="Phone"
            placeholder="Enter Phone Number"
            inputContainerStyle={styles.inputContainer}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            textContentType="telephoneNumber"
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
            <Button
              title="Sign Up"
              onPress={() => {
                //setUser(uuidv4(), user.name, user.email, user.phone);
                console.log(uuidv4(), name, email, phone);
                AddUserData(uuidv4(), name, email, phone);
                signUp();
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
