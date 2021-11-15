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
import colors from "../assets/colors/colors";
import { readData, readUserTasks } from "../api/firebaseFunctions";

const HomeScreen = (props) => {
  const [currentHrs, setCurrentHrs] = useState("");

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    setCurrentHrs(hours);
  }, []);

  const greetings = () => {
    if (currentHrs < 12) return "Good Morning";
    else if (currentHrs >= 12 && currentHrs <= 17) return "Good Afternoon";
    else if (currentHrs >= 17 && currentHrs <= 24) return "Good Evening";
  };

  const user = auth.currentUser.email;
  var username = readData(user);
  const list = readUserTasks(username);
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
      containerStyle={{
        borderRadius: 10,
        margin: 10,
      }}
      bottomDivider
      onPress={() => {
        props.navigation.navigate("EditTask", { task: item });
      }}
    >
      <CheckBox checked={item.status} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.type}</ListItem.Subtitle>
        <Text>Project: {item.projectName}</Text>
        <Text>start Date: {item.startDate}</Text>
        <Text>End Date: {item.endDate}</Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <Text h4 style={{ paddingBottom: 10, fontStyle: "italic" }}>
          {greetings()}, {username}
        </Text>
        <Text h4 style={{ color: colors.accent }}>
          My Tasks
        </Text>
      </View>
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  listItem: {
    color: colors.secondary,
  },
  homeHeader: {
    padding: 10,
    marginVertical: 5,
  },
});
