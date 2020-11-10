import { combineReducers } from 'redux';

import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cartItems: cartReducer,
});

export default rootReducer;