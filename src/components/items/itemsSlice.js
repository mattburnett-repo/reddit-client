import { createSlice }  from '@reduxjs/toolkit';

const options = {
    name: 'items',
    initialState: [],   // needs some kind of definition / object instead of blank array?
    reducers: {
        loadData: (state,action) => {       // main async API call here?
            return {
                type: 'items',
                payload: 'loadData'
            }
        },
    }, // end reducers
} // end options

export const itemsSlice = createSlice(options);
export const { getItems, getItemById, filterItems, searchTerms } = itemsSlice.actions;

// https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-redux/modules/refactoring-with-redux-toolkit/lessons/the-redux-toolkit/exercises/return-object-reducers
export default itemsSlice.reducer;
