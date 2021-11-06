import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

// import fetch from 'node-fetch'; // TODO: don't forget about type: module in package.json. Also note in README that node-fetch needs to be installed
// import {URLSearchParams} from  'url';

const getListing = createAsyncThunk( // maybe almost the same as getListings, but with different endpoint?
    'listings/getListing',
    async (id, thunkAPI) => {
        // similar to getListings, but with a listing id this time

    } // end async
);

const options = {
    name: 'listing',
    initialState: {
        listing: [],
        isLoading: false,
        hasError: false,
    },   
     // do we even need reducers? but what about export? itemSlice.reducers still works, or do we 
     //     use itemSlice.extraReducers?
     //     should be easy to sort out when we get there...
    reducers: {     
        testOutput: (state, action) => {       
            console.log('listing/testOutput');
            return {
                type: 'listing',
                payload: 'test output'
            }
        },
    }, // end reducers
    extraReducers: (builder) => {             // async / thunk handling goes here
        builder
            // for getListing
            .addCase(getListing.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })  
            .addCase(getListing.fulfilled, (state, action) => {
                state.listings.currentListing = action.payload;   // TODO probably needs more detail. pull specific elements from listing object. This object is huge
                state.isLoading = false;
                state.hasError =  false;
            })  
            .addCase(getListing.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })  
    }, // end extraReducers
} // end options

export const listingSlice = createSlice(options);
// export const { testOutput, requestAuth, getListings } = itemsSlice.actions;

export default listingSlice.reducer;