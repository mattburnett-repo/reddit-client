import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const REDDIT_OAUTH_URL = process.env.REACT_APP_REDDIT_OAUTH_URL;

// TODO: make better use of destructuring when receiving a payload

export const getListings = createAsyncThunk(
    'listings/getListings',
    async (dummyArg, { getState }) => {                       
        try {
            const authToken = getState().auth.token.value;

            const theBaseURL = `${REDDIT_OAUTH_URL}`;  
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
    
            return json.data.children; // return an array of the listings/articles 
        } catch(e) {
            console.log(e);
        }  // end try/catch            
    } // end async
);

// export const searchListings = async () => {
//     // https://alpscode.com/blog/how-to-use-reddit-api/  'playing with the api' section
// }

const options = {
    name: 'listings',
    initialState: {
        articles: [],
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
