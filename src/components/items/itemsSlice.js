import { createSlice }  from '@reduxjs/toolkit';

//  apiSandbox.js


const options = {
    name: 'items',
    initialState: {
        items: [],
        isLoading: false,
        hasError: false
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
