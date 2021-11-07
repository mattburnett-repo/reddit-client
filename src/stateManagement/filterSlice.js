import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => {
            // return {...state, action.payload} 
            return '';
        },
        getFilter: (state, action) => {
            // ???
            return '';
        }
    } // end reducers
}  // end options

export const filterSlice = createSlice(options);
export const { setFilter, getFilter } = filterSlice.actions;
export default filterSlice.reducer;