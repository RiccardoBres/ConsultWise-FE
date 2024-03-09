import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './SCSS/output.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Provider } from 'react-redux';
import { ProSidebarProvider } from "react-pro-sidebar";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import App from './App';
import userState from './States/UserState';
import loginState from './States/LoginState';
import companyState from './States/CompanyState';
import openAiState from './States/OpenAiState';


const rootReducer = combineReducers({
  userState: userState,
  auth: loginState,
  companyState: companyState,
  openAiState: openAiState,
});

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
