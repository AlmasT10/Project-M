import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const ProjectSalaryScreen = () => {
  const list = [
    {
      projectName: "Car Rental",
      payPerHr: 25,
      hrsWorked: 29,
    },
  ];

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      containerStyle={styles.list}
      bottomDivider
      onPress={() => {
        // navigation.navigate("TaskList", { title: item.name });
      }}
    >
      <ListItem.Content>
        <ListItem.Title>Project Name - {item.projectName}</ListItem.Title>
        <ListItem.Subtitle>Pay Per Hour -{item.payPerHr}</ListItem.Subtitle>
        <Text>Hours Worked - {item.hrsWorked}</Text>
      </ListItem.Content>
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

export default ProjectSalaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 5,
  },
  list: {
    margin: 2,
    padding: 2,
    borderRadius: 10,
  },
});
