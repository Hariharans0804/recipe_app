import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CategoryGridTile, CustomHeaderButton } from '../components';
import { CATEGORIES } from '../data/Dummy';

const CategoriesScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName='menu' onPress={() => navigation.toggleDrawer()} />
          </HeaderButtons>
        )
      }
    });
    console.log("CATEGORIES", CATEGORIES);
  }, [navigation]);


  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('CategoryMeals', { categoryId: itemData.item.id, });
        }}
      />
    )
  }

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})