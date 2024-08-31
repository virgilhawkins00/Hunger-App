import { StyleSheet, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { List, ListItem, Separator } from "native-base";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://example.com/user-image.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>User Name</Text>
      </View>
      <Separator bordered />
      <List>
        <ListItem>
          <Text>Edit Profile</Text>
        </ListItem>
        <ListItem>
          <Text>Settings</Text>
        </ListItem>
        <ListItem>
          <Text>Help</Text>
        </ListItem>
        <ListItem>
          <Text>Logout</Text>
        </ListItem>
      </List>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "100%",
  },
});