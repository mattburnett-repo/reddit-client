// *********************************************
// *********************************************
// *********************************************

// ACTIONS
// use the createSlice / configureStore things from reduxtoolkit.

// REDUCER


// SELCTORS

// SUBSCRIBE
// *********************************************

// *********************************************
// !!!!!!!
//      you have to add "type": "module",  to package.json in order to test run this in node (zB node store.js), 
//          if you use import { createStore } from 'redux';
//          if you use 'require', you don't need the "type: module" thing (zB: const xxx require('sourceOfxxx))

// IMPORT
import { configureStore } from '@reduxjs/toolkit';

import itemsReducer from '../components/items/itemsSlice.js'; // picks up the default export (itemsSlice.reducer) and names it as 'itemsReducer'...
import filterReducer from '../components/filter/filterSlice.js';
import searchReducer from '../components/search/searchSlice.js';

// import { itemsSlice } from '../components/items/itemsSlice';
// import { filterSlice } from '../components/filter/filterSlice';
// import { searchSlice } from '../components/search/searchSlice';

// REDUCER
// const rootReducer = combineReducers({
//     items: itemsReducer,
//     filter: filterReducer,
//     search: searchReducer
// });

// adding "type": "module", to package.json makes this possible without export / module weirdness
//      but you can instead use const { createStore } = require('redux'); look towards top of code...
// const store = createStore(itemsSlice);
// const store = configureStore(rootReducer);
const store = configureStore({
    reducer: {
        items: itemsReducer,
        filter: filterReducer,
        search: searchReducer
    }    
});

// EXPORT
export default store ;

// *********************************************
// *********************************************
// *********************************************