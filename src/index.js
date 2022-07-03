import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MoralisProvider } from "react-moralis";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl='https://i77wyvbcjr4r.usemoralis.com:2053/server' appId='WpZW7HHo68TwfZf2TcJf75cbPSHFa3DW3SqZIgzB'>
    <App />
    </MoralisProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
