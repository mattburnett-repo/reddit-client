import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'items',
    initialState: [],
    reducers: {
        getItems: (state, action) => {
            return {
                type: 'items/getItems',
                payload: '???'
            }
            // return state.allItems;
        },
        getItemById: (state, action) => { // FIXME: needs id param
            // return {
            //     type: 'items/getItemById',
            //     payload: 'needs id param'
            // }
            return state.allItems[action.payload.id]; // not sure where id will end up
        },
        filterItems: (state, action) => { // FIXME: needs filterTerms
            // return {
            //     type: 'items/filterItems',
            //     payload: 'needs filterTerm param'
            // }
            const allItems = state.allItems;
            const filterTerms = state.filterTerms;
        
            return allItems.filter((item) => 
                item.name.toLowerCase().includes(filterTerms.name.toLowerCase())
            );
        },
        searchTerms: (state, action) => { // FIXME: needs searchTerms
            // return {
            //     type: 'items/searchItems',
            //     payload: 'needs searchTerm param'
            // }
            const allItems = state.allItems;
            const searchTerms= state.searchTerms;
        
            return allItems.filter((item) => 
                item.name.toLowerCase().includes(searchTerms.name.toLowerCase())
            );
        }, 
    }, // end reducers
} // end options

export const itemsSlice = createSlice(options);
export const { getItems, getItemById, filterItems, searchTerms } = itemsSlice.actions;
export default itemsSlice.reducer;
