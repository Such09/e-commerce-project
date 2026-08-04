import { createSlice } from '@reduxjs/toolkit'

const shoseSlice = createSlice({
    name: 'data',
    initialState: [],

    reducers: {
        shoseCollection: (state, action) => {
            return state = action.payload
        }
    }
})

export const { shoseCollection } = shoseSlice.actions

export default shoseSlice.reducer