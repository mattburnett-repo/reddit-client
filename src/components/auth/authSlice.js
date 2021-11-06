import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

// import {URLSearchParams} from  'url';

const REDDIT_CLIENT_ID = process.env.REACT_APP_REDDIT_CLIENT_ID;
const REDDIT_USERNAME = process.env.REACT_APP_REDDIT_USERNAME;
const REDDIT_PASSWORD = process.env.REACT_APP_REDDIT_PASSWORD;

// TODO: NEEDS ERROR HANDLING!!!
//          invalid_grant, usw.

export const requestAuth = createAsyncThunk(
    'auth/requestAuth',
    async () => {
        // TODO: set auth.token.value / auth.token.expiresIn in state/slice/extraReducers(fulfilled)
        //          expires usually after one hour / 3600 seconds
        //          calculate timeToLive, set value to expire time.
        //          maybe use also a isExpired boolean
        const params =  new URLSearchParams();
        params.append('grant_type', 'client_credentials'); // params.append('grant_type', 'password'); results in 'invalid_grant' error
        params.append('username', REDDIT_USERNAME);
        params.append('password', REDDIT_PASSWORD);

        const data = await fetch('https://www.reddit.com/api/v1/access_token', {
            method: 'POST',
            body: params,
            headers: {
                'Authorization': `Basic ${Buffer.from(`${REDDIT_CLIENT_ID}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'reddit client app project'
            },
        });

        // {"access_token": someKeyValue, "token_type": "bearer", "expires_in": 3600, "scope": "*"}
        const json = await data.json();

        return json;
    }
);

const options = {
    name: 'auth',
    initialState: {
        token: {                
            value: '',
            expiresIn: 0,
            isExpired: false
        },
        isLoading: false,
        hasError: false,
        errorMsg: ''
    },   
    reducers: {     
        testOutput: (state, action) => {       
            console.log('auth/testOutput');
        },
    }, // end reducers
    extraReducers: (builder) => {             // TODO: check if token has already expired. if not, don't do anything. not sure where to do this, probably at call, not here.
        builder
            .addCase(requestAuth.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })  
            .addCase(requestAuth.fulfilled, (state, action) => {
                state.token.value = action.payload.access_token;      
                state.token.expiresIn = action.payload.expires_in;
                state.isLoading = false;
                state.hasError =  false;
            })  
            .addCase(requestAuth.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error;
            })  
    }, // end extraReducers
} // end options

export const authSlice = createSlice(options);
export const { testOutput } = authSlice.actions;
export const selectAuthToken = (state) => state.auth.token.value;
export default authSlice.reducer;