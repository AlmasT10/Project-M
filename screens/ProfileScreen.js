import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView, StyleSheet, View, Image } from "react-native";
import { Avatar, Input, Text, Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { auth } from "../firebase";
import { getUser } from "../api/firebaseFunctions";

const ProfileScreen = () => {
  const user = auth.currentUser.email;
  var cUser = getUser(user);
  console.log(cUser);

  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log("response", response);
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profilePic}>
        <Avatar rounded size="xlarge" source={{ uri: image }}>
          <Avatar.Accessory onPress={pickImage} size={34} />
        </Avatar>
      </View>
      <View>
        <Input label="Name" placeholder="Enter Your Name" value={cUser.name} />
        <Input
          label="Email"
          placeholder="Enter Your Email"
          value={cUser.email}
        />
        <Input
          label="Phone"
          placeholder="Enter Your Phone"
          value={cUser.phone}
        />
        <Button title="Save" />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  profilePic: {
    alignItems: "center",
    marginBottom: 40,
  },
});
