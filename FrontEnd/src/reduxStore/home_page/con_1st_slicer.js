import { createSlice } from "@reduxjs/toolkit";

const con_1_slicer = createSlice({
    name: 'data',
    initialState: [],

    reducers: {
        collection_1: (state, action) => {
            return state = action.payload
        }
    }
})

export const { collection_1 } = con_1_slicer.actions

export default con_1_slicer.reducer