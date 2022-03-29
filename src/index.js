import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateGlobalProvider } from './reducers/StateGlobal';
 

ReactDOM.render(
    <StateGlobalProvider>

    <App />
    </StateGlobalProvider>
 ,
  document.getElementById('root')
);
 
