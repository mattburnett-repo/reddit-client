import { createSlice }  from '@reduxjs/toolkit';

//  apiSandbox.js
// TODO: get keys from .env
//          for whatever reason, process.env just won't work
//              apiSandbox.js just won't do it


const options = {
    name: 'items',
    initialState: {
        items: [],
        isLoading: false,
        hasError: false,
        authToken: {
            value: '',
            expiresIn: 0
        }
    },   
     // do we even need reduders? but what about export? itemSlice.reducers still works, or do we 
     //     use itemSlice.extraReducers?
     //     should be easy to sort out when we get there...
    reducers: {     
        testOutput: (state, action) => {       
            console.log('items/testOutput');
            return {
                type: 'items',
                payload: 'test output'
            }
        },
    }, // end reducers
    // extraReducers: builder => {             // async / thunk handling goes here
    //     builder
    //         .addCase();
    //         // more addCase here
    // },
} // end options

export const itemsSlice = createSlice(options);
// export const { getItems, getItemById, filterItems, searchTerms } = itemsSlice.actions;

export default itemsSlice.reducer;
