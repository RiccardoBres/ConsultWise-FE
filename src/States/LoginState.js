import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuthenticated: false,
    user: [],
    sessionId: null,
    error: null,
    isLoading: false
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (loginFormData) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, loginFormData, {
                withCredentials: true, 
            });
            const token = response.data.token;
            localStorage.setItem('accessToken', JSON.stringify(token));
            return response.data;
        } catch (error) {
            console.error("Error during login:", error.response?.data?.message || 'Errore durante il login');
            throw error;
        }
    }
);
export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async () => {
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/logout`);            
            localStorage.removeItem("accessToken");
            console.log("User logged out");
            return true;
        } catch (error) {
            console.error("Error during logout:", error.response?.data?.message || 'Errore durante il logout');
            throw error;
        }
    }
);

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        logoutSuccess: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.sessionId = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.sessionId = action.payload.userId;
                state.isLoading = false;
            })
            .addCase(loginUser.pending, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.isLoading = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
                state.sessionId = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const userId = (state) => state.auth.sessionId;
export const isUserAuthenticated = (state) => state.auth.isAuthenticated;
export const LoginUser = (state) => state.auth.user;
export const isLoginLoading = (state) => state.auth.isLoading;
export const loginError = (state) => state.auth.error;

export default authSlice.reducer;
