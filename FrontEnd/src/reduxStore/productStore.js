import { createSlice } from "@reduxjs/toolkit";

const productStore = createSlice({
    name: "products",
    initialState: [],

    reducers: {
        storeProducts: (state, action) => {
            return state = action.payload
        }
    }
});

export const { storeProducts } = productStore.actions

export default productStore.reducer