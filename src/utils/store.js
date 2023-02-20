import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice.js";
import searchResultSlice from "./searchResultSlice";
import sideBarSlice from "./sideBarSlice";

const store = configureStore({
    reducer: {
        sideBar: sideBarSlice,
        searchCache: searchResultSlice,
        chat: chatSlice,
    },
});

export default store;
