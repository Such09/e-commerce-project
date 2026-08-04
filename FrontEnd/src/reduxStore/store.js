import { configureStore } from '@reduxjs/toolkit'
import con_1_slicer from './home_page/con_1st_slicer.js'
import con_2_slice from './home_page/con_2nd_slicer.js'
import con_3_slice from './home_page/con_3rd_slicer.js'
import shose_slice from './container_1/con_1_shose_slicer.js'
import watch_slice from './container_1/con_1_watch_slicer.js'
import belt_Slice from './container_1/belt_slicer.js'
import book_Slice from './container_1/book_slicer.js'
import shirt_Slice from './container_1/shirt_slicer.js'
import perfume_Slice from './container_1/perfume_slicer.js'
import mobile_Slice from './container_2/mobile_slicer.js'
import laptop_Scice from './container_2/laptop_slicer.js'
import tablet_Slice from './container_2/tablet_slicer.js'
import kurti_Slice from './container_3/kurti_slicer.js'
// import notification from './notification.js'

export const store = configureStore({
    reducer: {
        slice1: con_1_slicer,
        slice2: con_2_slice,
        slice3: con_3_slice,
        shoseSlice: shose_slice,
        watchSlice: watch_slice,
        beltSlice: belt_Slice,
        bookSlice: book_Slice,
        shirtSlice: shirt_Slice,
        perfumeSlice: perfume_Slice,
        mobileSlice: mobile_Slice,
        laptopSlice: laptop_Scice,
        tabletSlice: tablet_Slice,
        kurtiSlice: kurti_Slice,
        // notification        // show messages ( Notification )

    }
})