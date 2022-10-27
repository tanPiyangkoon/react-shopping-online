import {createSlice} from "@reduxjs/toolkit" 


export const productSlice  = createSlice ({
    name:'products',
    initialState: {
        items:[],
        isLoading:false,
        
    },
    reducers: {
        LOAD_PRODUCTS_REQUEST : (state)=> {
            state.isLoading = true
            state.items = []
        },
        LOAD_PRODUCT_REQUEST: (state)=> {
            state.isLoading = true
            state.items = []
            
        },
        LOAD_PRODUCTS_SUCCESS: (state,action)=> {
            state.isLoading = false
            state.items = action.payload.products
        },
        LOAD_PRODUCT_SUCCESS: (state,action)=> {
            state.isLoading = false
            state.items = [action.payload.product]
            

       
        },
        LOAD_PRODUCTS_FAILURE: (state) =>{
                state.isLoading = false
        },
        LOAD_PRODUCT_FAILURE: (state)=> {
            state.isLoading = false
        },
        CLEAR_PRODUCTS: (state)=> {
            state.isLoading = false
            state.items = []
        }
    },
    

    
});

export const {LOAD_PRODUCTS_REQUEST, LOAD_PRODUCT_REQUEST, 
            LOAD_PRODUCTS_SUCCESS,LOAD_PRODUCT_SUCCESS,
            LOAD_PRODUCTS_FAILURE,LOAD_PRODUCT_FAILURE,CLEAR_PRODUCTS} 
            = productSlice.actions;

export default productSlice.reducer;