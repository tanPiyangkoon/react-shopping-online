
import {createSlice} from "@reduxjs/toolkit" 






export const uiSlice = createSlice({
    name: 'ui',
    initialState:{
          darkMode: false,
          flashMessage:null,
          

    },
    reducers: {
      
      TOGGLE_DARK_MODE: (state)=> {
      
      state.darkMode = !state.darkMode
      },
      SET_DARK_MODE: (state,action)=> {
       state.darkMode = action.payload.darkMode
      },
      SET_FLASH_MESSAGE : (state,action)=> {
        state.flashMessage = action.payload.message
      },
      CLEAR_FLASH_MESSAGE: (state) => {
        state.flashMessage = null 
      }
       
    }
})

export const {TOGGLE_DARK_MODE,SET_DARK_MODE,SET_FLASH_MESSAGE,CLEAR_FLASH_MESSAGE} = uiSlice.actions;

export default uiSlice.reducer;




