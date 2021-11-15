import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  Button,
  Text,
  ListItem,
  Avatar,
  CheckBox,
  FAB,
} from "react-native-elements";
import {
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { auth } from "../firebase";
import { LinearProgress } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { readProjectTasks } from "../api/firebaseFunctions";

const TaskListScreen = ({ route }) => {
  const navigation = useNavigation();
  const pName = route.params.title;

  const list = readProjectTasks(pName);

  // const list = [
  //   {
  //     name: "Task 1",
  //     subtitle: "Almas",
  //   },
  //   {
  //     name: "Task 2",
  //     subtitle: "Almas",
  //   },
  //   {
  //     name: "Task 2",
  //     subtitle: "xyz",
  //   },
  //   {
  //     name: "Task 1",
  //     subtitle: "xyz",
  //   },
  //   {
  //     name: "Task 2",
  //     subtitle: "Almas",
  //   },
  // ];

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => {
        navigation.navigate("EditTask", { task: item });
      }}
    >
      <CheckBox />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.type}</ListItem.Subtitle>
        <Text>Assigned to: {item.memberName}</Text>
        <Text>start Date: {item.startDate}</Text>
        <Text>End Date: {item.endDate}</Text>
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
      <FAB
        icon={<Ionicons name="add-outline" size={24} color="white" />}
        placement="right"
        style={styles.fab}
        onPress={() => {
          navigation.navigate("CreateTask", { projectName: pName });
        }}
      />
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  fab: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
