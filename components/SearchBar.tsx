import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchBarContainer}>
        <FontAwesomeIcon icon={faSearch} size={24} color="black" style={styles.searchIcon} />
        <TextInput
        style={styles.searchInput}
        placeholder="Search for products"
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '90%',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;