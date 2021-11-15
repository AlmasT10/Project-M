import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, FAB, ListItem } from "react-native-elements";
import {
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { readProjectData } from "../api/firebaseFunctions";

const ProjectListScreen = () => {
  const navigation = useNavigation();
  const list = readProjectData();
  console.log(list);
  // const list = [
  //   {
  //     name: "Task 1",
  //     subtitle: "Project 1",
  //   },
  //   {
  //     name: "Task 2",
  //     subtitle: "Project 3",
  //   },
  //   {
  //     name: "Task 2",
  //     subtitle: "Project 1",
  //   },
  //   {
  //     name: "Task 1",
  //     subtitle: "Project 3",
  //   },
  //   {
  //     name: "Task 2",
  //     subtitle: "Project 2",
  //   },
  // ];

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      style={styles.list}
      bottomDivider
      onPress={() => {
        navigation.navigate("TaskList", { title: item.name });
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.type}</ListItem.Subtitle>
        <Text>Created by: {item.creator}</Text>
        <Text>start Date: {item.startDate} </Text>
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
          navigation.navigate("NewProject");
        }}
      />
    </View>
  );
};

export default ProjectListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 5,
  },
  list: {
    margin: 2,
    padding: 2,
  },
  fab: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
