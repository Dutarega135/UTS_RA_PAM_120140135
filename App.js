import { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import ContactsApp from "./components/ContactsApp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./components/Detail";

const Stack = createNativeStackNavigator();
export default function App(props) {
  const [contacts, setContacts] = useState();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Get Ur Contact"
          options={{
            headerStyle: {
              backgroundColor: "#475",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "bold",
            },
          }}
        >
          {(props) => <ContactsApp {...props} contacts={contacts} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Detail}
          options={{
            headerStyle: {
              backgroundColor: "#475",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
