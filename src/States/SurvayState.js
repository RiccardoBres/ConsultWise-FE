// surveySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    surveyResponses: [],
}

export const surveySlice = createSlice({
    name: 'survey',
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
});

export const { addResponse, clearResponses } = surveySlice.actions;
export const selectResponses = (state) => state.survey.surveyResponses;

export default surveySlice.reducer;
