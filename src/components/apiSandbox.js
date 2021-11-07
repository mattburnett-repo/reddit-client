import fetch from 'node-fetch'; // TODO: don't forget about type: module in package.json. Also note in README that node-fetch needs to be installed
import {URLSearchParams} from  'url';

// curl -X POST -d 'grant_type=password&username=MattBurnettMusic&password=redditP@ssw0rd' --user '1usv-ippT-IVgIH4hHxi4g:BoJUN9u1Zhg2GUFiEin5f02xARO2Lw' --user-agent 'my test bot 1.0' https://www.reddit.com/api/v1/access_token
// {"access_token": "66965855775-DEnSOX1uUo3CfYEQ4bXrwx41xppAJA", "token_type": "bearer", "expires_in": 3600, "scope": "*"}

// TODO: moved these keys to .env, but can't get process.env to pick them up
//          put them in ./index.js, but since this file is a sandbox, the env vars
//              won't be picked up here
//          env vars get picked up with npm start. we run this file in node
const REDDIT_CLIENT_ID = '1usv-ippT-IVgIH4hHxi4g:BoJUN9u1Zhg2GUFiEin5f02xARO2Lw';
const REDDIT_USERNAME = 'MattBurnettMusic';
const REDDIT_PASSWORD = 'redditP@ssw0rd';

// console.log('process.env.REACT_APP_REDDIT_CLIENT_ID: '  + process.env.REACT_APP_REDDIT_CLIENT_ID);
// console.log('process.env.REACT_APP_REDDIT_USERNAME: ' + process.env.REACT_APP_REDDIT_USERNAME);
// console.log('process.env.REACT_APP_REDDIT_PASSWORD: ' + process.env.REACT_APP_REDDIT_PASSWORD);

const requestAuth = async () => {
    // TODO: set authToken.value / authToken.expiresIn in state/slice/extraReducers(fulfilled)
    //          expires usually after one hour / 3600 seconds
    //          calculate timeToLive, set value to expire time.
    //          maybe use also a isExpired boolean
    const params =  new URLSearchParams();
    params.append('grant_type', 'password');
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

    console.log(`json`, json);

    return json;
};

// TODO: this needs better error handling

// const getListings = createAsyncThunk(
//     'items/getListings',
//     async () => {
//         const data = await fetch({redditApi});
//         const output = await data.json();

//         return output;
//     }
// )

const getListings = async () => {
    const authRequest = await requestAuth();
    const authToken = authRequest.access_token;
    const theBaseURL = 'https://oauth.reddit.com';  
    // I think the requirements mean by "Users can filter the data based on categories that are predefined" these endpoints:
    //      best / controversial / hot / new / random / rising / top
    const theEndpoint = '/';                            // reddit defaults to 'best'?
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
}

// const searchListings = async () => {
//     // https://alpscode.com/blog/how-to-use-reddit-api/  'playing with the api' section
// }

// SOME TESTINGS
// const result = await requestAuth();
// console.log('authToken:' + result.access_token);

// UNCOMM HERE TO SHOW LISTINGS FROM FETCH
// console.log(await getListings());
// const res = await getListings();
// console.log('res.kind: ' + res.kind);
// console.log('res.data.after: ' + res.data.after);
// console.log('res.data.children[0].kind: ' + res.data.children[0].kind);
// console.log('res.data.children[0].data: ' + res.data.children[0].data);

// need some code to see what's in the data ->
// https://stackoverflow.com/questions/27862687/javascript-extract-array-from-json-object
// var json = '[{"a1" : "a1Val", "a2" : "a2Val", "a3" : "a3Val"},{"b1" : "b1Val", "b2" : "b2Val", "b3" : "b3Val"},{"z1" : "z1Val", "z2" : "z2Val", "z3" : "z3Val"}]',
// data = JSON.parse(json, function (key, value) {
//     if (key !== "" && typeof value === 'object') {
//         Object.keys(value).forEach(function (name) {
//             if (name.slice(-1) !== '2') {
//                 delete value[name];
//             }
//         });
//     }

//     return value;
// });


