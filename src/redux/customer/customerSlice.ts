import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToFavorites,
} from './customerReducer'
import { CustomerInitialState } from './customerState'
import { createSlice } from '@reduxjs/toolkit'

const customerSlice = createSlice({
  name: 'customer',
  initialState: CustomerInitialState,
  reducers: {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    addToFavorites,
  },
})

export default customerSlice.reducer
export const appActions = customerSlice.actions
