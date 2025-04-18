import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mealsReducer from "../slices/meal"

const reducer = combineReducers({
    meals: mealsReducer
})

export const store = configureStore({
    reducer,
})