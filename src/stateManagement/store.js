// *********************************************
// *********************************************
// *********************************************
// a basic store can have actions / reducer / selectors all in one file, right?
//      dispatchers come from the UI / other sys events?
//      re-renders come from 'subscribe' in the UI?
//          useEffect?
//      from 'redux' library:
//          store = createStore(reducer)
//              'store' is 'state' elsewhere in app?
//          store.getState()
//          store.dispatch(action)
//          store.subscribe(listener)
//      store receives actions, then executes reducer
//          reducer execution results from action dispatch

// ACTIONS
// these all use the third-party API, therefore async:
// getItems
// getItemById(id)
// filterItems(filterItem)
//      return items.filter(item => {item.something !== filterTerm})
// searchItems(term)
//      return items.includes().... 'includes' only returns boolean
//              return items.forEach(item => items.includes(term)) ???
//      these are async, therefore thunks, therefore defined outside of reducer, therefore 'extraReducers'?
//          but 'extraReducers' is a feature of toolkit?
//
//  the store can subscribe to actions that are dispatched / state is changed

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
import { createStore } from 'redux';
// const { createStore } = require('redux'); // testing now from __tests__ folder, not running locally in node

// // ACTION CREATORS
const getItems = () => {
    return {
        type: 'items/getItems',
        payload: '???'
    }
}
const getItemById = (id) => {
    return {
        type: 'items/getItemById',
        payload: id
    }
}
const filterItems = (filterTerm) => {
    return {
        type: 'items/filterItems',
        payload: filterTerm
    }
}
const searchItems = (searchTerm) => {
    return {
        type: 'items/searchItems',
        payload: searchTerm
    }
}

// ASYNC FUNCTIONALITY
//      provided by 'redux-thunk', which is also bundled in @reduxjs/toolkit
//          -thunk is classified as a middleware
//      redux 'applyMiddleware' function
//          takes function as arg
//          goes as third arg to createStore(). second arg is initialState?
//      redux-thunk is such a popular solution for handling asynchronous logic that it is included in Redux Toolkit. 
//      "It also exists as a standalone package, but you won’t need to install redux-thunk separately if you use Redux Toolkit. 
//          This is because Redux Toolkit’s configureStore function, which you learned about in a previous lesson, 
//          will apply redux-thunk to the store by default.
//
//          we may need to use tooklkit after all...
//              import { createStore } from '@reduxjs/toolkit'; <- not from Redux...

//      Code sort of looks like ->
//          const getUser = (id) => {
//              return async (dispatch, getState) => {
//              const payload = await fetchUser(id)
//              dispatch({type: 'users/addUser', payload: payload})
//              }
//          }

// SUBSCRIBE HANDLERS
// const reactToStateChange = () => {
//     console.log('state changed again');
// }

// reducer
//      have to account for filterTerm, itemsSlice, searchTerm
//          so the reducer would have filterTerm and searchTerm, with whatever reducer stuff, then extraReducers for the asynce API stuff

const initialState = {};
const itemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'items/getItems': 
            // console.log('items/getItems');
            return 'getItems';
        case 'items/getItemById': 
            // console.log('items/getItemById: ' + action.payload);
            return action.payload;
        case 'items/filterItems': 
            // console.log('items/filterItems: ' + action.payload);
            return action.payload;
        case 'items/searchItems': 
            // console.log('items/searchItems: ' + action.payload);
            return action.payload;
        default: 
            // console.log('default case');
            // return state;
            return 'default case';
    } // end switch
}

// SLICE
//      replace reducer with slices?

// adding "type": "module", to package.json makes this possible without export / module weirdness
//      but you can instead use const { createStore } = require('redux'); look towards top of code...
const store = createStore(itemsReducer);

// SELECTORS
//      how are these different from actions / action creators???
// const selectItems(() => return state.Items);
// const selectItemById(() => ???);

export { store, getItems, getItemById, filterItems, searchItems };

// *********************************************
// *********************************************
// *********************************************