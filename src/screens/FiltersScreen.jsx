import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CustomHeaderButton } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Switch } from 'react-native-gesture-handler';
import { Colors, Fonts } from '../constants';
import { useDispatch } from 'react-redux';
import { setFilters } from '../slices/meal';

const FilterSwitch = ({ label, onChange, state }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={state}
        onValueChange={onChange}
        trackColor={{ true: Colors.PRIMARY_COLOR }}
        thumbColor={Colors.PRIMARY_COLOR}
      />
    </View>
  )
}

const FiltersScreen = () => {

  const navigation = useNavigation();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  };


  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Filter Meals",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title='Menu' iconName='menu' onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title='Save' iconName='save' onPress={saveFilters} />
        </HeaderButtons>
      )
    })
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactoose-Free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(value) => setIsVegan(value)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(value) => setIsVegetarian(value)}
      />
    </View>
  )
}

export default FiltersScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "80%",
    marginVertical: 15
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BOLD,
    margin: 20,
    textAlign: 'center'
  },
})