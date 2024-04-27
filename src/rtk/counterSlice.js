import { createSlice } from '@reduxjs/toolkit'


const initialState = { counter: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState, // initialState: initialState,
    reducers: {
        increase: (state, action) => { // type: counter/increase
            console.log(action)
            state.counter += 1
        },
        decrease: (state, action) => { // type: counter/decrease
            console.log(action)
            state.counter -= 1
        },
        reset: (state, action) => { // type: counter/reset
            console.log(action)
            state.counter = 0
        },
    }
})

export const { increase, decrease, reset } = counterSlice.actions

export default counterSlice.reducer