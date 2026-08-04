import { createSlice } from "@reduxjs/toolkit";

const kurtiSlice = createSlice({
    name: "kurti",
    initialState: [],

    reducers: {
        kurtiCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { kurtiCollection } = kurtiSlice.actions

export default kurtiSlice.reducer