import { configureStore } from "@reduxjs/toolkit";
import searchResultSlice from "./searchResultSlice";
import sideBarSlice from "./sideBarSlice";

const store = configureStore({
    reducer: {
        sideBar: sideBarSlice,
        searchCache: searchResultSlice,
    },
});

export default store;
