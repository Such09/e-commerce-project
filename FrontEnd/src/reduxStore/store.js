import { configureStore } from '@reduxjs/toolkit'
import con_1_slicer from './home_page/con_1st_slicer.js'
import con_2_slice from './home_page/con_2nd_slicer.js'
import con_3_slice from './home_page/con_3rd_slicer.js'
import productStore from './productStore.js'

export const store = configureStore({
    reducer: {
        slice1: con_1_slicer,
        slice2: con_2_slice,
        slice3: con_3_slice,
        products: productStore
    }
})