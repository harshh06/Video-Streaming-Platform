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
    },
});

export const { toggleSideBar, closeSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
