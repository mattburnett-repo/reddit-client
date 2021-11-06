// *********************************************
// !!!!!!!
//  you have to add "type": "module",  to package.json in order to test run this in node (zB node store.js), 
//      if you use import { createStore } from 'redux';
//      if you use 'require', you don't need the "type: module" thing (zB: const xxx require('sourceOfxxx))
//
//  another thing to do, by example:
//      const pkg = require('@reduxjs/toolkit');
//      const { createAsyncThunk } = pkg;

import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../components/auth/authSlice.js';  
import listingsReducer from '../components/listings/listingsSlice.js';      
import listingReducer from '../components/listing/listingSlice.js';    
// import searchReducer from '../components/search/searchSlice.js';    // maybe don't need

// I don't like bulky / messy arguments, so...
const reducersObj = () => {
    return {
        reducer: {
            auth: authReducer,
            listings: listingsReducer,
            listing: listingReducer
        }    
    }
}
// ... it's basically a createStore() / combineReducers() substitute. woo.
const store = configureStore(reducersObj());

console.log(store);

// EXPORT
export default store;

// *********************************************
