// companySlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { sendApiRequest } from './ApiUtils';
import { userId } from "./LoginState";

const initialState = {
    isLoading: false,
    company: null,
    error: null,
    surveyResponses: [],
}

export const getCompany = createAsyncThunk(
    'company/getCompany',
    async () => {
        try {
            const token = JSON.parse(localStorage.getItem("accessToken"));
            const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/company`, {
                headers: {
                    'Authorization': token,
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);
export const createCompany = createAsyncThunk(
    "company/createCompany",
    async ({ data, navigate }) => {
        try {
            const token = JSON.parse(localStorage.getItem("accessToken"));
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_BASE_URL}/company/create`,
                data,
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    },
                }
            );
            navigate('/Question');
            return response.data;
        } catch (error) {
            throw { status: error.response?.status, message: error.response?.data?.message || 'Error during company creation' };
        }
    }
);


export const updateCompanyDetails = createAsyncThunk(
    "company/updateCompanyDetails",
    async ({ companyId, fieldName, fieldValue }) => {
        try {
            const token = JSON.parse(localStorage.getItem("accessToken"));
            const response = await axios.put(
                `${process.env.REACT_APP_SERVER_BASE_URL}/company/update/${companyId}`,
                {fieldName, fieldValue},
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
)


export const addAdditionalInfo = createAsyncThunk(
    "company/addAdditionalInfo",
    async ({ companyId, additionalInfo }) => {
        try {
            const token = JSON.parse(localStorage.getItem("accessToken"));
            return await sendApiRequest(companyId, token, { additionalInfo });
        } catch (error) {
            throw error;
        }
    }
);

export const companySlice = createSlice({
    name: 'companyState',
    initialState,
    reducers: {
        addResponse: (state, action) => {
            const { questionId, answer } = action.payload;
            state.surveyResponses.push({ questionId, answer });
        },
        clearResponses: (state) => {
            state.surveyResponses = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCompany.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCompany.fulfilled, (state, action) => {
                state.isLoading = false;
                state.company = action.payload;
            })
            .addCase(getCompany.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(createCompany.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCompany.fulfilled, (state, action) => {
                state.isLoading = false;
                state.company = { ...state.company, ...action.payload };
            })
            .addCase(createCompany.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(updateCompanyDetails.pending, (state) => {
                state.isLoading = true; 
                state.error = null; 
            })
            .addCase(updateCompanyDetails.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.company = action.payload; 
            })
            .addCase(updateCompanyDetails.rejected, (state, action) => {
                state.isLoading = false; 
                state.error = action.error.message; 
            })
    }
});

export const { addResponse, clearResponses } = companySlice.actions;
export const selectCompany = (state) => state.companyState.company;
export const selectIsCompanyLoading = (state) => state.companyState.isLoading;
export const selectCompanyError = (state) => state.companyState.error;
export const selectResponses = (state) => state.companyState.surveyResponses;

export default companySlice.reducer;
