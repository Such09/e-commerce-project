import { createSlice } from "@reduxjs/toolkit";

const tabletSlice = createSlice({
    name: "tablet",
    initialState: [],

    reducers: {
        tabletCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { tabletCollection } = tabletSlice.actions

export default tabletSlice.reducer