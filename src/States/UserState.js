import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    isLoading: false,
    user: null,
    error: null,
};

export const getUser = createAsyncThunk(
    'user/GetUser',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/user`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)


export const createUser = createAsyncThunk(
    "User/createUser",
    async ({ formUserData }) => {
        const form = new FormData();
        form.append("username", formUserData.username);
        form.append("surname", formUserData.surname);
        form.append("email", formUserData.email);
        form.append("password", formUserData.password);
        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/user/register`, form, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return res.data;
        } catch (error) {
            throw error;
        }
    }
);



const UserSlice = createSlice({
    name: 'userState',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(createUser.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Registration failed'
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export const allUser = (state) => state.userState.user;
export const isUserLoading = (state) => state.userState.isLoading;
export const userError = (state) => state.userState.error;

export default UserSlice.reducer;