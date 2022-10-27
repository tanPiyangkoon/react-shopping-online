
import { createReducer } from "@reduxjs/toolkit";
import { LOAD_PRODUCTS_SUCCESS } from 'modules/products/actions'
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions'
const initialState = {
  price :0,
  productIds :[]
}
const cartReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(LOAD_PRODUCTS_SUCCESS,(state,action)=> {
    let price = 0

      for (let product of action.payload.products) {
        price += product.price
      }

      return { ...state, price }
    
  } )
  .addCase(ADD_TO_CART, (state,action) => {
          const {productId} = action.payload
          
          if (state.productIds.includes(productId)) return state
               return {
                 ...state,
                  productIds: [...state.productIds, productId],
                }
  })
  .addCase(REMOVE_FROM_CART, (state,action) => {
    return {
      ...state,
      productIds: state.productIds.filter(
        (id) => +id !== action.payload.productId
      ),
    }
})
})


export default cartReducer;
