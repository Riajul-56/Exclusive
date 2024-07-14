import { configureStore } from '@reduxjs/toolkit'
import productSlices from './slices/productSlices'

export const store = configureStore({
  reducer: {
    allproduct : productSlices
  },
})