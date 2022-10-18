import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Item = ({ contact, navigation }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Details", { contact })}>
      <Icon name="ios-person" size={30} color="green" />
      <Text style={styles.title}>{contact.name}</Text>
    </TouchableOpacity>
  );
};
export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
  },
});
