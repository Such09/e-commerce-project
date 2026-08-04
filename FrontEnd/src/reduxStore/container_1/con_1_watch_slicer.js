import { createSlice } from '@reduxjs/toolkit'

const watchSlice = createSlice({
    name: "data",
    initialState: [],

    reducers: {
        watchCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { watchCollection } = watchSlice.actions

export default watchSlice.reducer