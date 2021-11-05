import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './stateManagement/store.js';

// TODO: tests only. remove later
//  right now we only use these vars in ./src/components/items/apiSandbox.js
//    but they will be used in itemsSlice.js, maybe elsewhere
console.log('from ./index.js ->');
console.log('process.env.REACT_APP_REDDIT_CLIENT_ID: '  + process.env.REACT_APP_REDDIT_CLIENT_ID);
console.log('process.env.REACT_APP_REDDIT_USERNAME: ' + process.env.REACT_APP_REDDIT_USERNAME);
console.log('process.env.REACT_APP_REDDIT_PASSWORD: ' + process.env.REACT_APP_REDDIT_PASSWORD);

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
