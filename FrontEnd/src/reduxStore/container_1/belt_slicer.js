import { createSlice } from "@reduxjs/toolkit";

const beltSlice = createSlice({
    name: "data",
    initialState: [],

    reducers: {
        beltCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { beltCollection } = beltSlice.actions

export default beltSlice.reducer