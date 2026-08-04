import { createSlice } from "@reduxjs/toolkit";

const notification = createSlice({
    name: "show message",
    initialState: [],

    reducers: {
        successToast: (state, action) => {
            toast.success(`${action.payload}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
})

export const { successToast } = notification.actions

export default notification.reducer