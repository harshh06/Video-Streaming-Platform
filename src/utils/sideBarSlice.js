import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: {
        open: true,
    },
    reducers: {
        toggleSideBar(state, action) {
            state.open = !state.open;
        },
        closeSideBar(state) {
            state.open = false;
        },
        openSideBar(state) {
            state.open = true;
        },
    },
});

export const { toggleSideBar, closeSideBar, openSideBar } =
    sideBarSlice.actions;
export default sideBarSlice.reducer;
