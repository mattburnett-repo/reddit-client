import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const REDDIT_OAUTH_URL = process.env.REACT_APP_REDDIT_OAUTH_URL;

export const getComments = createAsyncThunk(
    'comments/getComments',
        async ( article_id, { getState } ) => {
        try {
            const authToken = getState().auth.token.value;

            const theBaseURL = `${REDDIT_OAUTH_URL}`;  
            const pathName = '/comments/' + article_id + '.json';
            const theURL = `${theBaseURL}${pathName}`;

            const data = await fetch(theURL, { 
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'User-Agent': 'reddit client app project',
                }
            });
    
            const json = await data.json();
            // data.json() returns array with two elements. element [1] looks like it has the comments data. maybe [0] is the article?
            return json[1].data.children; 
        } catch(e) {
            console.log(e);
        }
    }
);

const options = {
    name: 'comments',
    initialState: {
        theComments: [],
        isLoading: false,
        hasError: false,
        errorMsg: ''
    },
    reducers: {
        testOutput: (state, action) => {
            console.log('comments/testOutput');
        }
    },
    extraReducers: (builder) => {             
        builder
            .addCase(getComments.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })  
            .addCase(getComments.fulfilled, (state, action) => {
                state.theComments = action.payload; 
                state.isLoading = false;
                state.hasError =  false;
                state.errorMsg = '';
            })  
            .addCase(getComments.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    }, // end extraReducers
} // end options

export const selectComments = (state) => state.comments.theComments; 
export const selectIsLoading = (state) => state.comments.isLoading;

export const commentsSlice = createSlice(options);
export const { testOutput } = commentsSlice.actions;

export default commentsSlice.reducer;
