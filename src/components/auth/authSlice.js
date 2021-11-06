import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const REDDIT_CLIENT_ID = process.env.REACT_APP_REDDIT_CLIENT_ID;
const REDDIT_USERNAME = process.env.REACT_APP_REDDIT_USERNAME;
const REDDIT_PASSWORD = process.env.REACT_APP_REDDIT_PASSWORD;
const REDDIT_AUTH_REQUEST_URL = process.env.REACT_APP_REDDIT_AUTH_REQUEST_URL;

export const requestAuth = createAsyncThunk(
    'auth/requestAuth',
    async () => {
        try {
            const params =  new URLSearchParams();
            params.append('grant_type', 'client_credentials'); // params.append('grant_type', 'password'); results in 'invalid_grant' error
            params.append('username', REDDIT_USERNAME);
            params.append('password', REDDIT_PASSWORD);

            const data = await fetch(`${REDDIT_AUTH_REQUEST_URL}`, {
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
        } catch(e) {
            console.log(e);
        } // end try/catch
    } // end async
);

const options = {
    name: 'auth',
    initialState: {
        token: {                
            value: '',
            expiresIn: 0,
            expireStart: 0,
            expireEnd: 0
        },
        isLoading: false,
        hasError: false,
        errorMsg: ''
    },   
    reducers: {     
        testOutput: (state, action) => {       
            console.log('auth/testOutput');
        },
    }, 
    extraReducers: (builder) => { 
        builder
            .addCase(requestAuth.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.errorMsg = '';
            })  
            .addCase(requestAuth.fulfilled, (state, action) => {
                state.token.value = action.payload.access_token;      
                state.token.expiresIn = action.payload.expires_in;
                state.token.expireStart = Math.round(Date.now() / 1000);
                state.token.expireEnd = Math.round(Date.now() / 1000) + action.payload.expires_in;
                state.isLoading = false;
                state.hasError =  false;
                state.errorMsg = '';
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
export default authSlice.reducer;