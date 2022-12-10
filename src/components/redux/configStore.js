import { configureStore } from "@reduxjs/toolkit";
import   countOrdersSlice  from "./reducer";
import userTypeReducer from "./userTypeReducer";
export default configureStore({
    reducer:{
        counter:countOrdersSlice,
        userType:userTypeReducer
    }
});