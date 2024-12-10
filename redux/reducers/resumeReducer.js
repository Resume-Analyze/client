import { toast } from "react-toastify"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    resume: null,
    user: null,
}

export const uploadResume = createAsyncThunk('resume/upload', async ({ resume }, thunkAPI) => {
    try {
        // await fetch('http://localhost:3000/upload', {
        //     method: 'POST',
        //     body: resume
        // })
        console.log("HELLO");
        toast("Logged in successfully", {
            type: "success",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
        });
    } catch (err) {
        console.log
    }
})

const resumeSlice = createSlice({
    name: "resume",
    initialState: INITIAL_STATE,
    reducers: {
        setResume: (state, action) => {
            state.resume = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
})

export const resumeReducer = resumeSlice.reducer
export const { setResume, setUser } = resumeSlice.actions

export const resumeSelector = (state) => state.resumeReducer