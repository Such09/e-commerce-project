import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "book",
    initialState: [],

    reducers: {
        bookCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { bookCollection } = bookSlice.actions

export default bookSlice.reducer