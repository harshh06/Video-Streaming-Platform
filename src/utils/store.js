import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";

const store = configureStore({
    reducer: {
        sideBar: sideBarSlice,
    },
});

export default store;
