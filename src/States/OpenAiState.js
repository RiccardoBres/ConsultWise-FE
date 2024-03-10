import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OpenAI from "openai";
import { sendApiRequest } from './ApiUtils';

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const initialState = {
    isLoading: false,
    openAIResponse: null,
    openAiError: null,
}

let pendingRequests = 0;
const MAX_CONCURRENT_REQUESTS = 1;

export const getOpenAIResponse = createAsyncThunk(
    'openai/getResponse',
    async (companyData, { rejectWithValue }) => {
        if (pendingRequests >= MAX_CONCURRENT_REQUESTS) {
            return rejectWithValue('Too many requests.');
        }
        try {
            pendingRequests++;
            const companyString = JSON.stringify(companyData);
            const token = JSON.parse(localStorage.getItem("accessToken"));
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a consultant helping businesses to grow and succeed. You should provide detailed advice based on the company data provided and displayed in the best and most organized way possible' },
                    { role: 'user', content: companyString }
                ]
            });
            const consultResult = response.choices[0].message.content;
            await sendApiRequest(
                `update-consult-result/${companyData[0]._id}`,
                `Bearer ${token}`,
                { consultResult }
            );
            return consultResult;
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            pendingRequests--;
        }
    }
);


export const openaiSlice = createSlice({
    name: 'openAiState',
    initialState,
    reducers: {
        clearOpenAIResponse: (state) => {
            state.openAIResponse = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOpenAIResponse.pending, (state) => {
                state.isLoading = true;
                state.openAiError = null;
            })
            .addCase(getOpenAIResponse.fulfilled, (state, action) => {
                state.isLoading = false;
                state.openAIResponse = action.payload;
                state.openAiError = null;
            })
            .addCase(getOpenAIResponse.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                state.openAiError = true;
            })
    }
});

export const { clearOpenAIResponse } = openaiSlice.actions;
export const selectOpenAiResponse = (state) => state.openAiState.openAIResponse;
export const isOpenAiResponseLoading = (state) => state.openAiState.isLoading;
export const selectOpenAiError = (state) => state.openAiState.openAiError;

export default openaiSlice.reducer;
