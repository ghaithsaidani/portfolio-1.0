import {createSlice} from "@reduxjs/toolkit";

export const themeSlice=createSlice({
    name:"darkTheme",
    initialState:{
        value:true
    },
    reducers:{
        changetheme:(state) => {
            state.value = !state.value
        }
    }
})

export const {changetheme} = themeSlice.actions

export const darkValue = (state: { darkTheme: { value: boolean; }; }) => state.darkTheme.value

export default themeSlice.reducer