import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';

interface CategoryProps {
  category: CategoryType;
  onPress: (category: CategoryType) => void;
}

const handleCategoryPress = (category: CategoryType) => {
  console.log("Category pressed:", category.name);
  // navigation.navigate('CategoryScreen', { category });
};

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

type CategoryType = {
  id: number;
  name: string;
};

const CategoryItem: React.FC<CategoryProps> = ({ category, onPress }) => (
    <TouchableOpacity onPress={() => onPress(category)} style={styles.categoryItem}>
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
);

// this will fetch all data from the api
//
// const CategoryList = ():string|boolean => {
//  const [categories: CategoryType[],
//    setCategories] = useState<CategoryType[]>
//    (initialState: []);
//    const [isLoading: boolean, setIsLoading] =
//      useState(true);
//    const [error: string, setError] =
//      useState<string | null>(null);
//
//    useEffect(effect: () => {
//      const fetchCategories = async ()
//      :Promise<void> = {
//      try {
//        const response: Response = await fetch('ENV_API_ENDPOINT/categories');
//
//      if (!response.ok) {
//        throw new Error('Failed to fetch categories');
//      }
//
//      const data = await response.json();
//      setCategories(data);
//    } catch (err) {
//      setError('Error loading categories. Please try again later.');
//      console.error('Error fetching categories:', err);
//    } finally {
//      setIsLoading(false);
//    }
//  };
//  fetchCategories();
//}, []);
//
// const handleCategoryPress = (category: CategoryType) => {
//  console.log("Category pressed:", category.name);
// // navigation.navigate('CategoryScreen', { category });
// };
//
// if (isLoading) {
//  return <ActivityIndicator size="large"
//    style={styles.loadingIndicator} />;
//  }
//
//  if (error) {
//    return <Text
//      style=styles.errorText}>
//      {error}
//    </Text>;
//  }
//
// return (
//  <View style={styles.container}>
//    <Text style={styles.title}>Categories</Text>
//     <FlatList
//        data={categories}
//        keyExtractor={(item) = item.id.toString()}
//        renderItem={({ item }) => (
//          <CategoryItem category={item}
//            onPress={handleCategoryPress} />
//        )}
//        horizontal
//        showHorizontalScrollIndicator={false}
//     />
//   </View>
//   );
//  };
//
// const styles =

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <CategoryItem category={item} onPress={handleCategoryPress} />
          )}
          horizontal={true}
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
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center'
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    padding: 10
  }
});

export default CategoryList;