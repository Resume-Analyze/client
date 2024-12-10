import { configureStore } from "@reduxjs/toolkit";
import { resumeReducer } from "./reducers/resumeReducer";

export const store = configureStore({
    reducer: {
        // Define a reducer here
        resumeReducer: resumeReducer,
    },
})