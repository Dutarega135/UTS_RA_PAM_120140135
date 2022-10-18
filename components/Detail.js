import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import * as Clipboard from "expo-clipboard";

const Detail = ({ route }) => {
  const { contact } = route.params;
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(contact.phoneNumbers[0].number);
    alert("No telpon berhasil disalin");
  };
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <View style={styles.firstAlphaBox}>
          <Text style={styles.firstAlpha}>{contact.name[0]}</Text>
        </View>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.number} onPress={copyToClipboard}>
          {contact.phoneNumbers[0].number}
        </Text>
      </View>
    </View>
  );
};

export default Detail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 180,
    backgroundColor: "white",
  },
  text: {
    marginHorizontal: 10,
    backgroundColor: "#475",
    padding: 10,
    borderRadius: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontSize: 30,
  },
  number: {
    fontSize: 20,
  },
  firstAlphaBox: {
    height: 120,
    width: 120,

    backgroundColor: "#D89822",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  firstAlpha: {
    textTransform: "uppercase",
    fontSize: 50,
  },
});
