import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

// const store = createStore(reducer, applyMiddleware(thunk));

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;