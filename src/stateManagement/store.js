// *********************************************
// *********************************************
// *********************************************

// ACTIONS
// use the createSlice / configureStore things from reduxtoolkit.
//      it replaces most of the stuff already in this file, and addresses all of the issues already here

// REDUCER
// itemsReducer = (state, action) => {}
//      what to do about async / thunk actions?

// SELCTORS
//      selectItem = () => {() => return state.item} or something like this...

// SUBSCRIBE
//      first, create renderFunction = () => return some react stuff;
//      then, invoke renderFunction() for initial render
//      then, trigger re-renders using store.subscribe(renderFunction);
// *********************************************

// *********************************************
// !!!!!!!
//      you have to add "type": "module",  to package.json in order to test run this in node (zB node store.js), 
//          if you use -> 
//              import { createStore } from 'redux';
//          if you use 'require', you don't need the "type: module" thing

// IMPORT
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import itemsReducer from '../components/items/itemsSlice.js';
import filterReducer from '../components/filter/filterSlice.js'
import searchReducer from '../components/search/searchSlice.js'
// import { itemsSlice } from '../components/items/itemsSlice';
// import { filterSlice } from '../components/filter/filterSlice';
// import { searchSlice } from '../components/search/searchSlice';

// REDUCER
const rootReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    search: searchReducer
})

// ACTION CREATORS

// ASYNC FUNCTIONALITY

// SUBSCRIBE HANDLERS

// SLICE

// adding "type": "module", to package.json makes this possible without export / module weirdness
//      but you can instead use const { createStore } = require('redux'); look towards top of code...
// redux configureStore();
// const store = createStore(itemsSlice);
const store = configureStore(rootReducer);

// SELECTORS

// EXPORT
export { store };

// *********************************************
// *********************************************
// *********************************************