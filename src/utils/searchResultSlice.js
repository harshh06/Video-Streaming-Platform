import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name: "searchCache",
    initialState: {},
    reducers: {
        updateCache(state, action) {
            state = Object.assign(state, action.payload);
        },
    },
});

export const { updateCache } = searchResultSlice.actions;

export default searchResultSlice.reducer;
