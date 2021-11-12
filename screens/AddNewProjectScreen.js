import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Text,
  Input,
  Button,
  Icon,
  ListItem,
  Avatar,
} from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const AddNewProjectScreen = (props) => {
  const navigation = useNavigation();
  const list = [
    {
      name: "Amy Farha",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text h4 style={{ paddingBottom: 20 }}>
          Project Details
        </Text>
        <Input label="Project Id" editable={false} />
        <Input label="Project Name" placeholder="Project Name" />
        <Input label="Project Type" placeholder="Project Type" />
        <Input
          label="Start Date"
          placeholder="MM/DD/YYYY"
          rightIcon={
            <Icon
              name="calendar"
              type="font-awesome"
              color="black"
              onPress={() => {}}
            />
          }
        />
        <Input
          label="End Date"
          placeholder="MM/DD/YYYY"
          rightIcon={
            <Icon
              name="calendar"
              type="font-awesome"
              color="black"
              onPress={() => {}}
            />
          }
        />
        <View style={styles.memberContainer}>
          <Text h4 style={{ paddingBottom: 20 }}>
            Members
          </Text>
          <Icon
            raised
            name="adduser"
            type="antdesign"
            color="black"
            size={20}
            onPress={() => {}}
          />
        </View>
        <View>
          {list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
        <Button
          title="Save"
          onPress={() => {
            navigation.navigate("Projects");
          }}
        />
      </ScrollView>
    </View>
  );
};

export default AddNewProjectScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
  },
  memberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
