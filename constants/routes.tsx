import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../app/(tabs)/index';
// import ModalScreen from "./screens/ModalScreen";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="ModalScreen" component={ModalScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}