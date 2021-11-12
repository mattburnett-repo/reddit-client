import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const REDDIT_OAUTH_URL = process.env.REACT_APP_REDDIT_OAUTH_URL;

export const getListings = createAsyncThunk(
    'listings/getListings',
    async (pathname='', { getState }) => {  
        try {
            const authToken = getState().auth.token.value;

            const theBaseURL = `${REDDIT_OAUTH_URL}`;  
            const theURL = `${theBaseURL}/${pathname}`;

            // console.log('getListings.pathname: ' + pathname)
            // console.log('getListings.theURL: ' + theURL)
    
            const data = await fetch(theURL, { 
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'User-Agent': 'reddit client app project',
                }
            });
    
            const json = await data.json();
    
            return json.data.children;  // return an array of the listings/articles 
            
        } catch(e) {
            console.log(e);
        }  // end try/catch            
    } // end async
);

const options = {
    name: 'listings',
    initialState: {
        articles: [],
        isLoading: false,
        hasError: false,
        errorMsg: '',
        pathName: '/',              // best / controversial / hot / new / random / rising / top
        searchTerm: '',             // ends up in pathName already
    },   
    reducers: {     
        testOutput: (state, action) => {       
            console.log('listings/testOutput');
        },
    }, 
    extraReducers: (builder) => {             
        builder
            .addCase(getListings.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })  
            .addCase(getListings.fulfilled, (state, action) => {
                state.articles = action.payload;
                // state.articles = action.payload.data.children; 
                // state.pathName = action.payload.pathName;
                state.isLoading = false;
                state.hasError =  false;
                state.errorMsg = '';
            })  
            .addCase(getListings.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    }, // end extraReducers
} // end options

export const selectListings = (state) => state.listings.articles;
export const selectIsLoading = (state) => state.listings.isLoading;

export const listingsSlice = createSlice(options);
export const { testOutput } = listingsSlice.actions;

export default listingsSlice.reducer;
