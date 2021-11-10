import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const REDDIT_OAUTH_URL = process.env.REACT_APP_REDDIT_OAUTH_URL;

export const getComments = createAsyncThunk(
    'comments/getComments',
    async(articleID=0, { getState }) => {
        try {
            const authToken = getState().auth.token.value;

            const theBaseURL = `${REDDIT_OAUTH_URL}`;  
            const pathName = '/comments/' + articleID;
            const theURL = `${theBaseURL}${pathName}`;

            // TODO: mock the comments fetch for now.
            const data = await fetch(theURL, { 
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'User-Agent': 'reddit client app project',
                }
            });
    
            const json = await data.json();
            return json.data.children; 

        } catch(e) {
            console.log(e);
        }
    }
);

const options = {
    name: 'comments',
    initialState: {
        comments: [],
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
                state.comments = action.payload;
                // state.articles = action.payload.data.children; 
                // state.pathName = action.payload.pathName;
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

export const selectComments = (state) => state.comments;
export const selectIsLoading = (state) => state.comments.isLoading;

export const commentsSlice = createSlice(options);
export const { testOutput } = commentsSlice.actions;

export default commentsSlice.reducer;
