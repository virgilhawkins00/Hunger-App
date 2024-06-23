import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const categories = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Burgers' },
  { id: 3, name: 'Sushi' },
  { id: 4, name: 'Pasta' },
  { id: 5, name: 'Salads' },
  { id: 6, name: 'Drinks' },
  { id: 7, name: 'Desserts' },
  { id: 8, name: 'Others' },
];

type CategoryType = { id: number, name: string };

const CategoryItem = ({ category = { id: 0, name: '' } }: { category?: CategoryType }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryName}>{category.name}</Text>
    </View>
  );

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CategoryItem category={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  categoryItem: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    width: 120,
  },
  categoryName: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CategoryList;