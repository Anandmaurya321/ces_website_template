
import { configureStore } from "@reduxjs/toolkit";
import button_count_Reducer from './slice/button_count'

const Store = configureStore({
    reducer:{
        CounterSlice: button_count_Reducer
    }
})

export default Store;


