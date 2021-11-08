// !!!!!!!
//  you have to add "type": "module",  to package.json in order to test run this in node (zB node store.js), 
//      if you use import { createStore } from 'redux';
//      if you use 'require', you don't need the "type: module" thing (zB: const xxx require('sourceOfxxx))
//
//  another thing to do, by example:
//      const pkg = require('@reduxjs/toolkit');
//      const { createAsyncThunk } = pkg;

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice.js';  
import listingsReducer from './listingsSlice.js';      

// I don't like bulky / messy args, so...
function rootReducer() {
    return {
        reducer: {
            auth: authReducer,
            listings: listingsReducer
        }    
    }
}
// ... it's basically a createStore() / combineReducers() substitute. woo.
const store = configureStore(rootReducer());

// EXPORT
export default store;

