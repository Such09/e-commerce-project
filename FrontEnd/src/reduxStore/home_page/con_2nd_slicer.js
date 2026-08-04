import { createSlice } from '@reduxjs/toolkit'

const con_2_Slice = createSlice({
    name: 'data',
    initialState: [],

    reducers: {
        collection_2: (state, action) => {
            return state = action.payload
        }
    }
})

export const { collection_2 } = con_2_Slice.actions

export default con_2_Slice.reducer