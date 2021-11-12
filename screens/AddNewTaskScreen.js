import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "react-native-elements";

const AddNewTaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Input label="Task Id" editable={false} />
      <Input label="Task Name" placeholder="Enter Task Name" />
      <Input label="Task Type" placeholder="Enter Task Type" />
      <Input label="Project Name" editable={false} />
      <Input label="Member Email Id" />
      <Input label="Start Date" placeholder="MM/DD/YYYY" />
      <Input label="Start Date" placeholder="MM/DD/YYYY" />
      <Button title="Save" />
    </View>
  );
};

export default AddNewTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
