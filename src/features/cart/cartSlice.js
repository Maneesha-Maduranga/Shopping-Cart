import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../Cart'

const initialState = {
  cartItems : cartItems,
  amount: 4,
  total: 0,
  isLoading: true
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    clearCart: (state)=> {
      state.cartItems = []
    },
    removeItem: (state,action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    },
    increseItem: (state,{payload}) => {
       let phone = state.cartItems.find( item => item.id === payload)
       phone.amount = phone.amount + 1 ;
       
    },
    decreseItem: (state,{payload}) => {
      let phone = state.cartItems.find( item => item.id === payload)
      phone.amount = phone.amount - 1 ;
      if(phone.amount < 1){
        phone.amount = 1
       }
    },
    priceChange: (state,{payload}) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    }
    
  

  }
})


export const { clearCart , removeItem, increseItem, decreseItem, priceChange} = cartSlice.actions

export default cartSlice.reducer