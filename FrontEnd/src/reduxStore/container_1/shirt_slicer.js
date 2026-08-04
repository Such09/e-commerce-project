import { createSlice } from "@reduxjs/toolkit";

const shirtSlice = createSlice({
    name: "shirt",
    initialState: [],

    reducers: {
        shirtCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { shirtCollection } = shirtSlice.actions

export default shirtSlice.reducer