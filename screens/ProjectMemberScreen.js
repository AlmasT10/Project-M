import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { Text, ListItem, Button, Input, Icon } from "react-native-elements";
import { v4 as uuidv4 } from "uuid";
import { readData } from "../api/firebaseFunctions";
import { auth } from "../firebase";

const ProjectMemberScreen = (props) => {
  const [mName, setMName] = useState("");
  const [mEmail, setMEmail] = useState("");
  const [memberList, setMemberList] = useState([]);

  const navigation = useNavigation();

  const AddMember = (mName, mEmail) => {
    setMemberList((memberList) => [
      ...memberList,
      {
        id: uuidv4(),
        name: mName,
        email: mEmail,
      },
    ]);
  };

  const onTrigger = (e) => {
    props.parentCallback(memberList);
  };

  const removeMember = (id) => {
    setMemberList((memberList) => {
      return memberList.filter((member) => member.id !== id);
    });
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      containerStyle={{
        borderRadius: 10,
        margin: 2,
      }}
      bottomDivider
      onPress={() => {
        removeMember(item.id);
        onTrigger();
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: Dimensions.get("window").width * 0.37,
        }}
      >
        <Input
          placeholder="Member Name"
          value={mName}
          onChangeText={(text) => setMName(text)}
        />
        <Input
          placeholder="Member Email"
          value={mEmail}
          onChangeText={(text) => setMEmail(text)}
        />
        <Icon
          name="add"
          type="fontawesome5"
          onPress={() => {
            AddMember(mName, mEmail);
          }}
        />
        <Icon name="add-to-list" type="entypo" size={24} onPress={onTrigger} />
      </View>
      <View>
        <FlatList
          style={styles.list}
          keyExtractor={keyExtractor}
          data={memberList}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default ProjectMemberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.95,
  },
  list: {
    marginVertical: 20,
    borderRadius: 10,
  },
});
