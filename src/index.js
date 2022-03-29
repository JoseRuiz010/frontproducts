import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateGlobalProvider } from './reducers/StateGlobal';
import { BrowserRouter } from 'react-router-dom';
 

ReactDOM.render(
  <BrowserRouter>
  
    <StateGlobalProvider>

    <App />
    </StateGlobalProvider>
  </BrowserRouter>
 ,
  document.getElementById('root')
);
 
