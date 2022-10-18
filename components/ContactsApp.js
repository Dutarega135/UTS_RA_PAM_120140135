import { FlatList, View } from "react-native";
import Item from "./ContactView";
import { SearchBar } from "react-native-elements";
import { useEffect, useState } from "react";

export default function ContactsApp({ contacts, navigation }) {
  const [searchdata, setSearchdata] = useState("");
  const [data, setData] = useState(contacts || []);
  const renderItem = ({ item }) => <Item contact={item} navigation={navigation} />;
  useEffect(() => {
    setData(contacts);
  }, [contacts]);
  const updateSearch = (search) => {
    setSearchdata(search);
    if (search === "") {
      setData(contacts);
      return;
    }
    const filter = contacts.filter((d) => {
      const name = searchdata.toLowerCase();
      return d.name.toLowerCase().indexOf(name) > -1;
    });
    setData(filter);
  };
  return (
    <View>
      <SearchBar placeholder="Cari Kontak" onChangeText={updateSearch} value={searchdata} />
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}
