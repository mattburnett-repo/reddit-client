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
//      you have to add "type": "module",  to package.json in order to test run this in node, if you use 'import'
// import { createStore } from 'redux';
//      if you use 'require', you don't need the "type: module" thing
const { createStore } = require('redux');

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

// SUBSCRIBE HANDLERS
// const reactToStateChange = () => {
//     console.log('state changed again');
// }

// reducer
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

// adding "type": "module", to package.json makes this possible without export / module weirdness
//      but you can instead use const { createStore } = require('redux'); look towards top of code...
const store = createStore(itemsReducer);

// let's do some tests!
//      *** moved testing over to __tests__/Store.test.js

// const unsubscribe = store.subscribe(reactToStateChange); // subscribe 'reactToStateChange' to store. it reads sort of backwards.

// store.dispatch(getItems());
// store.dispatch(getItemById(2));
// console.log('unsubscribe here');
// unsubscribe();
// store.dispatch(filterItems('filter item'));
// store.dispatch(searchItems('search term'));

// SELECTORS
//      how are these different from actions / action creators???
// const selectItems(() => return state.Items);
// const selectItemById(() => ???);

export { store, getItems, getItemById, filterItems, searchItems };

// *********************************************
// *********************************************
// *********************************************