import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

// import {URLSearchParams} from  'url';

export const getListings = createAsyncThunk(
    'listings/getListings',
    async (dummyArg, { getState }) => {                                          
        const authToken = getState().auth.token.value;

        const theBaseURL = 'https://oauth.reddit.com';  
        // It looks like the requirements mean by "Users can filter the data based on categories that are predefined" these endpoints:
        //      best / controversial / hot / new / random / rising / top
        const theEndpoint = '/';                            // reddit defaults to 'best'? control this with Router / Links
        const theURL = `${theBaseURL}${theEndpoint}`;

        const data = await fetch(theURL, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'User-Agent': 'reddit client app project',
            }
        });

        const json = await data.json();

        return json.data.children; // return an array of the listings 
    }
);

// const searchListings = async () => {
//     // https://alpscode.com/blog/how-to-use-reddit-api/  'playing with the api' section
// }

const options = {
    name: 'listings',
    initialState: {
        listings: [],
        isLoading: false,
        hasError: false,
        errorMsg: '',
        filter: '/',                // best / controversial / hot / new / random / rising / top
        searchTerm: '',             // not sure if this should have its own slice...
    },   
    reducers: {     
        testOutput: (state, action) => {       
            console.log('listings/testOutput');
        },
    }, // end reducers
    extraReducers: (builder) => {             // async / thunk handling goes here
        builder
            // for getListings
            .addCase(getListings.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })  
            .addCase(getListings.fulfilled, (state, action) => {
                state.listings = action.payload;   // TODO map or something over the payload array, pull out min necessary data. this thing is huge
                state.isLoading = false;
                state.hasError =  false;
            })  
            .addCase(getListings.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    }, // end extraReducers
} // end options

export const listingsSlice = createSlice(options);
export const { testOutput } = listingsSlice.actions;

export default listingsSlice.reducer;
