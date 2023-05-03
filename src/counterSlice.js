import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'Counter',
    initialState: {
        products:[],
        counter:0
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        updateCounter: (state, action) => {
            state.counter = state.counter + 1
        }
    }
})

export const {setProducts, updateCounter} = CounterSlice.actions;

export default CounterSlice.reducer;

