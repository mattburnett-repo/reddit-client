import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './stateManagement/store.js';

// TODO: make a note somewhere that we installed dotenv, and that we're using it elsewhere for process.env stuff
// https://dev.to/francis04j/how-to-add-env-and-use-process-env-to-your-typescript-project-3d6b
import * as dotenv from 'dotenv';
dotenv.config();

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </ Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
