import { counterReducer } from "./reducer";
import { createStore } from "redux";


export const storeRedux = createStore(counterReducer)