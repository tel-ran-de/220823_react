import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import { counterReducerRedux } from "../redux/reducer";
import themeReducer from "./themeSlice";

// STORE ОДИН
// rtk + redux 
export const store = configureStore({
    reducer: {
        theme: themeReducer,
        counter: counterReducer, // rtk
        counterRedux: counterReducerRedux // redux
    }
})