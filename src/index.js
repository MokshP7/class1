import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myElement = <h1>My score is {10*8}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement)
// root.render(<p>Hello</p>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
