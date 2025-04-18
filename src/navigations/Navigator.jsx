import { Text } from "react-native";
import { Colors, Fonts } from "../constants";
import { CategoriesScreen, CategoryMealsScreen, FavoritesScreen, FiltersScreen, MealDetailScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const defaultStackOptions = {
    headerStyle: {
        backgroundColor: Colors.PRIMARY_COLOR,
    },
    headerTitleStyle: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
    },
    headerBackTitleStyle: {
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
    },
    headerTintColor: Colors.DEFAULT_WHITE,
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={defaultStackOptions}>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Meals Category', }} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailScreen} />
        </Stack.Navigator>
    )
}

const FiltersStack = createNativeStackNavigator();

const FiltersNavigator = () => {
    return (
        <FiltersStack.Navigator screenOptions={defaultStackOptions}>
            <FiltersStack.Screen name="FiltersS" component={FiltersScreen} />
        </FiltersStack.Navigator>
    )
}


const FavoritesStack = createNativeStackNavigator();

const FavNavigator = () => {
    return (
        <FavoritesStack.Navigator screenOptions={defaultStackOptions}>
            <FavoritesStack.Screen name="FavoritesS" component={FavoritesScreen} options={{ title: "Favorites" }} />
            <FavoritesStack.Screen name="MealDetails" component={MealDetailScreen} />
        </FavoritesStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Meal" component={MyStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <MaterialCommunityIcons name="food" size={25} color={focused ? Colors.PRIMARY_COLOR : Colors.DEFAULT_DARK_GRAY} />
                        );
                    },
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontFamily: Fonts.POPPINS_SEMI_BOLD, color: focused ? Colors.PRIMARY_COLOR : Colors.DEFAULT_DARK_GRAY, }}>Meals</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites" component={FavNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome name="star" size={25} color={focused ? Colors.PRIMARY_COLOR : Colors.DEFAULT_DARK_GRAY} />
                        );
                    },
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontFamily: Fonts.POPPINS_SEMI_BOLD, color: focused ? Colors.PRIMARY_COLOR : Colors.DEFAULT_DARK_GRAY, }}>Favorites</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: Colors.PRIMARY_COLOR,
                drawerLabelStyle: {
                    fontFamily: Fonts.POPPINS_SEMI_BOLD
                },
                headerShown: false
            }}
        >
            <Drawer.Screen name="MealsFav" component={TabNavigator} options={{ title: "Meals" }} />
            <Drawer.Screen name="Filters" component={FiltersNavigator} />
        </Drawer.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

export default Navigator;