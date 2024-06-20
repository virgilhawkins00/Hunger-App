import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
      <FontAwesomeIcon icon={faSave} style={styles.separator} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"  />
      <EditScreenInfo path="app/(tabs)/three.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    });
    