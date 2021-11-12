import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Input, Text, Button } from "react-native-elements";

const EditTaskScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text></Text>
      <Input label="Task Id" editable={false} />
      <Input label="Task Name" placeholder="Enter Task Name" editable={false} />
      <Input label="Task Type" placeholder="Enter Task Type" editable={false} />
      <Input label="Project Name" editable={false} />
      <Input label="Member Email Id" editable={false} />
      <Input label="Start Date" placeholder="MM/DD/YYYY" />
      <Input label="Start Date" placeholder="MM/DD/YYYY" />
      <Input label="Hrs Worked" keyboardType="numeric" />
      <Input label="Comments" multiline={true} />

      <Button title="Save" />
    </ScrollView>
  );
};

export default EditTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
