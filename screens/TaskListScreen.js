import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  Button,
  Text,
  ListItem,
  Avatar,
  CheckBox,
} from "react-native-elements";
import { auth } from "../firebase";
import { LinearProgress } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

const TaskListScreen = () => {
  const navigation = useNavigation();
  const list = [
    {
      name: "Task 1",
      subtitle: "Almas",
    },
    {
      name: "Task 2",
      subtitle: "Almas",
    },
    {
      name: "Task 2",
      subtitle: "xyz",
    },
    {
      name: "Task 1",
      subtitle: "xyz",
    },
    {
      name: "Task 2",
      subtitle: "Almas",
    },
  ];

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => {
        navigation.navigate("EditTask");
      }}
    >
      <CheckBox />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        <Text>start Date</Text>
        <Text>End Date</Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
