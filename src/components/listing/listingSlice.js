import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const REDDIT_OAUTH_URL = process.env.REACT_APP_REDDIT_OAUTH_URL;

// TODO: make better use of destructuring when recieving a payload

export const getListing = createAsyncThunk(    
    'listing/getListing',
    async (id, { getState }) => {       // similar to getListings, but with a listing id this time
        try {
            const authToken = getState().auth.token.value;

            const theBaseURL = `${REDDIT_OAUTH_URL}`;  
            const theEndpoint = '/';                            // use 'id' passed as arg. this will involve Router / Links
            const theURL = `${theBaseURL}${theEndpoint}`;
    
            const data = await fetch(theURL, { 
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'User-Agent': 'reddit client app project',
                }
            });
    
            const json = await data.json();
    
            return json;
        } catch(e) {
            console.log(e);
        }
    } // end async
);

const options = {
    name: 'listing',
    initialState: {
        article: [],
        isLoading: false,
        hasError: false,
        errorMsg: ''
    },   
    reducers: {     
        testOutput: (state, action) => {       
            console.log('listing/testOutput');
        },
    }, 
    extraReducers: (builder) => {             
        builder
            .addCase(getListing.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })  
            .addCase(getListing.fulfilled, (state, action) => {
                state.article = action.payload;   // TODO map or something over the payload array, pull out min necessary data. id / title / picture, at min.
                state.isLoading = false;
                state.hasError =  false;
                state.errorMsg = '';
            })  
            .addCase(getListing.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })  
    }, // end extraReducers
} // end options

export const listingSlice = createSlice(options);
export const { testOutput } = listingSlice.actions;

export default listingSlice.reducer;