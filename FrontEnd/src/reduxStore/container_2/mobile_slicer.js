import { createSlice } from "@reduxjs/toolkit";

const mobileSlice = createSlice({
    name: "mobile",
    initialState: [],

    reducers: {
        mobileCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { mobileCollection } = mobileSlice.actions

export default mobileSlice.reducer