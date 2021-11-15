import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, Input, Button } from "react-native-elements";

const MemberList = (props) => {
  const [memberList, setMemberList] = useState([]);
  const [mName, setMName] = useState("");
  const [mEmail, setMEmail] = useState("");

  const AddMember = (mName, mEmail) => {
    setMemberList({ name: mName, email: mEmail });
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar
        rounded
        size="small"
        source={require("../assets/picPlaceholder.png")}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <Text h4 style={{ margin: 10 }}>
        Add Member
      </Text>
      <Input
        label="Member Name"
        placeholder="Enter Member Name"
        value={props}
        onChangeText={(text) => setMName(text)}
      />
      <Input
        label="Member Email Id"
        placeholder="Add Member email id"
        value={mEmail}
        onChangeText={(text) => setMEmail(text)}
      />
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Add"
          onPress={AddMember(mName, mEmail)}
          containerStyle={{ margin: 5 }}
        />
        <Button
          title="Cancel"
          onPress={() => {}}
          containerStyle={{ margin: 5 }}
        />
      </View>

      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={memberList}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default MemberList;

const styles = StyleSheet.create({});
