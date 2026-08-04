import { createSlice } from "@reduxjs/toolkit";

const perfumeSlice = createSlice({
    name: "perfume",
    initialState: [],

    reducers: {
        perfumeCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { perfumeCollection } = perfumeSlice.actions

export default perfumeSlice.reducer