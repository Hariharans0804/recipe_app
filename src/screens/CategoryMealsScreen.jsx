import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { Fonts } from '../constants';
import { CATEGORIES } from '../data/Dummy';
import { MealList } from '../components';

const CategoryMealsScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  const { categoryId } = route.params;

  const availableMeals = useSelector((state) => {
    return state.meals.filteredMeals;
  });

  const displayedMeals = availableMeals.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);


  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
      headerStyle: {
        backgroundColor: selectedCategory.color,
      },
    })
  }, [])


  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text style={{ fontFamily: Fonts.POPPINS_BOLD }}>No Meals found, maybe check your filters</Text>
      </View>
    )
  }

 
  return (
    <MealList displayedMeals={displayedMeals} />
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})