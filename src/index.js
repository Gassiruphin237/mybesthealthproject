import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import StepContext from './StepContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <StepContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </StepContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

