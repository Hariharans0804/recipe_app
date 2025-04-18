import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components';
import { Colors, Fonts } from '../constants';
import { toggleFavorite } from '../slices/meal';


const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.info}>{children}</Text>
    </View>
  );
};

const MealDetailScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  const { mealId } = route.params;

  const availableMeals = useSelector((state) => state.meals.meals);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const isFavoriteMeal = useSelector((state) => {
    return state.meals.favoriteMeals.some((meal) => meal.id === mealId);
  });


  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFavorite(mealId))
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title='Favorite'
              iconName={isFavoriteMeal ? 'star' : 'star-outline'}
              onPress={toggleFavHandler}
            />
          </HeaderButtons>
        )
      }
    })
  }, [isFavoriteMeal]);

  const { duration, complexity, affordability, imageUrl, ingredients, steps } = selectedMeal;

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.info}>{duration}</Text>
        <Text style={styles.info}>{complexity.toUpperCase()}</Text>
        <Text style={styles.info}>{affordability.toUpperCase()}</Text>
      </View>

      <Text style={styles.title}>Ingredients</Text>

      {ingredients.map((ingredient, index) => (
        <ListItem key={index}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>

      {steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}

    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BOLD,
    textAlign: 'center',
    color: Colors.DEFAULT_BLACK,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_LIGHT_GRAY,
    padding: 10
  },
  info: {
    fontFamily: Fonts.POPPINS_REGULAR
  }
})