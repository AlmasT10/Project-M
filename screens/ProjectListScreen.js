import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { FAB, ListItem } from "react-native-elements";
import {
  SimpleLineIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const ProjectListScreen = () => {
  const navigation = useNavigation();
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
        navigation.navigate("");
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
        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        />
      </View>
      {/* <FAB
        icon={<Ionicons name="add-outline" size={30} color="white" />}
        placement="right"
      /> */}
    </View>
  );
};

export default ProjectListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
  },
});
