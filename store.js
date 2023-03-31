import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './src/features/cart/cartSlice';
import categoriesSlice from './src/features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    cart: cartSlice,
  },
});
