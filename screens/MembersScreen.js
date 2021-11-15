import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const MembersScreen = () => {
  const list = [
    {
      memberName: "Almas",
      salary: 32000,
    },
    {
      memberName: "Almas",
      salary: 32000,
    },
    {
      memberName: "Almas",
      salary: 32000,
    },
    {
      memberName: "Almas",
      salary: 32000,
    },
    {
      memberName: "Almas",
      salary: 32000,
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
        <ListItem.Title>{item.memberName}</ListItem.Title>
        <ListItem.Subtitle>{item.salary}</ListItem.Subtitle>
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

export default MembersScreen;

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
