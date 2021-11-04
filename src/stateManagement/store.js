// *********************************************
// !!!!!!!
//  you have to add "type": "module",  to package.json in order to test run this in node (zB node store.js), 
//      if you use import { createStore } from 'redux';
//      if you use 'require', you don't need the "type: module" thing (zB: const xxx require('sourceOfxxx))
//
//  another thing to do, by example:
//      const pkg = require('@reduxjs/toolkit');
//      const { createAsyncThunk } = pkg;

// IMPORT
import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from '../components/items/itemsSlice.js';      
import filterReducer from '../components/filter/filterSlice.js';
import searchReducer from '../components/search/searchSlice.js';

// I don't like bulky / messy arguments, so...
const reducersObj = () => {
    return {
        reducer: {
            items: itemsReducer,
            filter: filterReducer,
            search: searchReducer
        }    
    }
}
// ... it's basically a createStore() / combineReducers() substitute. woo.
const store = configureStore(reducersObj());

// console.log(store);

// EXPORT
export default store;

// *********************************************
