import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './StyleSheets/animation.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

document.addEventListener("DOMContentLoaded", (event) => {
    var content = document.createElement("div");
    content.setAttribute("id", "root");
    content.setAttribute("class", "hidden");
    document.querySelector("body").appendChild(content);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
