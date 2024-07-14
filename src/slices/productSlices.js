import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: null,
}

export const productSlices = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    productReducer: (state,action) => {
      state.product =action.payload
    },
    
  },
})
export const { productReducer } = productSlices.actions

export default productSlices.reducer