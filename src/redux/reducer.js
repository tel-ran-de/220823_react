// REDUCER
// это чистая функция - она всегда возвращает предсказуем результат

import { DECREASE, INCREASE, RESET, INCREASE_BY_AMOUNT } from "./constants";

// ВСЕГДА возращать состояние (либо измененное, либо нет)
const initialState = { counter: 0 }

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state, counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state, counter: state.counter - 1
            };
        case RESET:
            return initialState;
        case INCREASE_BY_AMOUNT: 
            return {
                ...state, counter: state.counter + action.payload
            }
        default: 
        return state   
    }
}
