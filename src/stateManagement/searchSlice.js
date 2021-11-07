import  { createSlice }  from "@reduxjs/toolkit";

// https://www.reddit.com/dev/api#search

const options = {
    name: 'search',
    initialState: '',
    reducers: {
        setSearch: (state, action) => {
            // return {...state, action.payload} 
            return '';
        },
        getSearch: (state, action) => {
            // ???
            return '';
        }
    } // end reducers
}  // end options

export const searchSlice = createSlice(options);
export const { setSearch, getSearch } = searchSlice.actions;
export default searchSlice.reducer;
