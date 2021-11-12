import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Button, Text, ListItem, Avatar } from "react-native-elements";
import { auth } from "../firebase";

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

  const user = auth.currentUser;
  const list = [
    {
      name: "Task 1",
      subtitle: "Project 1",
    },
    {
      name: "Task 2",
      subtitle: "Project 3",
    },
    {
      name: "Task 2",
      subtitle: "Project 1",
    },
    {
      name: "Task 1",
      subtitle: "Project 3",
    },
    {
      name: "Task 2",
      subtitle: "Project 2",
    },
  ];

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => {
        // props.navigation.navigate('')
      }}
    >
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
        <Text h4>
          {greetings()}, {user.email}
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
  },
});
