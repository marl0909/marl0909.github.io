import {configureStore, createStore} from '@reduxjs/toolkit'
import {reducer} from "./projectsSlice";

export const store = configureStore({
    reducer: {
        reducer
    }
})