import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CustomHeaderButton, MealList } from '../components';
import { useNavigation } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Fonts } from '../constants';

const FavoritesScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Your Favorites",
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu' iconName='menu' onPress={() => navigation.toggleDrawer()} />
          </HeaderButtons>
        )
      }
    })
  }, [])

  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <Text style={styles.info}>No favorite meals found. Start adding some!</Text>
      </View>
    )
  }
  return (
    <MealList displayedMeals={favoriteMeals} />
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD
  }
})