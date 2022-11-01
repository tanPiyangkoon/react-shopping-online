import {configureStore} from "@reduxjs/toolkit"


import { createBrowserHistory } from 'history'
import { routerMiddleware,connectRouter } from "connected-react-router"

import uiReducer  from "modules/ui/uiSlice"
import productsReducer from "modules/products/productSlice"
import cartReducer from "modules/cart/cartSlice"



 export const history = createBrowserHistory();

const rootReducer = (history)=> ({
  ui:uiReducer,
  products:productsReducer,
  cart:cartReducer,
  router: connectRouter(history)
})

 export const store  =  configureStore({ 
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(routerMiddleware(history)),
reducer: rootReducer(history),
   
 
});


    
  





export default store 
