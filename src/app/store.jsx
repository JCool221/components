import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import queryReducer from '../store/query/querySlice'
import selectionReducer from '../store/query/selectionSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        query: queryReducer,
        selection: selectionReducer,
    },
})

