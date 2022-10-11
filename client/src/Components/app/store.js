import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        emps: userReducer
    }
})