import { createSlice } from "@reduxjs/toolkit";

const laptoSlice = createSlice({
    name: "laptop",
    initialState: [],

    reducers: {
        laptopCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { laptopCollection } = laptoSlice.actions

export default laptoSlice.reducer