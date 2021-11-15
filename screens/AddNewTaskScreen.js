import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { v4 as uuidv4 } from "uuid";
import { AddTaskData } from "../api/firebaseFunctions";

const AddNewTaskScreen = ({ route }) => {
  const navigation = useNavigation();
  const pName = route.params.projectName;
  console.log(pName);

  const [id, setId] = useState("Task - " + uuidv4());
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [projectName, setProjectName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text></Text>
      <Input
        label="Task Id"
        editable={false}
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <Input
        label="Task Name"
        placeholder="Enter Task Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        label="Task Type"
        placeholder="Enter Task Type"
        value={type}
        onChangeText={(text) => setType(text)}
      />
      <Input
        label="Project Name"
        editable={false}
        value={pName}
        onChangeText={(text) => setProjectName(text)}
      />
      <Input
        label="Member Name"
        value={memberName}
        onChangeText={(text) => setMemberName(text)}
      />
      <Input
        label="Member Email Id"
        value={memberEmail}
        onChangeText={(text) => setMemberEmail(text)}
      />
      <Input
        label="Start Date"
        placeholder="MM/DD/YYYY"
        value={startDate}
        onChangeText={(text) => setStartDate(text)}
      />
      <Input
        label="End Date"
        placeholder="MM/DD/YYYY"
        value={endDate}
        onChangeText={(text) => setEndDate(text)}
      />
      <Button
        title="Save"
        onPress={() => {
          AddTaskData(
            id,
            name,
            type,
            pName,
            memberName,
            memberEmail,
            startDate,
            endDate
          );
          navigation.goBack();
        }}
      />
    </ScrollView>
  );
};

export default AddNewTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
