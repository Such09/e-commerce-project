import { createSlice } from '@reduxjs/toolkit'

const con_3_slice = createSlice({
    name: "data",
    initialState: [],

    reducers: {
        collection_3: (state, action) => {
            return state = action.payload
        }
    }
})

export const { collection_3 } = con_3_slice.actions

export default con_3_slice.reducer