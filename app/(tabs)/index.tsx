import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

import SearchBar from '@/components/SearchBar';
import CategoryList from '@/components/CategoryList';
import TabOneScreen from './screens/TabOneScreen';
import { useNavigation } from '@react-navigation/native';
import ModalScreen from './screens/modal';


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity>
            <Text style={styles.headerTitle}>Home</Text>
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'Fast Delivery',
          style: { fontWeight: 'bold', fontSize: 20 },
        }}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('ModalScreen' as never)}>
            <FontAwesomeIcon icon={faBowlFood} size={20} />
          </TouchableOpacity>
        }
        containerStyle={{
          backgroundColor: '#fff',
          borderBottomWidth: 0,
        }}
      />
      <SearchBar />
      <CategoryList />
      <TabOneScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});