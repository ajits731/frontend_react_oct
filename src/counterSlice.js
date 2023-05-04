import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'Counter',
    initialState: {
        products:[],
        counter:0,
        userAuth: false
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        updateCounter: (state, action) => {
            state.counter = state.counter + 1
        },
        setUserAuth: (state, action) => {
            state.userAuth = true
        }
    }
})

export const {setProducts, updateCounter, setUserAuth} = CounterSlice.actions;

export default CounterSlice.reducer;

